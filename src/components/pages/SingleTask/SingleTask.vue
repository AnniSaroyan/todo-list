 
<template>
  <v-card v-if="task" class="mx-auto my-4" elevation="16" max-width="344">
    <task-modal
      v-if="isEditModalOpen"
      :isOpen="isEditModalOpen"
      :editingTask="task"
      @close="toggleTaskModal"
      @taskSave="onSave"
    />
    <v-card-item>
   
      <v-card-title> {{ task.title }} </v-card-title>
    </v-card-item>

    <v-card-text >
      {{ task.description }}
    </v-card-text>

    <v-card-text> Status: {{ task.status }} </v-card-text>

    <v-card-text> Created at: {{ createdAt }} </v-card-text>

    <v-card-text> Due date: {{dueDate}} </v-card-text>

    <v-card-actions >
      <v-btn :color="task.status === 'active' ? 'success' : 'cyan-darken-3'"  variant="elevated" @click="toggleStatus" >       
        <v-icon>{{ task.status === 'active' ? 'mdi-check-outline' : 'mdi-arrow-u-right-bottom-bold' }}</v-icon>
      </v-btn>
      <v-btn color="warning" variant="elevated" @click="toggleTaskModal">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click ="onDelete">
        <v-icon icon="mdi-delete-forever-outline" />
      </v-btn>
    </v-card-actions>
    
  </v-card>
  <h4 v-else></h4>
</template>

 <script src="./singleTask.js"></script> 