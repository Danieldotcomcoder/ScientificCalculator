import { makeAutoObservable } from 'mobx';

class calculatorStore {
  currentValue = '';
  storedValue = '';
  operator = '';

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentValue(value) {
    this.currentValue += value;
    console.log(this.currentValue);
  }

  setStoredValue(value) {
    this.storedValue = value;
    console.log(value);
  }

  getCurrentValue() {
    return this.currentValue;
  }

  setOperator(operator) {
    this.operator = operator;
  }

  clear() {
    this.currentValue = '';
    this.storedValue = '';
    this.operator = '';
  }
}

export default new calculatorStore();
