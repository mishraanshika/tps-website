import './App.css';
import Home from "./pages/landing-page/home"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Events from './pages/events';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Publications from './pages/publications';
import About from './pages/about'
import People from './pages/people'
import Subsform from './pages/subsform'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/publications" element={<Publications/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/people" element={<People/>}/>
      <Route path="/subscribe" element={<Subsform/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App;
