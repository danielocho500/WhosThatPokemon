<template>
  <PokemonPage/>
</template>

<script>
import PokemonPage from './pages/PokemonPage.vue';
import PokemonOptions from './components/PokemonOptions.vue';
import PokemonPicture from './components/PokemonPicture.vue';

export default {
  name: 'App',
  components: {
    PokemonPage,
    PokemonOptions,
    PokemonPicture
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
