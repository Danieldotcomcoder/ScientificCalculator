import './calculator.css'

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

        <div className="screen">
          <div className="lcd-container">
            <div className="lcd-background">888888888</div>
            <div className="lcd">42</div>
          </div>
        </div>

        <div className="scientific-keypad keypad">
          <div>
            <div className="button-top">
              <span className="secondary">INV</span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">1/x</span>
              <span className="secondary">x!</span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">√</span>
              <span className="secondary">x²</span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">log</span>
              <span className="secondary">
                10<sup>x</sup>
              </span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">ln</span>
              <span className="secondary">
                e<sup>x</sup>
              </span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">
                x<sup>y</sup>
              </span>
              <span className="secondary">
                x<sup>1/y</sup>
              </span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">+/-</span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary" data-secondary="←">
                º ' "
              </span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">hyp</span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">
                sin<sup className="secondary">-1</sup>
              </span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">
                cos<sup className="secondary">-1</sup>
              </span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">
                tan<sup className="secondary">-1</sup>
              </span>
            </div>
            <button></button>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">
                a<sup>b/c</sup>
              </span>
            </div>
            <button></button>
            <div>
              <span>∑x²</span>
            </div>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">X↔Y·</span>
              <span className="secondary">M</span>
            </div>
            <button></button>
            <div>
              <span>∑x</span>
            </div>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">[(···</span>
            </div>
            <button></button>
            <div className="six">6</div>
            <div>
              <span className="italic">n</span>
            </div>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">···)]</span>
            </div>
            <button></button>
            <div>
              <span>X̅</span>
            </div>
          </div>
          <div>
            <div className="button-top">
              <span className="primary">M in</span>
            </div>
            <button></button>
          </div>
        </div>

        <button></button>
        <div>
          <span>σ</span>
          <span className="italic">n</span>
        </div>
      </div>
      <div>
        <div className="button-top">
          <span className="primary">MR</span>
        </div>
        <button></button>
        <div>
          <span>σ</span>
          <span className="italic">n</span>
          <span>-1</span>
        </div>
      </div>

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
  );
};

export default Calculator;
