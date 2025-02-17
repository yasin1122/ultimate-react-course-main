import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑'
]

export default function App() {
  // Hooks must be top level (not nested in functions or statements)
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep(currStep => currStep - 1)
  }

  function handleNext() {
    if (step < 3) setStep(currStep => currStep + 1)
  }

  return (
    <>
      <button
        className='close'
        onClick={() => setIsOpen(is => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 && 'active'}>1</div>
            <div className={step >= 2 && 'active'}>2</div>
            <div className={step >= 3 && 'active'}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <Button
              bgColor={'#7950f2'}
              textColor={'#fff'}
              onClick={handlePrevious}
              text={'Previous'}
              emoji='👈'
            />
            <Button
              bgColor={'#7950f2'}
              textColor={'#fff'}
              onClick={handleNext}
              text={'Next'}
              emoji='👉'
            />
          </div>
        </div>
      )}
    </>
  )
}

function Button({ textColor, bgColor, onClick, text, emoji }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>
      <span>{emoji}</span> {text}
    </button>
  )
}
