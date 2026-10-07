// Write your code here
import {useState} from 'react'
import './index.css'
const FruitsCounter = () => {
  const [mango, setMango] = useState(0)
  const [banana, setBanana] = useState(0)
  const EatMango = () => {
    setMango(prevMango => prevMango + 1)
  }
  const EatBanana = () => {
    setBanana(prevBanana => prevBanana + 1)
  }
  return (
    <div className="container">
      <div className="container11">
        <div className="container1">
          <h1 className="headElement">
            Bob ate
            <span> {mango} </span>
            Mangoes
            <span> {banana} </span>
            Bananas
          </h1>
          <div className="fruits-Container">
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mangoImage"
              />
              <button onClick={EatMango} type="button">
                Eat Mango
              </button>
            </div>
            <div className="banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="bananaImage"
              />
              <button type="button" onClick={EatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FruitsCounter
