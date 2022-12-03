import '../css/style.css'
/* Selecionar os Elementos no DOM */

const iputPesquisa = 
document.querySelector("#inputPesquisa")
const inputPesquisa = 
document.querySelector("#btnLocalizar")
const pokedexDisplay = 
ocment.querySelector("display")

/*Adicionando Eventos */

btnLocalizar.AddEventListener(click, function(){
    /* buscar dados do pokemon na api */
    const dadosDoPokemon = await LocalizarPokemon(inputPesquisa.value)
    /* criar cartao do pokemon */
    criarCartao()
})

async function btnLocalizarPokemon(termoBusca){
    const url = 
    https://pokeapi.co/api/v2/pokemon/${termoBusca}
    const response = await fetch(url) 
    const pokemon = await response.json() 
    console.log(pokemon)
    return pokemon 

}

function criarCatao(pokemon){
    const cartaoPokemon  = document.createElement('div')
    cartaoPokemon.className='cartaoPokemon'
    cartaoPokemon.innerHTML=`
    <img  class="pokemon.Sprites" src="$Pokemon.sprites.front_default}"/>
    <h2>${pokemon.classname}<h2


}
