<script lang="ts">
import { useRoute } from 'vue-router';
import CardItem from '../components/CardItem.vue';
import { store } from '../stores/store.js';
import router from '@/router';


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
        stat_number: 0,
        winner: 9999,
        gameIsOnGoing: true,
        gameIsWon: false,
        sprite1: null,
        sprite2: null,
      }
    },
    methods: {
      async getData() {
        const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${num1}`);
        const finalRes1 = await res1.json();
        this.pokemon1 = finalRes1;

        console.log(this.pokemon1.stats[this.stat_number].stat.name);
        document.getElementById("gameQuestion")!.innerHTML+=this.pokemon1.stats[this.stat_number].stat.name.replaceAll("-", " ").toUpperCase()+"?";
        let shiny1 = Math.floor(Math.random() * (4096 - 1 + 1) + 1);

        if (shiny1 == 1) {
          this.sprite1 = this.pokemon1.sprites.front_shiny;
        } else {
          this.sprite1 = this.pokemon1.sprites.front_default;
        }


        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${num2}`);
        const finalRes2 = await res2.json();
        this.pokemon2 = finalRes2;

        if (this.pokemon1.stats[this.stat_number].base_stat > this.pokemon2.stats[this.stat_number].base_stat){
          this.winner = 1
        } 
        else if(this.pokemon1.stats[this.stat_number].base_stat < this.pokemon2.stats[this.stat_number].base_stat){
          this.winner = 2
        } 
        else if(this.pokemon1.stats[this.stat_number].base_stat === this.pokemon2.stats[this.stat_number].base_stat){
          this.winner = 0
        } 
        console.log("Winner is "+this.winner)
        
        let shiny2 = Math.floor(Math.random() * (4096 - 1 + 1) + 1);

        if (shiny2 == 1) {
          this.sprite2 = this.pokemon2.sprites.front_shiny;
        } else {
          this.sprite2 = this.pokemon2.sprites.front_default;
        }
      },
      setUp() {
        const route = useRoute()
        if (route.query.stat) {
            this.stat_number = Number(route.query.stat);
        }
      },
      choosePokemon(pokemonId:number) {
        document.getElementById("gameQuestion")!.innerHTML="";
        if(pokemonId===this.winner){
          console.log("ganaste")
          this.gameIsWon=true;
          //document.getElementById("gameResult")!.src="../assets/YouLost.png";  //"../assets/youWon.png" 
        }
        if(pokemonId!=this.winner){
          console.log("perdiste")
          //document.getElementById("gameResult")!.src="../assets/YouLost.png";
        }
        store.gameIsOnGoing=false;
        this.gameIsOnGoing=false;
        //mostrar mono de ganaste o perdiste
      },
      start() {router.push({path: '../'})}      
    },
    mounted() {
      
        this.setUp()
        this.getData()
        console.log(store.gameIsOnGoing)
        console.log(store.gameIsOnGoing)

    }
  }

</script>

<template>
    <main class="game">
      <div class="gameHeader"> 
        <h1 id="gameQuestion">Which Pokemon Has a Higher </h1> 
        <div v-if="!gameIsOnGoing">
          <img id="gameResult1" v-if="!gameIsWon" src="../assets/YouLost.png">
          <img id="gameResult2" v-if="gameIsWon" src="../assets/youWon.png">
        </div>
      </div>
      <div class="game">
        <div class="leftPokemon" v-if="pokemon1" v-on:click="choosePokemon(1)">
          <CardItem :stat_number=stat_number :pokemon=pokemon1 :sprite=sprite1! />
        </div>
        <div class="separator"></div>
        <div class="rightPokemon" v-on:click="choosePokemon(2)">
        <div>
          <CardItem :stat_number=stat_number :pokemon=pokemon2 :sprite=sprite2! />
        </div>
      </div>
      <div class="gameFooter">
        <button class="homeButton" v-if="gameIsOnGoing" v-on:click="choosePokemon(0)"> TIE </button>
        <button class="homeButton" v-if="!gameIsOnGoing" v-on:click="start()"> GO BACK </button>
      </div>
    </main>
</template>
