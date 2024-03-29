import { observer } from "mobx-react"
import calculatorStore from '../Logic/calculatorStore.js'


const NormalKeypad = observer(() => {

  const handleClick = (number) => {
    calculatorStore.setCurrentValue(number)
  }

  const clearAll = () => {
    calculatorStore.clear()
  }

  return (
    <div className="normal-keypad keypad">
    <div>
      <button className="dark" onClick={() => handleClick(7)}>7</button>
    </div>
    <div>
      <button className="dark" onClick={() => handleClick(8)}>8</button>
    </div>
    <div>
      <button className="dark" onClick={() => handleClick(9)}>9</button>
    </div>
    <div>
      <button className="clear">C</button>
    </div>
    <div>
      <button className="clear" onClick={() => clearAll()}>AC</button>
      <span className="color abs">SAC</span>
    </div>
    <div>
      <button className="dark" onClick={() => handleClick(4)}>4</button>
    </div>
    <div>
      <button className="dark" onClick={() => handleClick(5)}>5</button>
    </div>
    <div>
      <button className="dark" onClick={() => handleClick(6)}>6</button>
    </div>
    <div>
      <button className="light big">×</button>
    </div>
    <div>
      <button className="light big fix">÷</button>
    </div>
    <div>
      <button className="dark" onClick={() => handleClick(1)}>1</button>
    </div>
    <div>
      <button className="dark" onClick={() => handleClick(2)}>2</button>
    </div>
    <div>
      <button className="dark" onClick={() => handleClick(3)}>3</button>
    </div>
    <div>
      <button className="light big">+</button>
    </div>
    <div>
      <button className="light big">—</button>
    </div>
    <div>
      <button className="dark">0</button>
    </div>
    <div>
      <button className="dark">·</button>
    </div>
    <div>
      <button className="light">EXP</button>
      <span>π</span>
    </div>
    <div>
      <button className="light big">=</button>
    </div>
    <div>
      <button className="light">M+</button>
      <div>
        <span className="color">x</span>
        <span className="highlight">DEL</span>
      </div>
    </div>
  </div>
  )
})

export default NormalKeypad