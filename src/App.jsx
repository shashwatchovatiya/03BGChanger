import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

 
  return (
    <>
      <div className="w-full flex justify-between h-screen " style={{backgroundColor: color}}>
        <button onClick={()=>setColor("red")} className="rounded-md border h-16 border-black px-3 py-2 text-sm font-semibold text-white shadow-sm bg-red-600">red</button>
        <button onClick={()=>setColor("black")} className="rounded-md border h-16 border-white px-3 py-2 text-sm font-semibold text-white shadow-sm bg-black">Black</button>
        <button onClick={()=>setColor("white")} className="rounded-md border h-16 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm bg-white">White</button>
        <button onClick={()=>setColor("orange")} className="rounded-md border h-16 border-black px-3 py-2 text-sm font-semibold text-white shadow-sm bg-orange-500">Orange</button>
        <button onClick={()=>setColor("green")} className="rounded-md border h-16 border-black px-3 py-2 text-sm font-semibold text-white shadow-sm bg-green-600">Green</button>

      </div>
    </>
  )
}

export default App
