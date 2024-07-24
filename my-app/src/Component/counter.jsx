import React, { useState } from 'react'


function Fruits(prop){
    return(
        <>
        <h1>this is fruits {prop.colour[prop.number]} </h1>
        </>
    );
}

const Counter = () => {
const colour= ["red","blue","white"];
const [number,setnumber]=useState(0);
function change()
{
  setnumber((number+1)%colour.length)

  console.log( "number "+number);
}
  return (
    <>
    <div>Counter</div>
    <Fruits   colour={colour} number= {number}/>
    <button onClick={change}>change</button>
    </>
  );
}

export default Counter