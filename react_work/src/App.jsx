import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Gallary from './component/gallary'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/ImageManipulation'

function App() {
  return (
    <>
      <div>
        <h2 >Welcome to react app</h2>
        {/* <h3>
          <Profile />
        </h3> */}

      {/* <Gallary/> */}
      {/* <StateHandling /> */}
      <ImageManipulation />
      </div>

    </>
  )
}

export default App
