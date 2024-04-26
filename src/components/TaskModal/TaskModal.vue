

 <template>
<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="isOpen"
      max-width="600"   
    > <v-card
    
        prepend-icon="mdi-account"
        title="Add new task"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"              
              sm="12"
            > <v-text-field
                label="Title*"                
                required v-model="title"
              ></v-text-field>            
            </v-col> 

          <v-col cols="12" sm="12">
            <v-textarea label="Description" v-model="description"></v-textarea>
            </v-col>

             <v-col cols="12" sm="12">
              Due date
                <datepicker v-model="dueDate" />
            </v-col> 
            
          </v-row>

          <v-chip color="red" class="text-caption text-medium " >
            *indicates required field
    </v-chip>          
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn class="closeColor"          
            text="Close"
            variant="tonal"
            @click="onClose"
          ></v-btn>

          <v-btn
            class="saveColor"  
            text="Save"
            variant="tonal"
            @click = "onSave"
          ></v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
</template>

<script src="./taskModal"></script>

<style>
.closeColor{
  background-color:#1DE9B6;
  color: rgb(35, 37, 37);
}
.saveColor{
  background-color: #76FF03;
  color: rgb(35, 37, 37);
  
}
.text-medium{
  margin-top: 10px;
}
</style>