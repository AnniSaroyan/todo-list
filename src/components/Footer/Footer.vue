  
<template>
  <v-layout>
  <footer class="footer">
    <v-container dark fixed>
      <v-row>
     
        <v-col cols="12" sm="6" md="3">
          <h3>Quick Links</h3>
          <router-link to="/">Home</router-link>
          <router-link to="/contact-us">Contact us</router-link>
          <router-link to="/about">About us</router-link>
        </v-col>

        
        <v-col cols="12" sm="6" md="3">
          <h3>Follow Us</h3>
          <v-btn class="icon" icon href="https://github.com/AnniSaroyan/todo-list" target="_blank">
            <v-icon>mdi-github </v-icon>
          </v-btn>
          <v-btn icon href="https://www.linkedin.com" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-col>

      
        <v-col cols="12" md="6">
          <h3>Vuetify</h3>
          <p>&copy; 2024 Vuetify. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
  </v-layout>
</template>

  

<script src="./footer.js"></script>



<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  position: static;
  bottom: 0;
  left: 0;
  width: 100%;

  /* position: fixed; */
 
  /* display: block;
    unicode-bidi: isolate; */
}

.footer h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer a {
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
}

.footer a:hover {
  color: #6d6c6c;
  
}

</style>