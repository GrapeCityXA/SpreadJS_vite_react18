import { useState } from 'react'
import OnlineSpread from './components/OnlineSpread.jsx'
import OnlineDesigner from './components/OnlineDesigner.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <OnlineSpread /> */}
      <OnlineDesigner/>
    </div>
  )
}

export default App
