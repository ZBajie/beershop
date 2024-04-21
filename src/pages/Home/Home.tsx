import { useDispatch, useSelector } from "react-redux"
import Beers from "../../components/Beers/Beers"
import { AppDispatch, RootState } from "../../state/store"

const Home = () => {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <section>
      <h1>Home</h1>
      <Beers />
      {cart && <p>Total: {cart.cart.length}</p>}
    </section>
  )
}

export default Home
