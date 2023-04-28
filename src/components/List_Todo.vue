<template>
    
    <div class="data-div" v-for="data in dataInfo.data" :key="data.id"  >
        <h4 class="data-input">{{ data.title }}</h4>
        <p class="data-input">{{ data.description }}</p>
        <h5 class="data-input">{{ data.who }}</h5>

    <div class="buttons-div">
        <button class="buttons" @click="editTask(data.id, data.mail, data.who)">Edit</button>
        <button class="buttons" @click="deleteTask(data.id, data.mail)">Delete</button>

    </div>

    </div>
    <div v-show="hiddenEdit">

        <form @submit.prevent>
            <h4>Edit your to do</h4>

                <input class="edit-input" type="text" name="title" placeholder="e.g. go shopping" v-model="editFormTitle">
                <input class="edit-input" type="text" name="description" placeholder="e.g. friday after work" v-model="editFormDescription">
        </form>
       
            <button class="button-enter" @click="editTaskForm">Enter</button>
        

    </div>

    
    
</template>

<script setup>
import axios from 'axios';
import {defineProps, ref} from 'vue'

const idTask = ref("")
const mailTask = ref("")
const whoTask = ref("")
const hiddenEdit = ref(false)
const editFormTitle = ref("")
const editFormDescription = ref("")


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
<<<<<<< HEAD
            axios.delete(`https://todo-back-6klq.onrender.com/errands/${id}`)
=======
            axios.delete(`https://todolist-json.onrender.com/errands/${id}`)
>>>>>>> bc42ffbc4256c6d11b1ee374b7c9e6ea35dddfa5
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

function editTask(id, mail, who) {
   idTask.value = id
   mailTask.value = mail
   whoTask.value = who
   hiddenEdit.value = true   
    /*  PARA ENVIAR EMITS */
    // emit("idEditTask", id)
    // emit("mailEditTask", mail)
}



function editTaskForm(){
    try {
<<<<<<< HEAD
        axios.put(`https://todo-back-6klq.onrender.com/errands/${idTask.value}`,{
=======
        axios.put(`https://todolist-json.onrender.com/errands/${idTask.value}`,{
>>>>>>> bc42ffbc4256c6d11b1ee374b7c9e6ea35dddfa5
            title: editFormTitle.value,
            description: editFormDescription.value,
            who: whoTask.value 
        })
        location.reload()
    }catch(error){
        isError = true 
    }return {
        isError
    }
}

</script>

<style scoped>
.data-div {
    text-align: center;
}

.buttons-div {
    text-align: center;
}

.buttons, .button-enter {
    padding: 0.5rem;
    font-size: 0.8rem;
    border-radius: 8px;
    background-color: black;
    color: white;
    cursor:pointer;
    font-weight: bolder;
}



.buttons:hover {
background-color: beige;
color: black;
}

.button-enter:hover {
    background-color: beige;
    color: black;
}
.edit-input, .data-input {
    border: 1px solid black;
    border-radius: 8px;
    width: 25%;
    text-align: center;
    margin: 2rem auto;
}


</style>