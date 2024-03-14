import { useState } from 'react'
import './App.css'

import Discription from './components/Discription/Discription.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'



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



  const updateFeedback = (event) => {

    if (event==='reset') {setCafeState(cafeStateInitial)} 
    else
     {setCafeState({ ...cafeState, [event]: cafeState[event] + 1 })};
  };





  
  return (
    
    <div>
      <Discription />
      <Options updateFeedback={updateFeedback} />
      <Feedback cafeState={cafeState}/>
    </div>
  )

}

export default App
