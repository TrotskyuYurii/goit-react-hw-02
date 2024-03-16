

const Feedback = ({cafeState, totalState}) => {

  return (
    <div>
        <ul>
            <li>Good: {cafeState.good}</li>
            <li>Neutral: {cafeState.neutral}</li>
            <li>Bad: {cafeState.bad}</li>
            <li>Total: {totalState}</li>
            <li>Possitive: 80%</li>
        </ul>
    </div>
  )
}

export default Feedback