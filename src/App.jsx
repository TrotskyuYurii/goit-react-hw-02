import { useState, useEffect } from 'react'
import './App.css'

import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx'

function App() {
  
  const cafeStateInitial = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  const [cafeState, setCafeState] = useState(() => {
    const stateString = localStorage.getItem("cafeStateValue");
    const stateRes = JSON.parse(stateString) ?? cafeStateInitial;
    return stateRes;
  });

  useEffect(() => {
    localStorage.setItem("cafeStateValue", JSON.stringify(cafeState));
  }, [cafeState]);

  const updateFeedback = (event) => {
    if (event === 'reset') {
      setCafeState(cafeStateInitial);
    } else {
      setCafeState({ ...cafeState, [event]: cafeState[event] + 1 });
    }
  };




  const total = cafeState.good + cafeState.bad + cafeState.neutral;
  const possitivePercent = total !== 0 ? Math.round(((cafeState.good + cafeState.neutral) / total) * 100) : 0;


  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} total={total}/>

      {total > 0 ? (
        <Feedback cafeState={cafeState} total={total} possitivePercent={possitivePercent}/>
      ) : (
        <Notification />
      )}
    </div>
  )
};

export default App
