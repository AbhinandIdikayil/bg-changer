import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  const colors = ['red','blue','green','brown','yellow','black','orange'];
  function changeBgColor(color) {
    setColor(color)
  }
  function preview() {

  }
  return (
    <>
      <div className='w-full h-screen duration-700' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            {colors.map((elem) => {
              return (
                <button onClick={() => changeBgColor(elem)} style={{backgroundColor:elem}} className='outline-none font-bold px-4 py-1 rounded-full text-zinc-50 shadow-lg'> {elem} </button>
              )
            })}
            <button onClick={() => preview('')} style={{backgroundColor: "#FF512F"}} className='outline-none font-bold px-4 py-1 rounded-full text-zinc-50 shadow-lg'>preview</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
