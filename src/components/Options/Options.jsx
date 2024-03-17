import css from "../Options/Options.module.css";

const Options = ({total, updateFeedback}) => {

  const hasFeedback = total > 0;


  return (
    <div>
      <button onClick={() => updateFeedback("good")} >Good</button>
      <button onClick={() => updateFeedback("neutral")} >Neutral</button>
      <button onClick={() => updateFeedback("bad")} >Bad</button>
      {hasFeedback && <button onClick={() => updateFeedback("reset")} >Reset</button>}
    </div>
  )
}

export default Options