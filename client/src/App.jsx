import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
