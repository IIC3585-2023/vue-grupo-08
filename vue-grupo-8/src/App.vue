<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <RouterView />
</template>

<style scoped>

main {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
main.game {
  background-image: url('./assets/battleBG.png');
}

main.wheel {
  background-image: url('./assets/wheelBG.jpg');
}

main.home {
  background-repeat: no-repeat;
}

main.about {
  background-image: url('./assets/aboutBG.jpg');
  background-position: center;
}
</style>
