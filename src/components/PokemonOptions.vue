<template>
    <div class="options-container">
        <ul>
            <li v-for="pkm in pokemons" 
            :key="pkm.id"
            @click="$emit('selection',pkm.id)"
            :class="getClass(pkm.id)"> 
                {{ capitalize(pkm.name) }} 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        },
        correctId:  {
            type: Number,
            required: true
        }
    },
    methods:{
        capitalize(name){
            return name.charAt(0).toUpperCase() + name.slice(1);
        },
        getClass(pkmId){
            if(this.correctId == 0)
                return ''
            return pkmId === this.correctId ? 'correct' : 'incorrect'
        }
    }
}
</script>

<style scoped>

/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    padding: 8px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}

.correct{
    background-color: #4caf50;
    color: white;
    border: 2px solid #388e3c;
}

.correct:hover{
    background-color: #388e3c;
}
.incorrect{
    background-color: #f44336;
    color: white;
}

.incorrect:hover{
    background-color: #d32f2f;
}

</style>