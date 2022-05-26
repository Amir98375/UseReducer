import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './components/counter'
import { GitHubUsers } from './components/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<GitHubUsers></GitHubUsers>
    </div>
  )
}

export default App
