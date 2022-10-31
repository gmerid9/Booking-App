import { useLocation } from "react-router-dom";
import "./hotelList.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import SearchItem from "../SearchItems/SearchItems";

export default function HotelList(props) {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // const location =useLocation ()
  // const [destinations,setDestinations] =useState(location.state.destinations)
  //     const [date,setDate] =useState(location.state.date)
  return (
    <>
      <header type="lists"></header>
      <div className="=listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label> Destinations </label>
              <input type="text" />
            </div>
            <div className="listItem">
              <label> Check-in Date - Check-out date </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className=" dateSection"
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
                  className="listDate"
                />
              )}

              <FontAwesomeIcon icon={faCalendarDays} className="listIcon" />

              <div className="listItem">
                <label>Options</label>
                <div className="listOptions">
                  <div className="listOptionItem">
                    <span className="listOptionText">
                      Min Price <small>Per Night</small>
                    </span>
                    <input type="number" className="listOptionInput " />
                  </div>
                </div>
                <div className="listItem">
                  <div className="listOptionItem">
                    <span className="listOptionText">
                      Max Price <small>Per Night</small>
                    </span>
                    <input type="number" className="listOptionInput " />
                  </div>

                  <div className="listItem">
                    <div className="listOptionItem">
                      <span className="listOptionText">Adult </span>
                      <input
                        type="number"
                        min={1}
                        className="listOptionInput "
                      />
                    </div>
                  </div>

                  <div className="listItem">
                    <div className="listOptionItem">
                      <span className="listOptionText">Children </span>
                      <input
                        type="number"
                        min={0}
                        className="listOptionInput "
                      />
                    </div>
                  </div>
                </div>

                <div className="listItem">
                  <div className="listOptionItem">
                    <span className="listOptionText">Room</span>
                    <input type="number" className="listOptionInput " />
                  </div>
                </div>
              </div>
            </div>
            <button className="listSearchBtn">Search</button>
          </div>
          <h3>signed in as {props.user}</h3>
          <div className="listResult">
            
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
}
