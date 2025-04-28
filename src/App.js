import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home'; 
import Doctors from './pages/doctors';
import About from './pages/about';
import Contact from './pages/contact';
import DoctorsDetails from './pages/doctorsDetails';
import Category from './pages/category';
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import SignInDoctors from "./pages/doctor-sign-in";
import SignUpDoctors from "./pages/doctor-sign-up";
import DoctorsList from './pages/playground';
import './userdetection.js'; 
import Dashboard from './pages/dashboard';
import SignOut from './pages/sign-out';
import './index.css'

import './main.css'
import './normalize.css'




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctorsDetails/:documentId" element={<DoctorsDetails />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors-sign-in" element={<SignInDoctors />} />
          <Route path="/doctors-sign-up" element={<SignUpDoctors />} />
          <Route path="/playground" element={<DoctorsList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-out" element={<SignOut />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
