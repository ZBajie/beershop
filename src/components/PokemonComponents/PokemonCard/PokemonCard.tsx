import "./PokemonCard.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../../state/store"

const PokemonCard = () => {
  const pokemon = useSelector((state: RootState) => state.pokemons[0])
  console.log(pokemon)

  return (
    <section className="pokemon-card">
      <h2>{pokemon.pokemonName}</h2>
      <img src={pokemon.pokemonImageUrl} alt={pokemon.pokemonName} />
    </section>
  )
}

export default PokemonCard
