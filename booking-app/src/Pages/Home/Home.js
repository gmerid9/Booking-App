
import "./home.css"

import Header from "../../Components/Header/Header"
import Main from "../../Components/Main/Main"
import Main2 from "../../Components/Main/Main2"
import { Route, Routes} from "react-router-dom"
import Hotel from "../Hotel/Hotel"
import Footer from "../../Components/Footer/Footer"


export default function Home (props) {
    return (
        <>
        
        <Header />

        <div className="homeContainer">
          
            
        <Main />
        <Main2 />
        
       </div>
        <Footer />
        </>
    )
}