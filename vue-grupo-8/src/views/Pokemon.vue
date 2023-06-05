<script lang="ts">
import { useRoute } from 'vue-router';
import CardItem from '../components/FullCard.vue';
import { store } from '../stores/store.js';
import router from '@/router';

export default{
      components: {
        CardItem
      },
    data() {
      return {
        store,
        pokemonx: [],
        stat_number: 1,
        spritex: null,
        pokemonId: 0
      }
    },methods: {
      back() {router.push({path: '/'})},
      async getPokemon() {
        const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`);
        const finalRes1 = await res1.json();
        this.pokemonx = finalRes1;

        let shiny1 = Math.floor(Math.random() * (4096 - 1 + 1) + 1);

        if (shiny1 == 1) {
            this.spritex = this.pokemonx.sprites.front_shiny;
        } 
        else {
            this.spritex = this.pokemonx.sprites.front_default;
        }
      },
      namePokemon(){
        let input = document.getElementById("name")!.value;
        store.setName(input);
        store.setPokemonId(this.pokemonId);
        document.getElementById("nameOutput")!.innerHTML=store.name;
      },
      randomPokemon(){
        this.pokemonId = Math.floor(Math.random() * (1010 - 1 + 1) + 1);
        this.getPokemon();
      }
    },
    mounted() {
        this.pokemonId = store.pokemonId;
        if(this.pokemonId == 0){
            this.pokemonId = Math.floor(Math.random() * (1010 - 1 + 1) + 1);
        }
        this.getPokemon();
        console.log(store.name);
        if(store.name != "NoName"){
            document.getElementById("nameOutput")!.innerHTML=store.name;
        }
    }
  }
</script>

<template>
  <main class="about">
    <div class="aboutHeader">
      <h1 class="homeTitle"> CHOOSE YOUR POKEMON </h1>
    </div>
    <div class="about">
        <CardItem :pokemon=pokemonx :sprite=spritex! />

      <h1 class="homeTitle" id="nameOutput">
      </h1>
      <h3 class="aboutText">
        Name Your Pokemon To Keep It
      </h3>
      <input type="text" id="name" name="name" required
       minlength="4" maxlength="12" size="10">
    </div>  
    <div class="aboutFooter">
      <button class="homeButton" v-on:click="back()"> Back </button>
      <button class="homeButton" v-on:click="namePokemon()"> Name Pokemon </button>
      <button class="homeButton" v-on:click="randomPokemon()"> Random Pokemon </button>
    </div>
  </main>
</template>