<script lang="ts">
import router from '@/router';
import { store } from '../stores/store.js';

  export default {
    data() {
      return {
        store
      }
    },
    methods: {
      start() {router.push({path: 'wheel'})},
      about() {router.push({path: 'about'})},
      create() {router.push({path: 'team'})},
      getScore(){
        document.getElementById("score")!.innerHTML= "User Guess Ratio: "+ Math.round(store.gamesWon/store.gamesPlayed* 100) / 100;
        document.getElementById("wins")!.innerHTML= "User Correct Guesses: "+ store.gamesWon;
      }
    },
    mounted() {
      this.getScore()
   }
  }
</script>

<template>
  <main class="home">
    <div class="homeHeader">
      <h1 class="homeTitle"> POKEMON TRUMP CARD </h1>
    </div>
    <div class="score" style="height: 10%;">
      <h1 class="homeTitle" id="score"> User Score: </h1>
      <h1 class="homeTitle" id="wins"> User Correct Guesses: </h1>

    </div>
    <div class="home">
      <button class="homeButton" v-on:click="start()"> START </button>
      <button class="homeButton" v-on:click="about()"> ABOUT </button>
      <button class="homeButton" v-on:click="create()"> YOUR TEAM </button>
    </div>  
    <div class="homeFooter">
      <h1>by Grupo 8</h1>
    </div>
  </main>
</template>
