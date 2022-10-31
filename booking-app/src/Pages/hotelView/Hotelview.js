import "./hotelview.css"
import Header from "../../Components/Header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function HotelView (props) {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
  
    const photos = [
      {
        src: "https://media.gettyimages.com/photos/digital-render-of-large-hotel-suite-bedroom-picture-id1334117334",
      },
      {
        src: "https://media.gettyimages.com/photos/modern-bedroom-interior-picture-id1165298383?k=20&m=1165298383&s=612x612&w=0&h=bljP9mU56hMSSUlnWQNP_PRGdmJctIIm6etlLz1rPaA=",
      },
      {
        src: "https://media.gettyimages.com/photos/large-bathroom-interior-in-3d-picture-id1266155640?k=20&m=1266155640&s=612x612&w=0&h=B5Xq1YV5lZf5sKZJe_1ZXM_urBIE315KrHMbK730BWY=",
      },
      {
        src: "https://media.gettyimages.com/photos/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-picture-id1370825295?s=2048x2048",
      },
      {
        src: "https://media.gettyimages.com/photos/breakfast-in-hotel-room-picture-id154945734?s=2048x2048",
      },
      {
        src: "https://media.gettyimages.com/photos/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-picture-id1370825295?k=20&m=1370825295&s=612x612&w=0&h=wUGuhqVSA6wtZOsSzzxzPIyM-GlBNjUwh-LH5iae6O0=",
      },
    ];
  
    const handleOpen = (i) => {
      setSlideNumber(i);
      setOpen(true);
    };
  
    const handleMove = (direction) => {
      let newSlideNumber;
  
      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }
  
      setSlideNumber(newSlideNumber)
    };
       return (
         <div>
           <Header />

           <div className="hotelContainer">
             {open && (
               <div className="slider">
                 <FontAwesomeIcon
                   icon={faCircleXmark}
                   className="close"
                   onClick={() => setOpen(false)}
                 />
                 <FontAwesomeIcon
                   icon={faCircleArrowLeft}
                   className="arrow"
                   onClick={() => handleMove("l")}
                 />
                 <div className="sliderWrapper">
                   <img
                     src={photos[slideNumber].src}
                     alt=""
                     className="sliderImg"
                   />
                 </div>
                 <FontAwesomeIcon
                   icon={faCircleArrowRight}
                   className="arrow"
                   onClick={() => handleMove("r")}
                 />
               </div>
             )}
             <div className="hotelWrapper">
               <button className="bookNow"> Book Now!</button>
               <h1 className="hotelTitle">Landmark Hotel </h1>
               <div className="hotelAddress"></div>
               <span className="hotelDistance">
                 Excellent location 50 miles from City center
               </span>
               <span className="hotelPriceHighlight">
                 Book a stay over $200 at this property and get a free airport
                 taxi
               </span>
               <div className="hotelImages">
                 {photos.map((photo, i) => (
                   <div className="hotelImgWrapper" key={i}>
                     <img
                       onClick={() => handleOpen(i)}
                       src={photo.src}
                       alt=""
                       className="hotelImg"
                     />
                   </div>
                 ))}
               </div>
               <div className="hotelDetails">
                 <div className="hotelDetailsTexts">
                   <h1 className="hotelTitle">City Center Location</h1>
                   <p className="hotelDesc">
                     Located 10 minute walk from city center,accomdations
                     inculded air conditioning and free WiFi. The units come
                     with hardwood floors, a flat-screen TV, and a private
                     bathroom with shower and a hairdryer. A fridge is also
                     offered,.All studios and apartments at this aparthotel come
                     with a fully equipped kitchen with a stove, microwave,
                     fridge and dishwasher. The apartment features a dining area
                     and a seating area with adjustable furniture and an LCD TV.
                     The aparthotel is serviced by a elevator.
                   </p>
                 </div>
                 <div className="hotelDetailsPrice">
                   <h1>Perfect for a 7-night stay!</h1>
                   <span>
                     Located in the City Center, this property has an excellent
                     location score of 9.8!
                   </span>
                   <h2>
                     <b>$945</b> (7nights)
                   </h2>
                   <button> Book Now!</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       );
      };
  