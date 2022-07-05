import { useEffect, useRef, useState } from "react";
import "./index.js";

export default function App() {
const [pokemons, setPokemons] = useState([])

  useEffect(() =>{
    listPokemons()
  },[])
   
  async function listPokemons(){
    const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    const data = await result.json();
    console.log(data)
    setPokemons(data.result)
  }


  return (
    <div className="App">
      <h1>Pokemón</h1>
          <ul>
            {
              (pokemons || []).map((pokemon)=><li key={pokemon.name}>{pokemon.name}</li>)
            }
          </ul>
    </div>
  );
}