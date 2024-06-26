
// import TaskApi from '../../../utils/taskApi.js'

// const taskApi = new TaskApi()

// export default {
//   data() {
//     return {
//       task: null
//     }
//   },
//   created() {
//     this.getTask()
//   },
//   computed: {
//     createdAt() {
//       return this.task.created_at.slice(0, 10)
//     },
//     dueDate() {
//       return this.task.date?.slice(0, 10) || 'none'
//     }
//   },
//   methods: {
//     getTask() {
//       const taskId = this.$route.params.taskId
//       taskApi
//         .getSingleTask(taskId)
//         .then((task) => {
//           this.task = task
//         })
//         .catch(this.handleError)
//     },
//     onEdit() {},
//     onDelete() {},
//     handleError(error) {
//       this.$toast.error(error.message)
//     }
//   }
// }


import TaskApi from '../../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
  data() {
    return {
      task: null
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
    getTask() {
      const taskId = this.$route.params.taskId
      taskApi
        .getSingleTask(taskId)
        .then((task) => {
          this.task = task
        })
        .catch(this.handleError)
    },
    onEdit() {
      this.$emit('taskEdit')
    },
    onDelete() {
      this.$emit('taskDelete')
    },

    toggleStatus() {     
      
      this.task.status = this.task.status === 'active' ? 'done' : 'active';
      
      this.$emit('taskStatus',this. task)      
      
    },
    handleError(error) {
      this.$toast.error(error.message)
    }
  }
  
}