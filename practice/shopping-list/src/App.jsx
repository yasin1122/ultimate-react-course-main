// Import the useState hook from React, which allows us to manage component state
import { useState } from 'react'

// Define an initial list of shopping items
const demoList = [
  { name: 'bread', quantity: 3 },
  { name: 'eggs', quantity: 12 },
  { name: 'salmon', quantity: 1 }
]

// Main App Component (Entry Point)
export default function App() {
  return (
    <>
      {/* Title of the shopping list */}
      <h1>Shopping List</h1>
      {/* Render the ShoppingList component */}
      <ShoppingList />
    </>
  )
}

// ShoppingList Component: Manages the list of items
function ShoppingList() {
  // useState hook to manage the shopping list state
  const [items, setItems] = useState(demoList)

  // Function to remove an item from the list by filtering it out
  function handleDelete(itemName) {
    setItems(prevItems => prevItems.filter(item => item.name !== itemName))
  }

  // Function to add a new item to the list
  function handleAddItem(newItem, newQuantity) {
    // Prevent adding an empty item
    if (!newItem.trim()) return

    // Check if the item already exists in the list (case insensitive)
    if (items.some(item => item.name.toLowerCase() === newItem.toLowerCase())) {
      alert('Item already exists in the list!')
      return
    }

    // Add the new item to the list (spread the existing items and append the new one)
    setItems(prevItems => [
      ...prevItems,
      { name: newItem, quantity: newQuantity }
    ])
  }

  // Function to clear all items from the list
  function handleClearList() {
    setItems([]) // Sets the items state to an empty array
  }

  return (
    <>
      {/* Form to add new items, passing the handleAddItem function */}
      <AddItemForm onAddItem={handleAddItem} />

      {/* Render the shopping list as an unordered list */}
      <ul>
        {items.map(item => (
          <ShoppingItem
            key={item.name} // Unique key for React list rendering
            name={item.name}
            quantity={item.quantity}
            onDelete={handleDelete} // Pass delete function to child component
          />
        ))}
      </ul>

      {/* Button to clear the entire shopping list */}
      <ClearButton
        onClear={handleClearList}
        isDisabled={items.length === 0} // Disable button if the list is empty
      />
    </>
  )
}

// ClearButton Component: Clears the entire list
function ClearButton({ onClear, isDisabled }) {
  return (
    <button
      onClick={onClear}
      disabled={isDisabled} // Prevent clicking if the list is empty
    >
      Clear List
    </button>
  )
}

// AddItemForm Component: Handles adding new items to the list
function AddItemForm({ onAddItem }) {
  // useState to manage form inputs
  const [newItem, setNewItem] = useState('') // Track item name input
  const [newQuantity, setNewQuantity] = useState(1) // Track item quantity input

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault() // Prevent default form submission behavior
    onAddItem(newItem, newQuantity) // Call the parent function to add the item

    // Reset input fields after submission
    setNewItem('')
    setNewQuantity(1)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for item name */}
      <input
        type='text'
        placeholder='Item name'
        value={newItem} // Bind value to state
        onChange={e => setNewItem(e.target.value)} // Update state when input changes
        required
      />
      {/* Input for item quantity */}
      <input
        type='number'
        min='1'
        value={newQuantity} // Bind value to state
        onChange={e => setNewQuantity(Number(e.target.value))} // Convert input to number
        required
      />
      {/* Submit button to add an item */}
      <button type='submit'>Add Item</button>
    </form>
  )
}

// ShoppingItem Component: Represents a single item in the list
function ShoppingItem({ name, quantity, onDelete }) {
  // useState hook to manage the item quantity dynamically
  const [count, setCount] = useState(quantity)

  // Function to increment the quantity
  function increment() {
    setCount(prev => prev + 1)
  }

  // Function to decrement the quantity (ensures it doesn’t go below 0)
  function decrement() {
    setCount(prev => (prev > 0 ? prev - 1 : 0))
  }

  return (
    <li>
      {name} {/* Display item name */}
      <Button onClick={increment}>+</Button> {/* Increase quantity */}
      {count} {/* Display item quantity */}
      <Button onClick={decrement}>-</Button> {/* Decrease quantity */}
      <Button onClick={() => onDelete(name)}>Delete</Button> {/* Remove item */}
    </li>
  )
}

// Button Component: Reusable button with onClick functionality
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}
