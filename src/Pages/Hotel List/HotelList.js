import Navbar from "../../Components/Navbar/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import "./HotelList.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SearchItem/SearchItem";
const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="lsContainer">
        <div className="lsWrapper">
          <div className="lsSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} className="lsInput" />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            </div>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
            <div className="lsItem">
              <label>Option</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
             
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.adult}
                    min={1}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.children}
                    min={0}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rooms</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <div >
                <button className="searchBtn">Search</button>
            </div>
          </div>

          <div className="lsResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
