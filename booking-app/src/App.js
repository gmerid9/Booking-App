import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Auth/Auth";
import Auth from "./Components/Auth/loginform";

import SignUpForm from "./Components/Auth/SignUpForm.js";
import HotelView from "./Pages/hotelView/Hotelview";
import Hotels from "./Pages/Hotel/Hotel";
import HotelList from "./Components/HotelList/HotelList";
import { getUser } from "./Utilities/users-servies";

// function App() {
//   const [user, setUser] = useState(getUser());

//   return (
//     <div className="App">
//     <div  >
//   {user ? 
//             <>
//       <HotelList user={user.name} />
//       <Nav />
//           <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/hotels" element={<Hotels />} />
//         <Route path="/hoteldetail" element={<HotelView />} />
//         <Route path="/book" element={<Book />} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUpForm />} />
//       </Routes>
//     </>
//   ) 
//   : 
//   (
//     <Auth setUser={setUser} />
//   )}
//   </div>
//     </div>
//   );
// }

// export default App;



function App() {

  const [user, setUser] = useState(getUser());

  return (
    <div className="App">

      
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hoteldetail" element={<HotelView />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      
    
    </div>
  );
}


export default App;


