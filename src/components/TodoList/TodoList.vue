<template>
 
  <v-container >
    <TaskModal
    v-if = "isTaskModalOpen"
     :isOpen = "isTaskModalOpen" 
    @close = "toggleTaskModal"
    @taskSave ="onTaskSave"
    />
   
    <v-row align ="center" justify="center">
        <v-col cols="auto">
        <v-btn  @click="toggleTaskModal" density="default" 
        class="text-none mb-4"
        color="indigo-darken-3"
        size="x-large"        
       >Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

 

  <v-container >
    <v-row >
      <v-col v-for = "taskData in tasks" :data="taskData" :key="taskData._id" cols="12" xs="12" sm="6" md="4" lg="3">
        <Task  :data="taskData" @taskEdit="onTaskEdit(taskData)" />      
      </v-col>
    </v-row>
  </v-container>

</template>


<script src="./todoList.js"></script>
