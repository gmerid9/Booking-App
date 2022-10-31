import  "./searchItem.css";
import { Link } from "react-router-dom";

export default function SearchItem (props) {
    return (
        <div className="searchItemhotels">
        <img
          src="https://media.gettyimages.com/photos/standard-hotel-room-in-a-luxury-hotel-in-moscow-picture-id1207490255?s=612x612"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Landmark Hotel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
             Air conditioning
          </span>
          <span className="siFeatures">
            Entire Room • 1 bathroom  Full Bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.5</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$200</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to="/hoteldetail">
             <button className="siCheckButton">See availability</button>
            </Link>
           
          </div>
        </div>
      </div>
    );
  };
