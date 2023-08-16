import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Herosection from "./container/Hero-section/herosection";
import Signup from "./container/Signup/signup";
// import Signup from "./container/Sign-up/signup";

function App() {

  return (
    <>
       <Router>
              <Navbar/>      
       <Routes>
              
              <Route path="/" element={<Herosection/>}/>
              <Route path="/signup" element={<Signup/>}/>
        </Routes>
       </Router>
    </>
  );
}

export default App;
