<template>
    <h1> ¿Who's that Pokémon?      </h1>
    <div v-if="!pokemon"></div>
    <div v-else>
      <PokemonPicture 
        :pokemonId="pokemon.id" 
        :pokemonShow="showPokemon"
      />

      <PokemonOptions 
        :pokemons="pokemonArr"
        :correctId="correctId"
        @selection="checkanswer"
      />

      <h2> {{  }} </h2>
      <p> Question {{correct + incorrect + 1}}/10</p>
    </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import getPokemons from '../helpers/getPokemonOptions.js';


export default {
  components: { PokemonOptions, PokemonPicture },
  data(){
    return{
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      correct: 0,
      incorrect: 0,
      correctId:0
    }
  },
  methods: {
    async mixPokemons(){
      this.pokemonArr = await getPokemons();
      
      this.pokemon = this.pokemonArr[Math.floor(Math.random() * this.pokemonArr.length)]
    },

    checkanswer(idPkm){
      this.showPokemon = true;
      if(idPkm === this.pokemon.id){
        this.correct++
      }else{
        this.incorrect++
      }
      this.correctId = this.pokemon.id

      setTimeout(() => {
        this.pokemonArr = [];
        this.pokemon = null;
        this.showPokemon = false;
        this.correctId = 0;
        if(this.correct + this.incorrect === 10){
          alert(`Correct: ${this.correct} \n Incorrect: ${this.incorrect}`)
          this.correct = 0;
          this.incorrect = 0;
        }
        this.mixPokemons();
      }, 1500);
    },

  },
  mounted(){
    this.mixPokemons();
  }
}
</script>

<style>
    
</style>