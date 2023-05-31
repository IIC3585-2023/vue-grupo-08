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
      <h1> COMO JUGAR? </h1>
    </div>
    <div class="about">
      <h1> BODY </h1>
    </div>  
    <div class="aboutFooter">
      <button v-on:click="back()"> Volver </button>
    </div>
  </main>
</template>


