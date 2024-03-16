

const Feedback = ({cafeState, totalState, possitivePercent}) => {

  if (totalState>0) {
    return (
      <div>
          <ul>
              <li>Good: {cafeState.good}</li>
              <li>Neutral: {cafeState.neutral}</li>
              <li>Bad: {cafeState.bad}</li>
              <li>Total: {totalState}</li>
              <li>Possitive: {possitivePercent}%</li>
          </ul>
      </div>
    )
  } else {
    return (
      <p>No feedback yet</p>
    )
  };


}

export default Feedback