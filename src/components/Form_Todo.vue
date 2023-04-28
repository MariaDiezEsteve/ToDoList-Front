<template>

    <img src="@/assets/logo.png" alt="" v-if="isError">
    <img src="@/assets/1488.gif" alt="" v-if="isLoading">

        <div v-if="!isError && !isLoading">

            <div class="div-form">
                <form @submit.prevent>

                    <h4>What do you have to do?</h4>

                    <input type="text" name="title" placeholder="e.g. go shopping" v-model="formData.title">
                    <input type="text" name="description" placeholder="e.g. friday after work" v-model="formData.description">
                    <input type="text" name="who" placeholder="e.g. María" v-model="formData.who">
                    <input type="email" name="mail" v-model="formData.mail">
                    

                </form>

            <div class="add-button">
                <button @click="createData">Add</button>
            </div>

            </div>

        </div>

       


</template>




<script setup>
import axios from 'axios'
import {reactive} from 'vue'

const formData = reactive({
    "title": "",
    "description": "",
    "who": "",
    "mail": ""
})


 function createData() {
    let isError = false;
    let isLoading = true;

    try {
        axios.post("https://todo-back-6klq.onrender.com/errands", {

            title: formData.title,
            description: formData.description,
            who: formData.who,
            mail: formData.mail
        })
        location.reload()
        
    }catch (error){
        
        isError = true;
    }
    isLoading = false;

    return {isError, isLoading}
}

</script>

<style scoped>

.div-form {
    text-align: center;
}

h4 {
    font-size: 1.7rem;
}

input {
    border: 5px double black;
    border-radius: 8px;
    background: #f8f8d9;
    margin: 2rem;
    width: 10rem;
    height: 2rem;
    text-align: center;
    font-size: 1rem;
}

.add-button {
    text-align: center;
}

button {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 8px;
    background-color: black;
    color: white;
    cursor:pointer;
    font-weight: bolder;
}

button:hover {

    background-color: beige;
    color: black;
}
</style>
