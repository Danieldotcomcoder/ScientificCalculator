

const ScientificKeypad = () => {
  return (
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
        </div>
  )
}

export default ScientificKeypad