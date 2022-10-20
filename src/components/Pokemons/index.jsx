import React from 'react';
import { useState, useEffect } from "react";


const Pokemons = ({key, id}) => {

    const [pokemon, setPokemon] = useState([]);
    const [img, setImg] = useState('')
    
    const pokemonAPI = async () => {
      const pokeApi = `https://pokeapi.co/api/v2/pokemon/${id}`
      
      try {
        const response = await fetch(pokeApi);
        const data = await response.json();
        console.log(data);
        const pokemonAbilities = data.abilities.map(ability => ability.ability.name)
        
        const abilities = pokemonAbilities.toString()
        
        const pokemonData = [data.id, data.name, abilities]
        setPokemon(pokemonData);
  
      } catch(error) {
        console.log(error);
      }
 }

    const pokemonImg = async () => {
        const pokeApi = `https://pokeapi.co/api/v2/pokemon/${id}`

        try{
            const response = await fetch(pokeApi);
            const data = await response.json();
            console.log(data);
            console.log(data.sprites)
            const pokeImg = data.sprites.front_default 
            console.log(pokeImg)
            setImg(pokeImg)
        } catch(err){
            console.log(err)
        }
        
    }
  
    // Call this fetch function in a useEffect
    useEffect(() => {
      pokemonAPI();
    }, []);

    useEffect(() => {
        pokemonImg();
      }, []);
  
    console.log(pokemon)
    return (
      <div className='pokemon'>
        <li>{pokemon[1]}</li>
        <br></br>
        {/* <li>{pokemon[2]}</li> */}
        <img src={img}/>


        
      </div>
    )
  }
  
  export default Pokemons;
