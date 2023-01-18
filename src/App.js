import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
          <Route exact path='/about' element={<About/>} ></Route>
          <Route exact path='/contactus' element={<Contactus/>} ></Route>

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
