import { makeAutoObservable } from "mobx"

class CalculatorStore {
  currentValue = ""
  storedValue = ""
  operator = ""

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentValue(value) {
    this.currentValue = value
  }

  setStoredValue(value) {
    this.storedValue = value
  }

  setOperator(operator) {
    this.operator = operator
  }

  clear() {
    this.currentValue = ""
    this.storedValue = ""
    this.operator = ""
  }
}

export default CalculatorStore