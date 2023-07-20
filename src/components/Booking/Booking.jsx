import { useState } from "react";
import "./booking.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import './Session'
//import { Session } from "./Session";




const Booking = () => {
  let scheduledData = [
    {
      date: "02/07/2023-08:00am",
      counsellor: "Lorito",
      status: "Approved",
    },
  ];
  // const scheduledData = localStorage.getItem("Booking")
  //   ? [localStorage.getItem("Booking")]
  //   : [
  //       {
  //         // date: "02/07/2023-08:00am",
  //         counsellor: "Lorito",
  //         status: "Approved",
  //       },
  //     ];

  const [bookingForm, setBookingForm] = useState(false);
  const [scheduleData, setScheduleData] = useState(scheduledData);
  const [selected, setSelected] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    reason: "",
    counsellor: "",
  });

  // console.log( scheduleData.map(e => e));

  // console.log(formData);
  // console.log(selectedDate);

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
  function handlleChange(e) {
    const { name, value } = e.target;

    // console.log(e.target.name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  //NAME OF AVAILABLE COUNSELLORS
  const counsellors = ["Lorito", "Lara", "Benon", "David"];

  //LOGIC TO DISPLAY THE LIST OF AVAILABLE COUNSELLORS
  const selectedCounsellor = counsellors.map((elem, i) => (
    // <select id="therapist" required>
    <option key={i} name={elem} value={elem}>
      {elem}
    </option>
    // </select>
  ));

  const selectOptions = (
    <select id="therapist" required>
      {selectedCounsellor}
    </select>
  );

  // let scheduleData = [
  //   {
  //     // date: "02/07/2023-08:00am",
  //     counsellor: "Lorito",
  //     status: "Approved",
  //   },
  // ];

  const schedule = scheduleData.map((data, i) => (
    <tr key={i}>
      <td data-cell="Date">{data.date}e</td>
      <td data-cell="counsellor">{data.counsellor}</td>
      <td data-cell="status">{data.status}</td>
    </tr>
  ));

  function closePopup() {
    setBookingForm(false);
  }

  function showBooking() {
    setBookingForm(true);
  }

  function handleBooking(e) {
    e.preventDefault();
    // scheduleData.push({
    //   // date: selectedDate,
    //   // reason: formData.reason,
    //   counsellor: formData.counsellor,
    //   status: "",
    // });

    const data = {
      // date: selectedDate,
      // reason: formData.reason,
      counsellor: formData.counsellor,
      status: "Pending",
    };
    setBookingForm(false);
    //  scheduleData.push(data)

    // if(localStorage.getItem("Booking")) {

    // }
    scheduledData.push(data);
    console.log(scheduleData);
    console.log(formData.counsellor);
  }
  console.log(Array.isArray(scheduleData));

  function handleDate(e) {
    console.log();
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
                {/* <input
                id="datee"
                  type="datetime-local"
                  name="date"
                  required
                  placeholder="Select DateTime"
                  onChange={handleDate}
                  
                /> */}
                <DatePicker
                  name="date"
                  // className="date-Picker"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  // value={selectedDate}
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
                  {/* <option value="therapist"> Select Counsellor</option> */}
                  {selectedCounsellor}
                  {/* <option name="Lorito" value={counsellor}>
                    Lorito
                  </option>
                  <option name="Lara" value={counsellor}>
                    Lorito
                  </option>
                  <option name="Benon" value={counsellor}>
                    Lorito
                  </option>
                  <option name="David" value={counsellor}>
                    Lorito
                  </option> */}
                </select>
              </div>
              <div className="popup-form-btnContainer">
                <button type="submit" onClick={closePopup}>
                  CANCEL
                </button>
                <button type="submit" onClick={handleBooking}>
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
              <thead>
                <tr>
                  <th>Date</th>
                  <th>counsellor</th>
                  {/* <th>none</th> */}
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                <td data-cell="Date">02/07/2023-08:00am</td>
                <td data-cell="counsellor">Lorito</td>
                <td data-cell="none">none</td>
                <td data-cell="status">approved</td>
              </tr> */}
                {schedule}
              </tbody>
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
