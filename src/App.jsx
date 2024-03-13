import { useState } from 'react'
import './App.css'

function App() {
  
  const cafeState = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  // const [count, setCount] = useState(0);


  return (
    <>
  <h2>Sip Happens Café</h2>
  <p>Please leave your feedback about our service by selecting one of the options below.</p>
  <button>Good</button>
  <button>Neutral</button>
  <button>Bad</button>
  <button>Reset</button>
  <p>No feedback yet</p>
    </>
  )
}

export default App
