import { useState } from 'react'

function App() {
  const [colour,setColour] = useState("grey")

  return (
    <>
    <div  className="w-full h-screen"
     style={{backgroundColor:colour}}>
      
      <div className="fixed flex flex-wrap justify-center bottom-20   inset-x-0 px-3 ">
        <div className="fixed flex flex-wrap bg-white px-3 py-2 rounded-2xl gap-4">
        <button onClick={()=>setColour("blue")}className=" gap-3 rounded-full px-4 py-1 text-sky-50"style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColour("green")}className=" gap-3 rounded-full px-4 py-1 text-sky-50"style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>setColour("black")}className=" gap-3 rounded-full px-4 py-1 text-sky-50"style={{backgroundColor:"black"}}>black</button>
        <button onClick={()=>setColour("yellow")}className=" gap-3 rounded-full px-4 py-1 text-sky-50"style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={()=>setColour("orange")}className=" gap-3 rounded-full px-4 py-1 text-sky-50"style={{backgroundColor:"orange"}}>orange</button>
        <button onClick={()=>setColour("cyan")}className=" gap-3 rounded-full px-4 py-1 text-sky-50"style={{backgroundColor:"cyan"}}>cyan</button>
        



          
        </div>
        
      </div>
    </div>
     
    </>
  )
}

export default App
