<template>
    
    <div v-for="data in dataInfo.data" :key="data.id"  >
        <h4>{{ data.title }}</h4>
        <p>{{ data.description }}</p>
        <h5>{{ data.who }}</h5>

    <div>
        <button @click="editTask(data.id, data.mail)">Edit</button>
        <button @click="deleteTask(data.id, data.mail)">Delete</button>

    </div>

    </div>

    
    
</template>

<script setup>
import axios from 'axios';
import {defineProps, ref} from 'vue'

const idTask = ref("")
const mailTask = ref("")

let isError = false

defineProps({
    dataInfo: Object
})



/* ESTO ES PARA DEFINIR LAS VARIABLES COMO EMITS*/ 
// const emit = defineEmits([
//     "idEditTask",
//     "mailEditTask",
//     "idDeleteTask",
//     "mailDeleteTask"
// ])

function editTask(id, mail) {
   idTask.value = id
   mailTask.value = mail

   
    axios.put(`http://localhost:3000/errands/${id}`)
            
       

   
    /*  PARA ENVIAR EMITS */
    // emit("idEditTask", id)
    // emit("mailEditTask", mail)

}



function deleteTask(id, mail) {

    idTask.value = id
    mailTask.value = mail

        try {

            axios.delete(`http://localhost:3000/errands/${id}`)
            location.reload()
            
        }catch(error){

            isError = true

        }return {

            isError
        }




    /*  PARA ENVIAR EMITS */
    // emit("idDeleteTask", id)
    // emit("mailDeleteTask", mail)
  
}

</script>

<style scoped>

</style>