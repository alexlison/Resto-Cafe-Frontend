
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingScreen from './Screens/LandingScreen'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<LandingScreen />} path='/' />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
