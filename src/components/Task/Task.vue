 
<template>
  <v-card  class="mx-auto my-4" elevation="16" max-width="344">
  
    <v-card-item>
      <v-checkbox @update:modelValue="onSelect" :modelValue="isSelected"></v-checkbox>
      <v-card-title> {{ data.title }} </v-card-title>
    </v-card-item>

    <v-card-text class="description" >
      {{ data.description }}
    </v-card-text>

    <v-card-text> Status: {{ data.status }} </v-card-text>

    <v-card-text> Created at: {{ createdAt }} </v-card-text>

    <v-card-text> Due date: {{dueDate}} </v-card-text>

    <v-card-text>
      <RouterLink :to="`/task/${data._id}`">Show more...</RouterLink>
    </v-card-text>

    <v-card-actions >
      <v-btn :color="data.status === 'active' ? 'success' : 'cyan-darken-3'"  variant="elevated" @click="toggleStatus" >       
        <v-icon>{{ data.status === 'active' ? 'mdi-check-outline' : 'mdi-arrow-u-right-bottom-bold' }}</v-icon>
      </v-btn>
      <v-btn color="warning" variant="elevated" @click="onEdit">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click ="onDelete">
        <v-icon icon="mdi-delete-forever-outline" />
      </v-btn>
    </v-card-actions>    
  </v-card>
</template>

 <script src="./task.js"></script> 

 <style scoped>
.description {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>