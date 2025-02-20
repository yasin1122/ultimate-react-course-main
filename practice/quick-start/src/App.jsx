import { useState } from 'react'

export default function App() {
  const [linkedCount, setLinkedCount] = useState(0)

  function handleClick() {
    setLinkedCount(linkedCount + 1)
  }

  return (
    <div>
      <h1>Quick Start</h1>
      <MyButton
        linkedCount={linkedCount}
        onHandleClick={handleClick}
      />
      <MyButton
        linkedCount={linkedCount}
        onHandleClick={handleClick}
      />
      <Profile />
      <ShoppingList />
    </div>
  )
}

function MyButton({ linkedCount, onHandleClick }) {
  return <button onClick={onHandleClick}>Clicked Count = {linkedCount}</button>
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%'
        }}
      />
    </>
  )
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 }
]

function ShoppingList() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
      {product.title}
    </li>
  ))
  return <ul>{listItems}</ul>
}
