import { useState } from 'react'

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    if (!description) return

    const newItem = { description, quantity, packed: false, id: Date.now() }

    onAddItems(newItem)

    setDescription('')
    setQuantity(1)
  }

  return (
    <form
      className='add-form'
      onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        // e.target refers to the current html element
        onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option
            value={num}
            key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        // This is how we manually control element
        value={description} // By manually setting the value
        onChange={e => setDescription(e.target.value)} // and update it
      />
      <button>Add</button>
    </form>
  )
}
