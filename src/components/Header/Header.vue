

<template>
  <v-app>
    <v-app-bar app color="blue-lighten-1" dark fixed >
      <v-toolbar-title class="white--text">My Todo List</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-list-item v-for="item in items" :key="item.id">
    <router-link :to="item.link" class="v-list-item ">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
      
          </router-link>
          
  </v-list-item>
  <v-btn icon>
        <a href="https://github.com/AnniSaroyan/todo-list" target="_blank">
    <v-icon>mdi-github</v-icon>
  </a></v-btn>
  <v-btn icon>
        <a href="https://www.linkedin.com" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </a>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>



<script src="./header.js"></script>


