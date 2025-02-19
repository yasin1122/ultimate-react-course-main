export default function App() {
  return (
    <>
      <h1>Tip Calculator</h1>
      <form>
        <label>How much was the bill?</label>
        <input type='text'></input>
        <br></br>
        <label>How did you like the service?</label>
        <select>
          <option>Terrible! 0%</option>
          <option>Just OK 5%</option>
          <option>Good 10%</option>
          <option>Amazing! 20%</option>
        </select>
        <br></br>
        <label>How did your friend like the service?</label>
        <select>
          <option>Terrible! 0%</option>
          <option>Just OK 5%</option>
          <option>Good 10%</option>
          <option>Amazing! 20%</option>
        </select>
      </form>
      <h1>You pay $105 ($100 + $5 tip)</h1>
      <button>Reset</button>
    </>
  )
}

// How much was the bill? [  ]

// How did you like the service?
// Dissatisfied 0%, Just ok 5%, Pretty good 10%, Amazing! 20%

// How did your friend like the service?

// You pay $105 ($100 + $5 tip)

// Reset
