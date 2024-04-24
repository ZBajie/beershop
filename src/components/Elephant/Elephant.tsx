import "./Elephant.scss"
import elephantSvg from "../../assets/elephant-svgrepo-com.svg"

const Elephant = () => {
  return (
    <a href="/pokemons">
      <img src={elephantSvg} alt="" className="flying-elephant" />
    </a>
  )
}
export default Elephant
