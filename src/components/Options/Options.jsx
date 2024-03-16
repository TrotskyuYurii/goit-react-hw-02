import css from "../Options/Options.module.css";

const Options = ({cafeState, updateFeedback}) => {

  const hasFeedback = cafeState.good > 0 || cafeState.neutral > 0 || cafeState.bad > 0;


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