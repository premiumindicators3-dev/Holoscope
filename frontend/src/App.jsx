import { BrowserRouter,Router,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Routes } from 'react-router'
import Result from './pages/Result' 
import Success from "./pages/Success";

function App() {
  
  return (
    
      <Routes>
        
<Route path="/success" element={<Success />} />
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
  )
}

export default App
