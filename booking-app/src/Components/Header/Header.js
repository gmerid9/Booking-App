import "./header.css";
import { faBed,faCalendarDay,faPerson,} from "@fortawesome/free-solid-svg-icons";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link, useNavigate } from "react-router-dom";
import { Children, useState } from "react";
import { format } from "date-fns";

export default function Header(props) {
  const [openDate, setOpenDate] = useState(false);
  const [destinations, setDestinations] = useState("")

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
 
  const navigate = useNavigate ()


  const handelSearch = () => {
    
    navigate("/reservation", {state:{destinations,date}});

  }

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <Link to="/hotels" className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Hotels</span>
            </Link>
            <div className="headerListItem ">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Destinations</span>
            </div>
          </div>
          <h1 className="headerTitle">Save big on your next travel</h1>
          <p className="headerdescription">
            Everything you need in one place - low-priced hotels and  attractions to
            vist 
          </p>
            
          <div className="headerSearch">
            <div className="searchItem">
              <FontAwesomeIcon className="headerIcon" icon={faBed} />
              <input
                className="searchInputNew"
                type="text"
                placeholder="Destinations"
                onChange={e=>setDestinations(e.target.value)}
              />
            </div>
            <div className="searchItem">
              <FontAwesomeIcon className="headerIcon" icon={faCalendarDay} />
              <span 
                onClick={() => setOpenDate(!openDate)}
                className="searchText"
              >
                {" "}
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}{" "}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
           
            <div className="searchItem">
              <button className="searchBtn" onClick={handelSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
