import { useState } from "react";
import "./booking.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import './Session'
//import { Session } from "./Session";

const Booking = () => {
  const [bookingForm, setBookingForm] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);
  const [selected, setSelected] = useState();
  const [booking, setBooking] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    reason: "",
    counsellor: "",
  });

  function handleSelected(e) {}

  const { date, reason, counsellor } = formData;
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

  // handle chnage for form value
  function handlleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  //NAME OF AVAILABLE COUNSELLORS
  const counsellors = ["Lorito", "Lara", "Benon", "David"];

  //LOGIC TO DISPLAY THE LIST OF AVAILABLE COUNSELLORS
  const selectedCounsellor = counsellors.map((elem, i) => (
    <option key={i} name={elem} value={elem}>
      {elem}
    </option>
  ));

  // LOGIC TO MAP THE FORM DATA TO THE BOOKING TABLE
  const schedule = scheduleData.map((data, i) => (
    <tr key={i}>
      <td data-cell="Date">{data.date}</td>
      <td data-cell="counsellor">{data.counsellor}</td>
      <td data-cell="status">{data.status}</td>
    </tr>
  ));

  // CANCEL BUTTON FUNCTION
  function closePopup() {
    setBookingForm(false);
  }

  // BOOK AN APPOINT BUTTON
  function showBooking() {
    setBookingForm(true);
  }

  //BOOKING FUNCTION
  function handleBooking(e) {
    e.preventDefault();

    //STORING THE SELECTED DATE AS A NEW DATE INSTANCE
    const formattedDate = new Date(formData.date);

    //CHANGING DEFAULT THE DATE FORMAT
    const bookingDate = formattedDate.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    //CHANGING THE DEFAULT TIME FORMAT
    const bookingTime = formattedDate.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    //STORING THE FORM DATA (WITH THE UPDATED TIME FORMAT)
    const data = {
      date:
        (date === "" ? "" : bookingDate) +
        " " +
        (date === "" ? "" : bookingTime),
      counsellor: formData.counsellor,
      status: date === "" && counsellor === "" ? "" : "Approved",
    };

    //STORING THE CURRENT SCHEDULE DATA AND THE NEW FORM DATA IN AN ARRAY
    const newData =
      data === { date: "", counsellor: "", status: "" }
        ? [scheduleData]
        : [...scheduleData, data];

    if (date === "" && counsellor === "") {
      alert("Can't submit an empty form.");
    } else {
      //SETTING THE SCHEDULE DATA TO THE NEW ARRAY
      setScheduleData(newData);

      //DISMISSING THE BOOKING FORM
      setBookingForm(false);

      //SETTING THE BOOKING STATE FOR TABLE DISPLAY
      setBooking(true);
    }
  }

  return (
    <div className="container">
      <div className="left-sidebar">
        <button type="button" className="app-btn" onClick={showBooking}>
          Book an appointment
        </button>
        {bookingForm && (
          <div className="popup-form" id="popup">
            <form onChange={handlleChange} onSubmit={handleBooking}>
              <span>Make appointment</span>
              <div className="date-Picker ">
                <input
                  id="datee"
                  type="datetime-local"
                  name="date"
                  required
                  placeholder="Select DateTime"
                />
              </div>
              <div className="input-group">
                <textarea
                  id="issue"
                  name="reason"
                  rows="8"
                  placeholder="Reason for appointment"
                  required
                ></textarea>
                {/* <label htmlFor="issue">Your issue</label> */}
              </div>
              <div className="dropdown">
                {/* <label htmlFor="therapist">therapist</label> */}
                <select
                  onChange={(e) => setSelected(e.target.value)}
                  id="therapist"
                  name="counsellor"
                  value={selected}
                  required
                >
                  <option value=""> Select Counsellor</option>
                  {/* LIST OF COUNSELLORS */}
                  {selectedCounsellor} 
                 
                </select>
              </div>
              <div className="popup-form-btnContainer">
                <button
                  className="cancel-btn"
                  type="submit"
                  onClick={closePopup}
                >
                  CANCEL
                </button>
                <button
                  className="submit-btn"
                  type="submit"
                  onClick={handleBooking}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      {booking && (
        <div className="right-sidebar1">
          <div className="wrapper">
            <div className="table-container">
              <table>
                <caption>Booking details</caption>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>counsellor</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                
              {/* BOOKING DETAILS */}
                  {schedule}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
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
