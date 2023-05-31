<script lang="ts">
import router from '@/router';

  export default {
    methods: {
      start() {router.push({path: 'wheel'})},
      about() {router.push({path: 'about'})}
    }
  }
</script>

<template>
  <main class="home">
    <div class="homeHeader">
      <h1> HEADER </h1>
    </div>
    <div class="home">
      <button class="homeButton" v-on:click="start()"> START </button>
      <button class="homeButton" v-on:click="about()"> ABOUT </button>
    </div>  
    <div class="homeFooter">
      <h1>FOOTER</h1>
    </div>
  </main>
</template>
