<template>
    
    <div v-for="data in dataInfo.data" :key="data.id"  >
        <h4>{{ data.title }}</h4>
        <p>{{ data.description }}</p>
        <h5>{{ data.who }}</h5>

    <div>
        <button @click="editTask(data.id, data.mail, data.title, data.description)">Edit</button>
        <button @click="deleteTask(data.id, data.mail)">Delete</button>

    </div>
    <div v-show="hiddenEdit">

        <form @submit.prevent>
            <h4>Edit your to do</h4>

                <input type="text" name="title" placeholder="e.g. go shopping" v-model="editFormTitle">
                <input type="text" name="description" placeholder="e.g. friday after work" v-model="editFormDescription">
        </form>
            <button @click="editTaskForm">Enter</button>

    </div>
    </div>

    
    
</template>

<script setup>
import axios from 'axios';
import {defineProps, ref} from 'vue'

const idTask = ref("")
const mailTask = ref("")
const hiddenEdit = ref(false)
const editFormTitle = ref("")
const editFormDescription = ref("")


const titleTask = ref("")
const descriptionTask = ref("")

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

/* DELETE FORM */
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

/* EDIT FORM */

function editTask(id, mail, title, description) {
   idTask.value = id
   mailTask.value = mail
   hiddenEdit.value = true   
    /*  PARA ENVIAR EMITS */
    // emit("idEditTask", id)
    // emit("mailEditTask", mail)
}



function editTaskForm(){
    try {
        axios.put(`http://localhost:3000/errands/${idTask.value}`,{

        })
    }
    
}

</script>

<style scoped>

</style>