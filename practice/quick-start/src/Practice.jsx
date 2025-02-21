import { useState } from 'react'

export function Practice() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('Change this')

  function handleClick() {
    setCount(count + 1)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <h1>This is just Practice</h1>
      <MiniForm
        text={text}
        setText={setText}
        // onSubmit={handleSubmit}
      />
      <TestButton
        count={count}
        onClick={handleClick}
      />
    </>
  )
}

function TestButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>Test Button {count}</button>
    </>
  )
}

function MiniForm({ text, setText }) {
  return (
    <form>
      <label>Change this text: {text}</label>
      <input
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </form>
  )
}
