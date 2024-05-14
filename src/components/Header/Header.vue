
<template>
  <v-app>
    <v-app-bar app color="blue-lighten-1" dark fixed >
      <v-toolbar-title class="white--text">My Todo List</v-toolbar-title>
      <v-spacer></v-spacer>      
      <v-list-item v-for="item in items" :key="item.id">
      <router-link :to="item.link">      
      <v-icon>{{ item.icon }}</v-icon>    
      <v-list-item-title>{{ item.text }}</v-list-item-title>        
      </router-link>          
      </v-list-item>
    </v-app-bar>
      <v-main>
      <router-view></router-view>
      </v-main>
  </v-app>
</template>



<script src="./header.js"></script>


