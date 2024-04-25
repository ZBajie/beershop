import "./PokemonsList.scss"

import { z } from "zod"
import { useFetch } from "../../../hooks/useFetch"
import { useState } from "react"
import { AppDispatch } from "../../../state/store"
import { useDispatch } from "react-redux"
import { updatePokemonUrl } from "../../../state/pokemonSlice/pokemonSlice"

// Pokemons list schema and type
const ResultSchema = z.object({
  name: z.string(),
  url: z.string(),
})
const PokemonsSchema = z.object({
  count: z.number(),
  previous: z.string().nullable(),
  next: z.string().nullable(),
  results: z.array(ResultSchema),
})

type PokemonsType = z.infer<typeof PokemonsSchema>

const PokemonsList = () => {
  // Pokemons list
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const { data, loading, error } = useFetch<PokemonsType>(url)
  const validatedData = PokemonsSchema.safeParse(data)

  // Pokemon card
  const [pokemonUrl, setPokemonUrl] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  return (
    <section className="pokemon-list">
      <h2>Pokemons</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {!validatedData.success && (
        <p>Validation Error: {validatedData.error.toString()}</p>
      )}

      {validatedData.success && (
        <ul>
          {validatedData.data.results.map((pokemon) => (
            <li
              key={pokemon.name}
              onClick={() => {
                setPokemonUrl(pokemon.url)
                dispatch(
                  updatePokemonUrl({
                    pokemonDataUrl: pokemon.url,
                  })
                )
              }}
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
      <div className="buttons-div">
        <button
          onClick={() => {
            if (validatedData.success) {
              setUrl(
                validatedData.data.previous ||
                  "https://pokeapi.co/api/v2/pokemon/"
              )
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (validatedData.success) {
              setUrl(validatedData.data.next || url)
            }
          }}
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default PokemonsList
