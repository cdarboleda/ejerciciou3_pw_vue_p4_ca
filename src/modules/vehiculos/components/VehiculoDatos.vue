<template>
    <div class="container">
        <div class="form">
            <label for="">Id</label>
            <input v-model="id" type="text">
            <label for="">placa</label>
            <input v-model="placa" type="text">
            <label for="">modelo</label>
            <input v-model="modelo" type="text">
            <label for="">color</label>
            <input v-model="color" type="text">
            <label for="">modo</label>
            <input v-model="modo" type="text">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id : null,
            placa: null,
            modelo: null,
            color: null,
            modo: null,
        }
    },

}
</script>

<style></style>