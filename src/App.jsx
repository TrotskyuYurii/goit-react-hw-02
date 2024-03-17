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







  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} cafeState={cafeState}/>
      <Feedback cafeState={cafeState} />
      <Notification cafeState={cafeState}/>
    </div>
  )
};

export default App
