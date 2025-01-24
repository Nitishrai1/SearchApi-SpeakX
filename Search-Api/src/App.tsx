import { useState } from 'react'
import SearchBar from './component/Searchbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SearchBar />
    </>
  )
}

export default App
