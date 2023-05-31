<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <RouterView />
</template>

<style scoped>
main.game {
  background-image: url('./assets/battleBG.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 98vh;
  width: 100%;
}

main.wheel {
  background-image: url('./assets/wheelBG.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 98vh;
  width: 100%;
}

main.home {
  background-repeat: no-repeat;
  background-size: cover;
  height: 98vh;
  width: 100%;
}

main.about {
  background-repeat: no-repeat;
  background-size: cover;
  height: 98vh;
  width: 100%;
}
</style>
