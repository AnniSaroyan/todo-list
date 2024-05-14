
import { mapMutations } from 'vuex'
import TaskApi from '../../../utils/taskApi.js'
import TaskModal from '../../TaskModal/TaskModal.vue'

const taskApi = new TaskApi()
export default {
  components: {
    TaskModal
  },
  data() {
    return {
      task: null,
      isEditModalOpen: false
    }    
  },
  created() {
    this.getTask()
  },
  computed: {
    createdAt() {
      return this.task.created_at.slice(0, 10)
    },
    dueDate() {
      return this.task.date?.slice(0, 10) || 'none'
    }
  },
  methods: {
    ...mapMutations(['toggleLoading']),
    toggleTaskModal() {
      this.isEditModalOpen = !this.isEditModalOpen
    },

    getTask() {
      const taskId = this.$route.params.taskId
      taskApi
        .getSingleTask(taskId)
        .then((task) => {
          this.task = task
        })
        .catch(this.handleError)
    },

    onSave(editingTask) {
      this.toggleLoading(); 
      this.task = editingTask;
      taskApi.updateTask(editingTask)
        .then(() => {      
          this.isEditModalOpen = false; 
          this.$toast.success('The task has been updated successfully!');
        })
        .catch(this.handleError) 
        .finally(() => {
          this.toggleLoading(); 
        });
    },

    toggleStatus() {
      this.toggleLoading()
      this.task.status = this.task.status === 'active' ? 'done' : 'active';
      const taskId = this.task
      taskApi    
        .updateTask(taskId)
        .then((updatedTask) => {          
          let message
          if (updatedTask.status === 'done') {
            message = 'Congratulations, the task is done!'
          } else {
            message = 'You have successfully restored the task!'
          }
          this.$toast.success(message)
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },   

    onDelete() {
      this.toggleLoading()
      const taskId = this.task._id
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.$router.push('/')
          this.$toast.success('The task have been deleted successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
      handleError(error) {
      this.$toast.error(error.message)
    },
  }
  
}