import "./PokemonCard.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../../state/store"
import { PokemonSchema } from "./PokemonSchema.ts"
import { z } from "zod"
import { useFetch } from "../../../hooks/useFetch.ts"

type PokemonCardType = z.infer<typeof PokemonSchema>
const PokemonCard = () => {
  const url = useSelector((state: RootState) => state.pokemons.pokemonDataUrl)
  const { data, loading, error } = useFetch<PokemonCardType>(url)

  const validatedData = PokemonSchema.safeParse(data)

  return (
    <section className="pokemon-card">
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}

      {!validatedData.success && (
        <p>Validation Error: {/*validatedData.error.toString()*/}</p>
      )}

      <h2>{validatedData.success && validatedData.data.name}</h2>
      <div>
        <img
          src={
            validatedData.success &&
            typeof validatedData.data.sprites.front_default === "string"
              ? validatedData.data.sprites.front_default
              : ""
          }
          alt=""
        />
        <img
          src={
            validatedData.success &&
            typeof validatedData.data.sprites.back_default === "string"
              ? validatedData.data.sprites.back_default
              : ""
          }
          alt=""
        />
        <img
          src={
            validatedData.success &&
            typeof validatedData.data.sprites.other.dream_world
              .front_default === "string"
              ? validatedData.data.sprites.other.dream_world.front_default
              : ""
          }
          alt=""
        />
        <img
          src={
            validatedData.success &&
            typeof validatedData.data.sprites.versions["generation-v"][
              "black-white"
            ].animated.front_default === "string"
              ? validatedData.data.sprites.versions["generation-v"][
                  "black-white"
                ].animated.front_default
              : ""
          }
          alt=""
        />
      </div>
    </section>
  )
}

export default PokemonCard
