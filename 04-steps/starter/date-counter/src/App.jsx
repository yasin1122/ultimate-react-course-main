import { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)

  const handleReset = () => {
    setStep(1)
    setCount(0)
  }

  return (
    <>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={e => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setStep(step => step - 1)}>-</button>
        <input
          type='text'
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
        <button onClick={() => setStep(step => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count => count - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount(count => count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </>
  )
}

export default App
