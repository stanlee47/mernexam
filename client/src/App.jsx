import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [name, setName] = useState('')
  const [cgpa, setcgpa] = useState(0.0)
  const [dpt, setdpt] = useState('')
  const savestud = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('https://loacalhost:8000/savestudent', (name, cgpa, dpt))
      
    }
    catch (err) {
      alert(err)
    }
  }


  return (
    <>
      
      <h1>Students</h1>
      <form onSubmit={savestud}>
        <div>
          <label>NAME</label>
          <input type="text" onChange={(e)=>setName(e.target.value)}></input><br></br>
          <label>CGPA</label>
          <input type="text" onChange={(e) =>setcpga(e.target.value)}></input><br></br>
          <label>DPT</label>
          <input type="text" onChange={(e) => setdpt(e.target.value)}></input>
        </div>
      </form>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Save
        </button>
        
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
