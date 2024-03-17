const Feedback = ({ cafeState, total, possitivePercent }) => {
  
  return (
    <div>
      <ul>
        <li>Good: {cafeState.good}</li>
        <li>Neutral: {cafeState.neutral}</li>
        <li>Bad: {cafeState.bad}</li>
        <li>Total: {total}</li>
        <li>Possitive: {possitivePercent}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
