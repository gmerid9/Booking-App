import { useState } from "react";
import { Routes, Route } from "react-router-dom";


 import { Router } from "react-router-dom";
 import { getUser } from "../../Utilities/users-servies";
 import HotelList from "../../Components/HotelList/HotelList";
import LogIn from "../../Components/Auth/loginform";






export default function Auth (props){
   
const [user, setUser] =useState(getUser());

    return (
        <div  >
        {user ?

        <HotelList user={user.name} />
         :
        <LogIn setUser={setUser}/>
       
        }
      </div>
   
    )
}