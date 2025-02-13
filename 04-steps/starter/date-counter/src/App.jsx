import { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <>
      <div>
        <button onClick={() => setStep(step => step - 1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep(step => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count => count - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount(count => count + step)}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      {/* I want to display the todays date here in this format: Thu Jul 01 2022 */}
    </>
  )
}

export default App
