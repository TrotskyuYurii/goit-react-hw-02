const Feedback = ({ cafeState}) => {

  const totalState = cafeState.good+cafeState.bad+cafeState.neutral;
  const possitivePercent = totalState !== 0 ? Math.round(((cafeState.good + cafeState.neutral) / totalState) * 100) : 0;

  return (
    <>
      {totalState == 0 ? (
        <div></div>
      ) : (
        <div>
          <ul>
            <li>Good: {cafeState.good}</li>
            <li>Neutral: {cafeState.neutral}</li>
            <li>Bad: {cafeState.bad}</li>
            <li>Total: {totalState}</li>
            <li>Possitive: {possitivePercent}%</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Feedback;
