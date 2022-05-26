import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Counter></Counter>
    </div>
  )
}

export default App
