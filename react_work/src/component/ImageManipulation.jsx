import React, { useState } from 'react'
import im from './im.jpg'

export default function ImageManipulation() {
  const [height, setHeight] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function setColor() {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  }

  return (
    <div>
      ImageManipulation

      <div style={{ margin: '0px auto', border: '2px solid black', height: '450px', width: '450px', paddingLeft: '300px', paddingTop: '100px' }}>
        <img src={im} height={height} width={200} alt="image" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
      </div>

      <div>
        <button onClick={() => setHeight(height + 20)}>Increase Height</button>
        <button onClick={() => setHeight(height - 20)}>decrease Height</button>
        <button onClick={setColor}>ChangeBackgroundColor</button>
      </div>

    </div>
  )
}
