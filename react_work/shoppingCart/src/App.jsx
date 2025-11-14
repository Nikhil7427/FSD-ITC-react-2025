import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Component/Login'
import Registration from './Component/Registration'
import Dashboard from './Component/Dashboard'
import MainLayout from './Component/MainLayout'

function App() {
  const [data, setData] = useState();
  return (
    <>
      {/* <h2>Welcome to shopping cart</h2> */}
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login logData={data}/>}></Route>
        <Route path='/register' element={<Registration regData={setData}/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<MainLayout/>}></Route>
      </Routes>
      </BrowserRouter>
      {JSON.stringify(data)}
    </>
  )
}

export default App
