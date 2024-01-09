import Display from './Display';
import ScientificKeypad from './ScientificKeypad';
import NormalKeypad from './NormalKeypad';
import ModeSelector from './ModeSelector';
import BrandContainer from './BrandContainer';

const Calculator = () => {
  return (
    <div>
      <div className="casio-fx39">
       <BrandContainer />

       <Display />

<ScientificKeypad />
        <NormalKeypad />

      <ModeSelector />

 
    </div>
    </div>
  );
};

export default Calculator;
