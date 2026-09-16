
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/coffee';

function App() {
  const coffeesx = useLoaderData();
  return (
    <>
      <h1>COffee Card length:{coffeesx.length}</h1>
      <div className='bg-slate-500 p-10 grid grid-cols-1 md:grid-cols-2'>
        {
          coffeesx.map(coffee => (
            <Coffee key={coffee._id}
              coffee={coffee} ></Coffee>

          ))
        }
      </div>


    </>
  )
}

export default App
