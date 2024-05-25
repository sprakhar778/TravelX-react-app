import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { 
  faBed, 
  faTaxi, 
  faCar, 
  faCalendarDays, 
  faPerson, 
  faHome, 
  faHotel 
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();

  const searchHandler = () => {
    navigate('/hotels', { state: { destination, date, option } });
  }

  const handleOption = (name, operation) => {
    setOption((prevOption) => {
       //important :object me attribute add karne ka tarika.
      return {
        ...prevOption,
        [name]: operation === "i" ? prevOption[name] + 1 : prevOption[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerItems active">
            <FontAwesomeIcon icon={faHome} />
            <span onClick={() =>   navigate('/', { state: { destination, date, option } })} >Home</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faHotel} />
            <span onClick={() =>   navigate('/hotels', { state: { destination, date, option } })}> Hotel List</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== "list" &&
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerInfo">
              Get rewards for your travels - save up to 10% with TravelX gift cards.
            </p>
            <button className="headerButton">Sign In/Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} />
                <input
                  className="headerSearchInput"
                  placeholder="Where are you going?"
                  type="text"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchInput"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    className="date"
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} />
                <span
                  onClick={() => setOpenOption(!openOption)}
                >
                  {`Adults ${option.adult} . Children ${option.children} . Room ${option.room}`}
                </span>
                {openOption && (
                  <div className="option">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.adult <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterValue">{option.adult}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.children <= 0}
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterValue">{option.children}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.room <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterValue">{option.room}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="headerSearchBtn" onClick={searchHandler}>Search</button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
