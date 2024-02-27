<template>
    <div class="pokemon-container">
        <img :src="imgSrc"
        v-if="!pokemonShow" 
        class="hidden-pokemon"
        alt="pokemon hidden">

        <img :src="imgSrc" 
        v-if="pokemonShow"
        class="fade-in"
        alt="pokemon colorfull">

        
    </div>
  
</template>

<script>



export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        pokemonShow: {
            type: Boolean,
            default: false
        }
    
    },
    computed:{
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>

.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
    position: relative;
}
img {
    height: 200px;
    position:absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

    
</style>