import "./Pokemons.scss"

import PokemonsList from "../../components/PokemonComponents/PokemonsList/PokemonsList"

const Pokemons = () => {
  return (
    <section className="pokemons">
      <h1>The secret world of Pokemons</h1>
      <PokemonsList />
    </section>
  )
}

export default Pokemons
