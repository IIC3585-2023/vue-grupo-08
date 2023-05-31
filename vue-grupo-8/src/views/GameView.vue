<script lang="ts">
import { useRoute } from 'vue-router';

    let num1 = Math.floor(Math.random() * (1010 - 1 + 1) + 1);
    let num2 = Math.floor(Math.random() * (1010 - 1 + 1) + 1);

    while (num1 == num2) {
        num2 = Math.floor(Math.random() * (1010 - 1 + 1) + 1);
    }
    export default{
    data() {
      return {
        pokemon1: [],
        pokemon2: [],
        stat_number: 0
      }
    },
    methods: {
      async getData() {
        const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${num1}`);
        const finalRes1 = await res1.json();
        this.pokemon1 = finalRes1;

        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${num2}`);
        const finalRes2 = await res2.json();
        this.pokemon2 = finalRes2;
      },
      setUp() {
        const route = useRoute()
        if (route.query.stat) {
            this.stat_number = Number(route.query.stat);
        }
      }
    },
    mounted() {
        this.setUp()
        this.getData()
    }
  }

</script>

<template>
    <div class="about">
        <h1>This is a Game page</h1>
        <div v-if="pokemon1.stats && stat_number != undefined"> {{ pokemon1.stats[stat_number].stat.name }}</div>
        <div v-if="pokemon1.stats && stat_number != undefined"> {{pokemon1.name}} {{pokemon1.stats[stat_number].base_stat }} </div>
        <div v-if="pokemon2.stats && stat_number != undefined"> {{pokemon2.name}}  {{pokemon1.stats[stat_number].base_stat }} </div>
    </div>
</template>
