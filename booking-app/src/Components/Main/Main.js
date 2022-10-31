// import "./featured.css";
import "./main.css"

import { Link } from "react-router-dom";

export default function Main(props) {
  return (

    <>
    <div className="main-section">
     <h2>Incredible hotel deals</h2>
      <h3 >Book Flights to Local and International Destinations</h3>
      <h5 > International Destinations</h5>      
    </div>
    
    
    
    <div className="featured">
        
           
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Dublin</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/bora-bora.jpg?w=700&h=500&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bora Bora</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://greekreporter.com/wp-content/uploads/2021/05/Santorini_island_Greece_sunny_2021_2_Credit_Dimitra_Damianidi_GR.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Santorini</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.travelingmom.com/wp-content/uploads/2018/02/Cancun.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mexico</h1>
        </div>
      </div>
    </div>
    </>
  );
}
