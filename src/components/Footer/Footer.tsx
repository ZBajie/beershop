import { useDispatch, useSelector } from "react-redux"
import "./Footer.scss"
import { RootState } from "../../state/store"
import { decrement, increment } from "../../state/styleSlice/styleSlice"

const Footer = () => {
  const styleValue = useSelector((state: RootState) => state.style.styleValue)
  const dispatch = useDispatch()

  return (
    <footer className={` footer-main `}>
      <div>
        <p>Whats your alcohol percentage?</p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>{styleValue}</p>
        <button
          onClick={() => {
            dispatch(increment())
          }}
        >
          +
        </button>
      </div>
      <p>If you still on your feets, you can read here.</p>
    </footer>
  )
}

export default Footer
