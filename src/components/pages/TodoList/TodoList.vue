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
    <confirmDialog
      :isOpen="isDeleteDialogOpen"
      title="Attention!"
      :text="confirmDialogText"
      @close="toggleDeleteDialog"
      @confirm="onSelectedTasksDelete"
    />
   
    <v-row align ="center" justify="center">
        <v-col cols="auto">
        <v-btn  @click="toggleTaskModal" density="default" 
        class="text-none mb-4"
        color="blue-lighten-1"
        size="x-large"        
       >Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container >
    <v-row >
      <v-col v-for = "taskData in tasks" :data="taskData" :key="taskData._id" cols="12" xs="12" sm="6" md="4" lg="3">
        <task :data="taskData"
        :isSelected="selectedTasks.has(taskData._id)"
         @taskEdit="onTaskEdit(taskData)"  
         @taskDelete="onTaskDelete(taskData._id)" 
         @taskStatus="onTaskStatusChange(taskData)"
         @taskSelect="toggleTaskId(taskData._id)" />     
      </v-col>
    </v-row>
  </v-container>

  <v-btn
    :disabled="isDeleteSelectedBtnDisabled"
    class="delete-selected-btn"
    color="error"
    variant="elevated"
    @click="toggleDeleteDialog"
  >
    <v-icon icon="mdi-delete-outline" class ="icon"/> Delete selected
  </v-btn>
</template>
<script src="./todoList.js"></script>

<style scoped>
.icon{
  margin-right: 15px;
}
.delete-selected-btn {
  position: fixed;
  right: -145px;
  bottom: 40px;
}
.delete-selected-btn:hover {
  animation-name: btn-animation;
  animation-duration: 0.8s;
  right: 20px;
}
@keyframes btn-animation {
  from {
    right: -145px;
  }
  to {
    right: 20px;
  }
}
</style>

