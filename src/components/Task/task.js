
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    createdAt() {
      return this.data.created_at.slice(0, 10)
    },
    dueDate() {
      return this.data.date?.slice(0, 10) || 'none'
    },
  },
  methods: {
    onEdit() {
      this.$emit('taskEdit')
    },
    onDelete() {
      this.$emit('taskDelete')
    },

    toggleStatus() {
      const updatedTask = this.data.status = this.data.status === 'active' ? 'done' : 'active';      
      this.$emit('taskStatus', updatedTask)    
     },
    onSelect() {
      this.$emit('taskSelect')
    },
  }
 
}