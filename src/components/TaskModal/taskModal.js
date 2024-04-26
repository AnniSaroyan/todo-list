
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

  export default {
    components: {
      Datepicker
    },
    props:{
      isOpen: {
        type:Boolean,
        required:true
      }
    },
    data () {
      return {
        title: '',
        description: '',
        dueDate: ''
      }
    }
      ,
    methods: {
      onClose(){
        this.$emit('close')
      },
      onSave(){
        const newTask={
          title: this.title,
          description: this.description,
          date: this.dueDate
  
        }
        console.log(newTask)
        console.log('hhhhhh')
        this.$emit('taskSave',newTask)
      }
    },
    
   
  }
