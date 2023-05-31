<script lang="ts">
import { useRoute } from 'vue-router';
import CardItem from '../components/CardItem.vue';

    let num1 = Math.floor(Math.random() * (1010 - 1 + 1) + 1);
    let num2 = Math.floor(Math.random() * (1010 - 1 + 1) + 1);

    while (num1 == num2) {
        num2 = Math.floor(Math.random() * (1010 - 1 + 1) + 1);
    }
    export default{
      components: {
        CardItem
      },
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
    <main class="game">
        <h1>This is a Game page</h1>
        <div style="display: flex;">
          <div v-if="pokemon1">
            <CardItem :stat_number=stat_number :pokemon=pokemon1 />
          </div>
          <div>
            <CardItem :stat_number=stat_number :pokemon=pokemon2 />
          </div>
        </div>
      </main>
</template>
