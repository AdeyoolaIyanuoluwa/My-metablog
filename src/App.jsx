import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Herosection from "./container/Hero-section/herosection";
import Signup from "./container/Signup/signup";
import Login from "./container/Login/login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
          <Router>
                <Navbar/>      
        <Routes>
                
                <Route path="/" element={<Herosection/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
        <ToastContainer/>
      
  
    </>
  );
}

export default App;
