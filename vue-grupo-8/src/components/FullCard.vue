<script lang="ts">
import { store } from '../stores/store.js';
export default {
    props: {
        pokemon: Object,
        sprite: String,
    },
    data(){
        return{
            store
        }
    }
}
/*{{ pokemon!.stats[1].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[1].base_stat }}
            {{ pokemon!.stats[2].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[2].base_stat }}
            {{ pokemon!.stats[3].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[3].base_stat }}
            {{ pokemon!.stats[4].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[4].base_stat }}
            {{ pokemon!.stats[5].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[5].base_stat }}
 */
</script>

<template>
    <div v-if="pokemon!.stats" id="card_1" class="fullcard">
        <div style="display: flex ;">
            <div v-if="sprite == pokemon!.sprites.front_shiny"> ✴ </div>
            {{ pokemon!.name.replaceAll("-", " ").toUpperCase() }}
            <div v-if="sprite == pokemon!.sprites.front_shiny"> ✴ </div>
        </div>
            
        <img v-bind:src="sprite" alt="pokemon1 sprite" />
          
        <div v-if="pokemon" style="display: flex; flex-direction: column;">
            <!--<span v-for=""></span>-->
            <li v-for="num in [0,1,2,3,4,5]" style="list-style: none;">
                {{ pokemon!.stats[num].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[num].base_stat }}
            </li>
        </div>
    </div>
</template>