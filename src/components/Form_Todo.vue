<template>

    <img src="@/assets/logo.png" alt="" v-if="isError">
    <img src="@/assets/1488.gif" alt="" v-if="isLoading">

        <div v-if="!isError && !isLoading">

            <div>
                <form @submit.prevent>

                    <h4>What do you have to do?</h4>

                    <input type="text" name="title" placeholder="e.g. go shopping" v-model="formData.title">
                    <textarea name="description" placeholder="e.g. friday after work" v-model="formData.description"></textarea>
                    <input type="text" name="who" placeholder="e.g. María" v-model="formData.who">
                    
                    <button @click="createData">Add</button>

                </form>
            </div>

        </div>

       


</template>




<script setup>
import axios from 'axios'
import {reactive} from 'vue'

const formData = reactive({
    "title": "",
    "description": "",
    "who": ""
})


 function createData() {
    let isError = false;
    let isLoading = true;

    try {
        axios.post("http://localhost:3000/errands", {

            title: formData.title,
            description: formData.description,
            who: formData.who
        })
        location.reload()
        
    }catch (error){
        
        isError = true;
    }
    isLoading = false;

    return {isError, isLoading}
}

</script>

<style lang="scss" scoped>

</style>
