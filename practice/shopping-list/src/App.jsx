import { useState } from 'react'

const demoList = [
  { name: 'bread', quantity: 3 },
  { name: 'eggs', quantity: 12 },
  { name: 'salmon', quantity: 1 }
]

export default function App() {
  return (
    <>
      <h1>Shopping List</h1>
      <ShoppingList />
    </>
  )
}

function ShoppingList() {
  return (
    <ul>
      {demoList.map(item => (
        <ShoppingItem
          name={item.name}
          quantity={item.quantity}
          key={item.name}
        />
      ))}
    </ul>
  )
}

function ShoppingItem({ name, quantity }) {
  const [count, setCount] = useState(0)

  return (
    <li>
      {name} {quantity}
    </li>
  )
}

function Button() {}
