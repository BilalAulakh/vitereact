import './App.css'
import { useState } from 'react';
function App() {
  let [counter,setCounter]=useState(1)
// let counter=5;
const Addvalue=()=>{
setCounter(counter+1)
}
const Removevalue=()=>{
  setCounter(counter-1)
  }
  return (
  <>
  <div className='w-full h-[100vh]  text-center bg-[url("https://cdn.pixabay.com/photo/2023/09/05/12/29/boy-8235025_1280.jpg")] flex flex-col justify-center items-center'><h1 className='bg-amber-400 text-center w-72 mx-auto h-16 flex justify-center items-center animate-[wiggle_3s_ease-in-out_infinite]'>counter is :{counter}</h1>
<button
onClick={Addvalue}
 className='w-48 h-9 bg-slate-600 text-white rounded-[5px] mt-6'>Add</button>
<br />
<button onClick={Removevalue} className='w-48 h-9 bg-slate-600 text-white rounded-[5px] mt-4 animate-[wiggle1_1s_ease-in-out_infinite]'>Decrease</button>
</div>

  </>
  )
}

export default App
