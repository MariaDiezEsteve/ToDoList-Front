
<template>
    <div>
        <h1>TO DO LIST</h1>

        <img src="@/assets/logo.png" alt="" v-if="dataInfo.isError">
        <img src="@/assets/1488.gif" alt="" v-if="dataInfo.isLoading">

        <div v-if="!dataInfo.isError && !dataInfo.isLoading">

            <Form />
            <List :dataInfo="dataInfo"
                @idEditTask = "handleEditId" 
                @mailEditTask = "handleEditEmail"  
                @idDeleteTask = "handleDeleteId"
                @mailDeleteTask = "handleDeleteEmail"         
            />

        </div>

       

    </div>
</template>

<script setup>
import Form from '../components/Form_Todo.vue'
import List from '../components/List_Todo.vue'
import info from '@/dataInfo/dataInfo'
import { ref, onMounted } from 'vue';

// let isLoading = ref(true)

let dataInfo = ref(onMounted(async () => {
    dataInfo.value = await info.getData()

}))

console.log(dataInfo);

const idTaskEdit = ref("")
const mailTaskEdit = ref("")
const idTaskDelete = ref("")
const mailTaskDelete = ref("")

function handleEditId(id) {
    idTaskEdit.value = id
}

function handleEditEmail(mail) {
    mailTaskEdit.value = mail
}

function handleDeleteId(id){
    idTaskDelete.value = id
}

function handleDeleteEmail(mail){
    mailTaskDelete.value = mail 
}

</script>

<style scoped>

</style>