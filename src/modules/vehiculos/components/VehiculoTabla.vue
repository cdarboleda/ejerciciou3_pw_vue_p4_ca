<template>
    <ul>
        <li v-bind="id">Id</li>
        <li v-bind="placa">Placa</li>
        <li v-bind="modelo"></li>
        <li v-bind="color"></li>
        <li v-bind="modo"></li>
        //<li v-on:click="obtenerVehiculo()">Visualizar</li>
    </ul>

</template>

<script>
import {getVehiculosFachada} from '../helpers/ClienteVehiculo.js';
import {getVehiculoFachada} from '../helpers/ClienteVehiculo.js';

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

    methods : {
        obtenerVehiculo(){
            //this.getVehiculo()
        }
    },

    mounted(){

            const data = getVehiculoFachada()
            this.id = data.id
            this.placa= data.placa
            this.modelo= data.modelo
            this.color= data.color
            this.modo= data.modo
    }

}
</script>

<style></style>