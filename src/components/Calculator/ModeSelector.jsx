const ModeSelector = () => {
  return (
    <>
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
    </>
  );
};

export default ModeSelector;
