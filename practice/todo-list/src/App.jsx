export default function App() {
  return (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            type='text'
            id='item'
          />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        <li>
          <label htmlFor=''>
            <input type='checkbox' />
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
        <li>
          <label htmlFor=''>
            <input type='checkbox' />
            Item 2
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  )
}
