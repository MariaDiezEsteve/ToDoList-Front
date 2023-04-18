
<template>
    <div>
        <h1>TO DO LIST</h1>

        <img src="@/assets/logo.png" alt="" v-if="data.isError">
        <img src="@/assets/logo.png" alt="" v-if="data.isLoading">

        <div v-if="!data.isError && !data.isLoading">

            <Form />
            <List :data="data"/>

        </div>

       

    </div>
</template>

<script setup>
import Form from '../components/Form.vue'
import List from '../components/List.vue'
import info from '@/dataInfo/dataInfo'
import { ref, onMounted } from 'vue';

let data = ref(onMounted(async () => {
    data.value = await info.getData()
}))

</script>

<style lang="scss" scoped>

</style>