import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Pokemons from "../Pokemons/index.jsx"

const Pokemon = () => {

    const [getPokemon, setGetPokemon] = useState([])
    const [status, setStatus] = useState(0)


    const pokeApi = async () =>{
        const fetchApi = "https://pokeapi.co/api/v2/pokemon?limit=40"
        try{
            const info = await fetch(fetchApi) 
            const pokeData = await info.json()
            //loop through poke data and for each url, make fetch request 
            

            // with results, extract sprite url and store 
            const allPokemon = pokeData.results.map(pokemon => pokemon)
            console.log(pokeData.results)
            setGetPokemon(allPokemon)
        }catch(err) {
            console.log(err)
        }
    } 
    useEffect(() => {
        pokeApi()
    },[])
    

    return(
        <div className='poke-list'>
           { getPokemon.map((p, key) => <li>{<Pokemons key={key} id={p.name} className='pokemon'/>}</li>) }
        </div>
    )
} 


export default Pokemon;
