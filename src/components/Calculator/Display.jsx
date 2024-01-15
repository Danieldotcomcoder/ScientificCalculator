import { observer } from 'mobx-react';
import calculatorStore from '../Logic/calculatorStore.js';

const Display = observer(() => {
  return (
    <div className="screen">
      <div className="lcd-container">
        <div className="lcd-background">888888888</div>
        <div className="lcd">{calculatorStore.getCurrentValue()}</div>
      </div>
    </div>
  );
});

export default Display;
