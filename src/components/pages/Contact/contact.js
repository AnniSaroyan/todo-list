
import FormApi from '../../../utils/formApi.js'
import { mapMutations } from 'vuex'

const formApi = new FormApi();

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
export default {    
  data: () => ({
    name: '',
    email: '',
    message: '',
    nameRules: [(v) => !!v || 'Name is required'],
    emailRules: [(v) => !!v || 'Email is required', (v) => emailRegex.test(v) || 'Invalid email']
  }),
  methods: {
    ...mapMutations(['toggleLoading']),    
    async sendForm() {
      this.toggleLoading()
      const isValid = await this.validate()      
      if (!isValid) {
        return
      }
      const form = {
        name: this.name,
        email: this.email,
        message: this.message
      }          
      formApi    
      formApi.sendForm(form)
        .then(() => { 
                     
          this.$toast.success('The data was sent successfully');
          this.reset(); 
        })
        .catch(this.handleError) 
        .finally(() => {
          this.toggleLoading()
        })     
    },
       async validate() {
       const { valid } = await this.$refs.form.validate()
       return valid
    },
        reset() {
       this.$refs.form.reset()
    },
        mounted() {       
            this.$refs.name.focus()        
    },      
        moveToEmailField() {
          this.$refs.email.focus();
    },
        moveToMessageField() {
            this.$refs.messange.focus();
    },
  }
}