import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Gallary from './component/gallary'

function App() {
  return (
    <>
      <div>
        <h2 >Welcome to react app</h2>
        {/* <h3>
          <Profile />
        </h3> */}

      <Gallary/>
      </div>

    </>
  )
}

export default App
