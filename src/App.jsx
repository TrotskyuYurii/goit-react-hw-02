import { useState, useEffect } from 'react'
import './App.css'

import Discription from './components/Discription/Discription.jsx'
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

  const [totalState, setTotalState] = useState(0);

  const updateFeedback = (event) => {
    if (event === 'reset') {
      setCafeState(cafeStateInitial);
    } else {
      setCafeState({ ...cafeState, [event]: cafeState[event] + 1 });
    }
  };

  useEffect(() => {
    setTotalState(cafeState.good + cafeState.neutral + cafeState.bad);
  }, [cafeState]);

  const [possitivePercent, setPossitivePercent] = useState(0);

useEffect(() => {
  if (totalState !== 0) {
    setPossitivePercent(Math.round(((cafeState.good + cafeState.neutral) / totalState) * 100));
  } else {
    setPossitivePercent(0); 
  }
}, [cafeState, totalState]);


  return (
    <div>
      <Discription />
      <Options updateFeedback={updateFeedback} cafeState={cafeState}/>
      <Feedback cafeState={cafeState} totalState={totalState} possitivePercent={possitivePercent}/>
      <Notification totalState={totalState}/>
    </div>
  )
};

export default App
