import "./Beers.scss"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../state/store"
import { useEffect, useState } from "react"
import { addToCart } from "../../state/cartSlice/cartSlice"

const Beers = () => {
  const beers = useSelector((state: RootState) => state.beers)
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    console.log(cart)
  }, [cart])

  const [selectedBeer, setSelectedBeer] = useState<number | null>(null)

  return (
    <section className="beers">
      {beers.beers.map((beer) => (
        <article key={beer.id}>
          <h3>{beer.name}</h3>
          <div>
            <div>
              <p>{beer.alcohol} % vol.</p>
              <p>{beer.volume} ml</p>
              <p>{beer.price} $</p>
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: beer.id,
                      name: beer.name,
                      price: beer.price,
                      quantity: 1,
                    })
                  )
                  setSelectedBeer(beer.id)
                  setTimeout(() => {
                    setSelectedBeer(null)
                  }, 2000)
                }}
              >
                Add to cart
              </button>
            </div>
            <img
              className={selectedBeer === beer.id ? "selected-beer" : ""}
              src={beer.image}
              alt={beer.name}
            />
          </div>
        </article>
      ))}
    </section>
  )
}

export default Beers
