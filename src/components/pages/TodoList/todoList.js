

import TaskModal from '../../TaskModal/TaskModal.vue'
import Task from '../../Task/Task.vue'
import SingleTask from '../../pages/SingleTask/SingleTask.vue'
import TaskApi from '../../../utils/taskApi.js'

const taskApi = new TaskApi()


export default {
  components:{
    TaskModal,
    Task,
    SingleTask   
  },
  
  data() {
    return {
      isTaskModalOpen:false,
      tasks: [],
      editingTask:null

    }
  },
  created() {
    this.getTasks()
  },

  watch: {
    editingTask(newValue) {      
      if (newValue) {
        this.isTaskModalOpen = true
      }
    },
    
    
    isTaskModalOpen(isOpen) {
      if (!isOpen && this.editingTask) {
        this.editingTask = null
      }
    }
  },

  methods: {
    toggleTaskModal (){
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
  
        

    getTasks(){
      taskApi
      .getTasks()
      .then((tasks)=>{       
        this.tasks=tasks        
      })      
      .catch(this.handleError) 
            
    },

    onTaskAdd(task){
     taskApi
    .addNewTask(task)
    .then((newTask)=>{
     this.tasks.push(newTask)
     this.toggleTaskModal()
     this.$toast.success('The task have been updated successfully!')
})

.catch(this.handleError)

   },
   
 
   onTaskSave(editedTask) {
    taskApi
    
      .updateTask(editedTask)
      .then((updatedTask) => {
        this.findAndReplaceTask(updatedTask)
        this.isTaskModalOpen = false
        this.$toast.success('The task have been updated successfully!')
      })
      .catch(this.handleError)
  },
  findAndReplaceTask(updatedTask) {
    const index = this.tasks.findIndex((t) => t._id === updatedTask._id)
    this.tasks[index] = updatedTask
  },
   handleError(error) {
    this.$toast.error(error.message)
   
  },

  onTaskStatusChange(editedTask) {
    taskApi    
      .updateTask(editedTask)
      .then((updatedTask) => {
        this.findAndReplaceTask(updatedTask)
        let message
        if (updatedTask.status === 'done') {
          message = 'Congratulations, the task is done!'
        } else {
          message = 'You have successfully restored the task!'
        }
        this.$toast.success(message)
      })
      .catch(this.handleError)
  },

  onTaskEdit(editingTask) {
    this.editingTask = editingTask
  },
  onTaskDelete(taskId) {
    taskApi
      .deleteTask(taskId)
      .then(() => {
        this.tasks = this.tasks.filter((t) => t._id !== taskId)
        this.$toast.success('The task have been deleted successfully!')
      })
      .catch(this.handleError)
  },
   

  }
}

