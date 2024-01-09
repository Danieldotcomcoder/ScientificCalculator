import './calculator.css';
import Display from './Display';
import ScientificKeypad from './ScientificKeypad';

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
        

        <div className="normal-keypad keypad">
          <div>
            <button className="dark">7</button>
          </div>
          <div>
            <button className="dark">8</button>
          </div>
          <div>
            <button className="dark">9</button>
          </div>
          <div>
            <button className="clear">C</button>
          </div>
          <div>
            <button className="clear">AC</button>
            <span className="color abs">SAC</span>
          </div>
          <div>
            <button className="dark">4</button>
          </div>
          <div>
            <button className="dark">5</button>
          </div>
          <div>
            <button className="dark">6</button>
          </div>
          <div>
            <button className="light big">×</button>
          </div>
          <div>
            <button className="light big fix">÷</button>
          </div>
          <div>
            <button className="dark">1</button>
          </div>
          <div>
            <button className="dark">2</button>
          </div>
          <div>
            <button className="dark">3</button>
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
