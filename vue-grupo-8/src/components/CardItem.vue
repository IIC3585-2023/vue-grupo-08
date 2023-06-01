<script lang="ts">
export default {
    props: {
        stat_number: Number,
        pokemon: Object,
        sprite: String,
    }
}
</script>

<template>
    <div v-if="pokemon!.stats && stat_number != undefined" id="card_1" class="card">
        <div>
            {{ pokemon!.name.replaceAll("-", " ").toUpperCase() }}
        </div>
            
        <img v-bind:src="sprite" alt="pokemon1 sprite" />
          
        <div>
            {{ pokemon!.stats[stat_number].stat.name.replaceAll("-", " ").toUpperCase() }}: {{pokemon!.stats[stat_number].base_stat }}
        </div>
    </div>
</template>