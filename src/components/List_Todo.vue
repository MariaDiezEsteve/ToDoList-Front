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
import {defineProps, defineEmits} from 'vue'

defineProps({
    dataInfo: Object
})

// const idTask = ref("")
// const mailTask = ref("")
const emit = defineEmits([
    "idEditTask",
    "mailEditTask",
    "idDeleteTask",
    "mailDeleteTask"
])

function editTask(id, mail) {
    // idTask.value = id
    // mailTask.value = mail

    emit("idEditTask", id)
    emit("mailEditTask", mail)

}

function deleteTask(id, mail) {
    // idTask.value = id
    // mailTask.value = mail

    emit("idDeleteTask", id)
    emit("mailDeleteTask", mail)
  
}

</script>

<style scoped>

</style>