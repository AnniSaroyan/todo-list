<template>
 
  <v-container>
    <TaskModal
    v-if = "isTaskModalOpen"
     :isOpen = "isTaskModalOpen" 
    @close = "toggleTaskModal"
    @taskSave ="onTaskSave"
    />
   
    <v-row align="center" justify="center">
        <v-col cols="auto">
        <v-btn @click="toggleTaskModal" density="default" 
        class="text-none mb-4"
        color="indigo-darken-3"
        size="x-large"        
       >Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script src="./todoList.js"></script>
