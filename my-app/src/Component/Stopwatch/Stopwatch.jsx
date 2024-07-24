import React, { useEffect, useState } from 'react'
import "./Stopwatch.css"
const Stopwatch = () => {
  let [time,setTime]=useState(0);
  let [isrunning,setIsrunning] = useState(false);
  useEffect(() => {
    let intervelid;
    if(isrunning)
    {
      intervelid=setInterval(() => {setTime(time+1) }, 1000);
    }
    return () => {
      clearInterval(intervelid)
    }
  }, [isrunning,time])
  const secounds=Math.floor(time%60)
  const minutes= Math.floor((time/60)%60)
  const hours= Math.floor(time/3600)
  const setrunning=()=>{
    setIsrunning(!isrunning);
  }
  const reset=()=>{
    setIsrunning(false)
    setTime(0)
  }

  
  return (
    <div className='container'>
        <h1>its timer</h1>
      <div className="timer"> 
        <div className="box box1">
          <h1>{hours.toString().padStart(2,"0")}</h1>
        </div>
        <div className="box box2">
          <h1>{minutes.toString().padStart(2,"0")}</h1>
        </div>
        <div className="box box3">
          <h1>{secounds.toString().padStart(2,"0")}</h1>
        </div>
      </div>
      <div className="btn">
      <button onClick={setrunning}>{!isrunning?"Start":"Stop"}</button>
      {isrunning? <button onClick={reset}>reset</button>:''}
      </div>
    </div>
  )
}

export default Stopwatch