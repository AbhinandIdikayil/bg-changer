import { useState,useRef } from 'react'



function App() {
  const [color, setColor] = useState('olive');
  const [isChanging, SetIsChanging] = useState(false);
  const intervalIdRef = useRef(null);

  const colors = ['red', 'blue', 'green', 'brown', 'yellow', 'black', 'orange'];
  function changeBgColor(color) {
    setColor(color)
  }

  function startPreview() {
    let index = 0;
    intervalIdRef.current = setInterval(() => {
      changeBgColor(colors[index])
      index = parseInt((index + 1) % colors.length); // Update index and loop back to 0 if it reaches the end
    }, 1000);
  }

  function handlePreviewClick() {
    if (isChanging) {
      clearInterval(intervalIdRef.current);
      SetIsChanging(false)
    }else{
      SetIsChanging(true)
      startPreview()
    }

  }

  return (
    <>
      <div className='w-full h-screen duration-700' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            {colors.map((elem,i) => {
              return (
                <button key={i} onClick={() => changeBgColor(elem)} style={{ backgroundColor: elem }} className='outline-none font-bold px-4 py-1 rounded-full text-zinc-50 shadow-lg'> {elem} </button>
              )
            })}
            <button onClick={handlePreviewClick} style={{ backgroundColor: "#FF512F" }} className='outline-none font-bold px-4 py-1 rounded-full text-zinc-50 shadow-lg'>
              {isChanging ? 'stop' : 'preview'}
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
