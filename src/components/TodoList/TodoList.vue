<template>
 
  <v-container >
    <TaskModal
    v-if = "isTaskModalOpen"
     :isOpen = "isTaskModalOpen" 
     :editingTask="editingTask"
    @close = "toggleTaskModal"
    @taskSave ="onTaskSave"
    @taskAdd = "onTaskAdd"
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
        <task :data="taskData" @taskEdit="onTaskEdit(taskData)"  @taskDelete="onTaskDelete(taskData._id)" />     
      </v-col>
    </v-row>
  </v-container>

</template>


<script src="./todoList.js"></script>
