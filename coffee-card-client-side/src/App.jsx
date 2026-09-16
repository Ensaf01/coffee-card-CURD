
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
  const coffeesx=useLoaderData();
  return (
    <>
      <h1>COffee Card length:{coffeesx.length}</h1>
      
    </>
  )
}

export default App
