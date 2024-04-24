import "./Pokemons.scss"

import PokemonsList from "../../components/PokemonComponents/PokemonsList/PokemonsList"
import PokemonCard from "../../components/PokemonComponents/PokemonCard/PokemonCard"

const Pokemons = () => {
  return (
    <section className="pokemons">
      <h1>The secret world of Pokemons</h1>
      <PokemonCard />
      <PokemonsList />
    </section>
  )
}

export default Pokemons
