<template>
<Vehiculo></Vehiculo>
</template>

<script>
import Vehiculo from './modules/vehiculos/pages/Vehiculo.vue';
export default {
  name: 'App',
  components: {
    Vehiculo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
