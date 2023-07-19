import { useState } from "react";
import "./booking.css";
// import './Session'
//import { Session } from "./Session";
const Booking = () => {
  const [bookingForm, setBookingForm] = useState(false);

  //   function settingsMenuToggle() {
  //   let settingsMenu = document.querySelector(".popup-form");
  //   settingsMenu.classList.toggle(".openpopup");
  // }
  // function openPopup() {
  //   let popup = document.querySelector(".popup-form");
  //   popup.classList.toggle("open-Popup");
  // }

  // function openPopup(){
  //   let popup = document.getElementById("popup-form")
  //   popup.classList.add("open-Popup")
  // }
  // function closePopup() {
  //   let popup = document.getElementById("popup-form")
  //   popup.classList.remove("open-Popup")
  // }
  let popup = document.querySelector(".popup-form");
  // function openPopup() {
  //   popup.classList.add("open-popup");
  // }
  // function closePopup() {
  //   popup.classList.remove("open-popup");
  // }

  function closePopup() {
    
  }



  function showBooking() {
    setBookingForm(true);
  }

  return (
    <div className="container">
      <div className="left-sidebar">
        <button type="button" className="app-btn" onClick={showBooking}>
          Make appointment
        </button>
        {bookingForm && (
          <div className="popup-form" id="popup">
            <form>
              <span>Make appointment</span>
              <div className="input-group">
                <input
                  type="datetime-local"
                  required
                  placeholder="Select DateTime"
                />
              </div>
              <div className="input-group">
                <textarea id="issue" rows="8" required></textarea>
                <label htmlFor="issue">Your issue</label>
              </div>
              <div className="dropdown">
                {/* <label htmlFor="therapist">therapist</label> */}
                <select id="therapist" required>
                  <option value="therapist"> Select Therapist</option>
                  <option value="Lorito">Lorito</option>
                </select>
              </div>
              <div className="popup-form-btnContainer">
                <button type="submit" onClick={closePopup}>
                  CANCEL
                </button>
                <button type="submit" onClick={closePopup}>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="right-sidebar1">
        <div className="wrapper">
          <div className="table-container">
            <table>
              <caption>Scheduled Sessions</caption>
              <tr>
                <th>Date</th>
                <th>counsellor</th>
                <th>none</th>
                <th>status</th>
              </tr>
              <tr>
                <td data-cell="Date">02/07/2023-08:00am</td>
                <td data-cell="counsellor">Lorito</td>
                <td data-cell="none">none</td>
                <td data-cell="status">approved</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <script>
        {/* let popup = document.querySelector(".popup-form")
        function openPopup(){
          popup.classList.add("open-popup")
        }
        function closePopup(){
          popup.classList.remove("open-popup")
        } */}
      </script>
      {/* <script src="booking.js"></script> */}
    </div>
  );
};

export default Booking;
