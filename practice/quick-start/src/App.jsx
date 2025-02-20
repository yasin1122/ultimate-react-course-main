export default function App() {
  return (
    <div>
      <h1>Quick Start</h1>
      <MyButton />
      <Profile />
    </div>
  )
}

function MyButton() {
  return <button>This is a button</button>
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
