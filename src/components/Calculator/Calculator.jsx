import Display from './Display';
import ScientificKeypad from './ScientificKeypad';
import NormalKeypad from './NormalKeypad';

const Calculator = () => {
  return (
    <div>
      <div className="casio-fx39">
        <div className="brand-container">
          <div className="brand">
            <div className="text">
              <span className="brand-text">CASIO</span>{' '}
              <span className="model-text">fx-39</span>
            </div>
            <div className="sub-text">SCIENTIFIC CALCULATOR</div>
          </div>
        </div>

       <Display />

<ScientificKeypad />
        <NormalKeypad />

      

        <div className="mode-selector">
          <input id="deg" type="radio" name="mode" value="deg" />
          <label htmlFor="deg"></label>

          <input id="rad" type="radio" name="mode" value="rad" />
          <label htmlFor="rad"></label>

          <input id="gra" type="radio" name="mode" value="gra" checked />
          <label htmlFor="gra"></label>

          <input id="sd" type="radio" name="mode" value="sd" checked />
          <label htmlFor="sd"></label>
        </div>

        <div className="mode-text">
          <div className="option">DEG—</div>
          <div className="option">RAD—</div>
          <div className="option">GRA—</div>
          <div className="option color">S D —</div>
        </div>

        <div className="casio-bottom"></div>
      </div>
    </div>
  );
};

export default Calculator;
