import React, { useState } from 'react'

function CounterFuncComp() {
    const [count, setCount] = useState(0);

   let  increment = ()=>{
    if(count <10){
        setCount(count+1)
    }
    }

    let  decrement = ()=>{
    if (count > 0){
        setCount(count-1)
    }

    }
  return (

    <div >

        <p className='m-1'>{count}</p>
        <button className="btn btn-primary m-1" onClick={increment}>increment</button>
        <button className="btn btn-primary m-1" onClick={decrement}>decrement</button>
    </div>
  )
}

export default CounterFuncComp;