
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/coffee';
import { useState } from 'react';

function App() {
  
  const coffeesx = useLoaderData();
  const [coffees,setCoffees]=useState(coffeesx)
  return (
    <>
      <h1>COffee Card length:{coffees.length}</h1>
      <div className='bg-slate-500 p-10 grid grid-cols-1 md:grid-cols-2'>
        {
          coffees.map(coffee => (
            <Coffee
             key={coffee._id}
            coffee={coffee}
             coffees={coffees}
             setCoffees={setCoffees}
             ></Coffee>

          ))
        }
      </div>


    </>
  )
}

export default App
