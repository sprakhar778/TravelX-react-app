import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom"
import "./Header.css";
import {
  faBed,
  faTaxi,
  faPlane,
  faCar,
  faCalendarCheck,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
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
  const navigate=useNavigate()
  const searchHandler =()=>
  {
      navigate('/hotels', {state:{destination,date,option}})
  }
  const handleOption = (name, operation) => {
    setOption((option) => {
      //important :object me attribute add karne ka tarika.
      return {
        ...option,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
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
        { type !=="list" &&
          <>
            <h1 className="headerTitle">
              A lifetime of discounts?It's Genius.{" "}
            </h1>
            <p className="headerInfo">
              Get rewards for your travels-save upto 10% with TravelX gift cards
            </p>
            <button className="headerButton">SignIn/Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} />
                <input
                  className="headerSearchInput"
                  placeholder="Where are you going?"
                  type="text"
                  onChange={(e)=>setDestination(e.target.value)}


                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchInput"
                >{`${format(date[0].startDate, "dd/MM/yyyy")}  to  ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )} `}</span>
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
                >{`Adults ${option.adult} . Children ${option.children} . Room ${option.room}.`}</span>
              </div>
              {openOption && (
                <div className="option">
                  <div className="optionItem">
                    <span className="optionText">Adults</span>
                    <div className="optionCounter">
                      <button
                        disabled={option.adult <= 1}
                        className="optionCounterBtn"
                        onClick={() => {
                          handleOption("adult", "d");
                        }}
                      >
                        -
                      </button>
                      <span className="optionCounterValue">{option.adult}</span>
                      <button
                        className="optionCounterBtn"
                        onClick={() => {
                          handleOption("adult", "i");
                        }}
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
                        onClick={() => {
                          handleOption("children", "d");
                        }}
                      >
                        -
                      </button>
                      <span className="optionCounterValue">
                        {option.children}
                      </span>
                      <button
                        className="optionCounterBtn"
                        onClick={() => {
                          handleOption("children", "i");
                        }}
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
                        onClick={() => {
                          handleOption("room", "d");
                        }}
                      >
                        -
                      </button>
                      <span className="optionCounterValue">{option.room}</span>
                      <button
                        className="optionCounterBtn"
                        onClick={() => {
                          handleOption("room", "i");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <button className="headerSearchBtn" onClick={searchHandler}>Search</button>
            </div>
          </>
        }
      </div>
    </div>
  );
};
export default Header;
