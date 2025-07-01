import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='counter-container'>
        <h2>Counter</h2>
        <div className="counter-display">{count}</div>
        <button className="increment btn" onClick={() =>setCount(count+1)}>+</button>
        <button className="reset btn" onClick={() => setCount(0)}>reset</button>
        <button className="decrement btn" onClick={() =>setCount(count-1)}>-</button>
      </div>
    </>
  )
}


