import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class CalculatorStore {
  constructor() {
    this.value = 0;
    makeAutoObservable(this);
  }

  add(num) {
    this.value += num;
  }

  subtract(num) {
    this.value -= num;
  }

  multiply(num) {
    this.value *= num;
  }

  divide(num) {
    if (num !== 0) {
      this.value /= num;
    } else {
      console.error("Cannot divide by zero");
    }
  }
}

const calculatorStore = new CalculatorStore();
export default calculatorStore