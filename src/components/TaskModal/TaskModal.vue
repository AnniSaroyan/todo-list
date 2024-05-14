

 <template>
<template>
  <div class="pa-4 text-center">
    <v-dialog
    :modelValue="isOpen" @update:modelValue="onClose"
      max-width="600"   
    > <v-card
    
        prepend-icon="mdi-account"
        :title="modalTitle"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"              
              sm="12" >
               <v-text-field ref = "title" :class= "{invalid: !isTitleValid}"
                label="Title *"                
                required v-model="title"
                @keyup.enter="moveToDescriptionField"
              ></v-text-field>            
            </v-col> 

          <v-col cols="12" sm="12">
            <v-textarea ref = "description" label="Description" v-model="description" ></v-textarea>
            </v-col>

             <v-col cols="12" sm="12" >
              Due date
                <datepicker v-model="dueDate" />
            </v-col> 
            
          </v-row>

          <v-chip color="red" class="text-caption text-medium " >
            * indicates required field
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
          :disabled ="!isTitleValid"
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
  background-color:rgb(0 204 204);
  color: rgb(35, 37, 37);
}
.saveColor{
  background-color: rgb(0 255 64);
  color: rgb(35, 37, 37);
  
}
.text-medium{
  margin-top: 10px;
}
.invalid .v-input__control{
  border: 1px solid red;
}
</style>