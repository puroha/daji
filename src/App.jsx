import './App.css'
import Header from './Components/Header'
import MainPage from './Components/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Photos from './Components/Photos'
import Videos from './Components/Videos'
import Events from './Components/Events'
import DivyaDarshan from './Components/DivyaDarshan'

function App() {
  
  return (
    <>
      <div>

        <Router>
            <Header></Header>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/HOME" element={<MainPage />} />
                <Route path="/GALLERY" element={<Photos />} />
                <Route path="/LIFE" element={<Videos />} />
                <Route path="/EVENTS" element={<Events />} />
                <Route path="/MEMORIES" element={<DivyaDarshan />} />
            </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
