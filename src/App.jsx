import { useState } from 'react'
import './App.css'

import Discription from './components/Discription/Discription.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'



<<<<<<< HEAD
=======

>>>>>>> 816aea6f9b60dc740f803f26df64a9456e8b1fbe
function App() {
  
  const cafeStateInitial = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
<<<<<<< HEAD
=======

  const updateFeedback = (event) => {
    console.log(event);
  };
>>>>>>> 816aea6f9b60dc740f803f26df64a9456e8b1fbe

  const [cafeState, setCafeState] = useState(() => {

    const stateString = localStorage.getItem("cafeStateValue");
    const stateRes = JSON.parse(stateString) ?? cafeStateInitial;
    return stateRes;

  });



  const updateFeedback = (event) => {

<<<<<<< HEAD
    if (event==='reset') {setCafeState(cafeStateInitial)} 
    else
     {setCafeState({ ...cafeState, [event]: cafeState[event] + 1 })};
  };





=======
>>>>>>> 816aea6f9b60dc740f803f26df64a9456e8b1fbe
  
  return (
    
    <div>
      <Discription />
      <Options updateFeedback={updateFeedback} />
<<<<<<< HEAD
      <Feedback cafeState={cafeState}/>
=======
      <Feedback/>
>>>>>>> 816aea6f9b60dc740f803f26df64a9456e8b1fbe
    </div>
  )

}

export default App
