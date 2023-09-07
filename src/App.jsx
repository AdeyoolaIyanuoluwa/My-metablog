import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Herosection from "./container/Hero-section/herosection";
import Signup from "./container/Signup/signup";
import Login from "./container/Login/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createpost from "./container/Createpost/createpost";
import Langingpage from "./container/Landingpage/langingpage";
import ViewPost from "./container/ViewPost/viewPost";
import PrivateRoute from "./routes/privateRoute";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/landingpage" element={<Langingpage />} />
            <Route path="/create" element={<Createpost />} />
            <Route path="/viewpost/:postId" element={<ViewPost />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
