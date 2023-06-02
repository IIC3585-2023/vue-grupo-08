<script lang="ts">
import { store } from '../stores/store.js';
export default {
    props: {
        stat_number: Number,
        pokemon: Object
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div v-if="pokemon!.stats && stat_number != undefined" id="card_1" class="card">
        <div>
            {{ pokemon!.name.replaceAll("-", " ").toUpperCase() }}
        </div>
            
        <img v-bind:src="pokemon!.sprites.front_default" alt="pokemon1 sprite" />
          
        <div v-if="!store.gameIsOnGoing">
            {{ pokemon!.stats[stat_number].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[stat_number].base_stat }}
        </div>
    </div>
</template>