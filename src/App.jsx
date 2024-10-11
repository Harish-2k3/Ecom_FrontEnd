import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './Router/approuter'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Toaster } from 'react-hot-toast'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter />
      <Toaster position='top-left'/>
    </>
  )
}

export default App
