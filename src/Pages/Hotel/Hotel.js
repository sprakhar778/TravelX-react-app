import { NavLink } from "react-router-dom";
import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
            <button className="bookBtn">Book or Reserve Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent Location.500m from center
          </span>
          <span className="priceHighlights">
            Book a stay over 114$ at this property and get free airpot taxi
          </span>

          <div className="hotelImgContainer">
            <div className="hotelImgWraper">
              <img className="hotelImg" src="/images/traveld1.png" />
            </div>
            <div className="hotelImgWraper">
              <img className="hotelImg" src="/images/traveld2.png" />
            </div>
            <div className="hotelImgWraper">
              <img className="hotelImg" src="/images/traveld3.png" />
            </div>
            <div className="hotelImgWraper">
              <img className="hotelImg" src="/images/traveld4.png" />
            </div>
            <div className="hotelImgWraper">
              <img className="hotelImg" src="/images/traveld5.png" />
            </div>
            <div className="hotelImgWraper">
              <img className="hotelImg" src="/images/traveld6.png" />
            </div>
           
          </div>
          <div className="hotelDetails">
          <div className="hotelDetailsText">
            <h1 className="hotelTitle">stay in the heart of alias</h1>
            <p className="hotelDes">
              The Hotel Fonda Vela is located in beautiful Monteverde, famous
              for its rare and gorgeous cloud forest and friendly community. The
              views of the Gulf of Nicoya from the hotel's 4,200 foot elevation
              are spectacular. Experience Hotel Fonda Vela's natural approach to
              life with style! Surrounded by beautiful tropical gardens, our
              buildings are an attractive part of the lush, tropical
              mountainside. The rooms are cozy, yet elegant, spacious and
              comfortable. Each room is designed with the environment in mind.
              For example, large windows help to bring the outdoors inside.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for 9-night stay!</h1>
            <span> The Hotel Fonda Vela is located in beautiful Monteverde, famous
              for its rare and gorgeous cloud forest and friendly community.</span>
            <h2><b>948$</b><span id="a1">(9 nights)</span></h2>
            <button>Resevrve or Book Now!</button>
          </div>
        </div>
    
        </div>
        <MailList/>
     <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
