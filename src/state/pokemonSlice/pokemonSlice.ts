import { createSlice } from "@reduxjs/toolkit"

type PokemonType = {
  pokemonDataUrl: string
  pokemonName: string
  pokemonId: number
  pokemonImageUrl: string
}

const initialState: PokemonType[] = [
  {
    pokemonDataUrl: "https://pokeapi.co/api/v2/pokemon/6/",
    pokemonName: "charizard",
    pokemonId: 6,
    pokemonImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
]
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
})

export const { reducer: pokemonReducer } = pokemonSlice

export default pokemonSlice.reducer
