import { useState } from 'react'
import './App.css'

import Discription from './components/Discription/Discription.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'




function App() {
  
  const cafeState = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  

  const updateFeedback = (event) => {
    console.log(event);
  };


  
  return (
    
    <div>
      <Discription />
      <Options updateFeedback={updateFeedback} />
      <Feedback/>
    </div>
  )

}

export default App
