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
      <Todo />
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

function Todo() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function handleSubmit() {
    if (input.trim !== '') {
      setTodos([...todos, input])
      setInput('')
    }
  }

  function handleDelete(indexToDelete) {
    const deletedTodos = setTodos(
      todos.filter((_, index) => index !== indexToDelete)
    )
  }

  return (
    <>
      <h1>Todo List</h1>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <DeleteButton
              index={index}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

function DeleteButton({ index, onDelete }) {
  return <button onClick={() => onDelete(index)}>Delete</button>
}
