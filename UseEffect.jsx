import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count, setCount] = useState(0);

// const Time = new Date().toLocaleDateString;
  useEffect(()=>{
//     setInterval(()=>{

// const increment= setCount(count +1);
// console.log(increment);

//     },1000)

setTimeout(()=>{
   setCount(count +1);
  
  
},1000)
  },[count]);

  
  return (
    <div>

      <h1>count is render: {count} Times </h1>
    </div>
  )
}

export default UseEffect