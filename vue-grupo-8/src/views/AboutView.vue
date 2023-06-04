<script lang="ts">
import router from '@/router';

  export default {
    methods: {
      back() {router.push({path: 'home'})},
    }
  }
</script>

<template>
  <main class="about">
    <div class="aboutHeader">
      <h1 class="homeTitle"> HOW TO PLAY? </h1>
    </div>
    <div class="about">
      <h3 class="aboutText">
      1. Spin the wheel to determine wich stat will be in play
      </h3>
      <h3 class="aboutText">
      2. Two pokemon will be shown
      </h3>
      <h3 class="aboutText">
      3. Choose the pokemon you think has the higher value for the stat
      </h3>
    </div>  
    <div class="aboutFooter">
      <button class="homeButton" v-on:click="back()"> Back </button>
    </div>
  </main>
</template>


