import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CardDetails from './components/CardDetails'

const App = () => {
  return (
    <div className=" bg-black text-white">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/:id' element={<CardDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
