<script lang="ts">
import { store } from '../stores/store.js';
export default {
    props: {
        stat_number: Number,
        pokemon: Object,
        sprite: String,
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
        <div style="display: flex ;">
            <div v-if="sprite == pokemon!.sprites.front_shiny"> ✴ </div>
            {{ pokemon!.name.replaceAll("-", " ").toUpperCase() }}
            <div v-if="sprite == pokemon!.sprites.front_shiny"> ✴ </div>
        </div>
            
        <img v-bind:src="sprite" alt="pokemon1 sprite" />
          
        <div v-if="!store.gameIsOnGoing">
            {{ pokemon!.stats[stat_number].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[stat_number].base_stat }}
        </div>
    </div>
</template>