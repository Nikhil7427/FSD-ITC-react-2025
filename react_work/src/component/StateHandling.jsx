import React, {use, useState} from 'react'

export default function StateHandling() {
    const [counter, setCounter] = useState(20);

    function increaseVlaue(){
        setCounter(counter + 10);
    }
    return (
    <div>
      stateHAndling
      <h2>Counter value = {counter}</h2>
      <button onClick={increaseVlaue}>Increase Vlaue</button>
      <button onClick={()=>setCounter(counter-20)}>Decresse Vlaue</button>
    </div>
  )
}
