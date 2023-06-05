import { reactive } from 'vue'

export const store = reactive({
  gameIsOnGoing: true,
  gamesPlayed: 1,
  gamesWon: 1,
  name: "NoName",
  pokemonId: 0,
  WonAGame(){
    this.gamesWon++
  },
  PlayedAGame(){
    this.gamesPlayed++
  },
  setName(input){
    this.name=input
  },
  setPokemonId(input){
    this.pokemonId=input
  },
})