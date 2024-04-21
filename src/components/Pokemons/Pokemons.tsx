import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { z } from "zod"

const ResultSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const PokemonsSchema = z.object({
  count: z.number(),
  previous: z.string(),
  next: z.string(),
  results: z.array(ResultSchema),
})

type Pokemons = z.infer<typeof PokemonsSchema>

const Pokemons = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

  const { data, loading, error } = useFetch<Pokemons>(url)

  console.log(data)
  return (
    <section className="pokemons">
      <h2>Pokemons</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}

      {data?.results && (
        <div>
          <p>{data.results[1].name}</p>
          <p>{data.results[1].url}</p>
          <p onClick={() => setUrl(data.next)}>{data.next}</p>
          <p onClick={() => setUrl(data.previous)}>{data.previous}</p>
        </div>
      )}
    </section>
  )
}

export default Pokemons
