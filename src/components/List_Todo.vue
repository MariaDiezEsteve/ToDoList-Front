<template>
    
    <div v-for="data in dataInfo.data" :key="data.id"  >
        <h4>{{ data.title }}</h4>
        <p>{{ data.description }}</p>
        <h5>{{ data.who }}</h5>

    </div>

    
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
    dataInfo: Object
})

</script>

<style lang="scss" scoped>

</style>