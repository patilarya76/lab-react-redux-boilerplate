import { useState } from 'react';
import LikeCounter from './LikeCounter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <LikeCounter/>
     </div>
    </>
  )
}

export default App
