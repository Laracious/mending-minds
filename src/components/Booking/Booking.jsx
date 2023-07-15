import "./booking.css";
// import './Session'
//import { Session } from "./Session";
const Booking = () => {

  function settingsMenuToggle() {
  let settingsMenu = document.querySelector(".settings-menu");
  settingsMenu.classList.toggle("settings-menu-height");
}


  return (
    <div className="container">
      <div className="left-sidebar">
        <div className="imp-links">
          <a href="booking.html">
            <img src="./images/download (1).png" />
            Book a session
          </a>
        </div>
        <div className="shortcut-links">
          <p>sessions</p>

          <a href="#">
            <img src="./images/schedule.png" />
            scheduled sessions
          </a>
        </div>
      </div>
      <div className="right-sidebar1">
        <div className="counsellor">
          <div className="counsellor-img" onClick={settingsMenuToggle}>
              <img
                src="images/therapist1.webp"
              />
          </div>
          <div className="counsellor-text" onClick={settingsMenuToggle}>
              <div className="book-button">
                <img src="images/book.png" />
              </div>
              
              <span>September 21, 2022 / Depression</span>
              <p>
                I am Lorito,
                My advice for dealing with multiple mental health conditions is
                to prioritize which one needs your attention at the moment.
              </p>
              <a href="https://psychcentral.com/health/stop-feeling-lonely">
                Read more
              </a>
          </div>
        </div>
        {/* <div class="icons" onClick={settingsMenuToggle}>
                <img src="images/first.jpeg" />
        </div> */}
        <div class="settings-menu" onClick={settingsMenuToggle}>
              <div class="settings-menu-inner">
                <div class="user-profile">
                  <img src="images/therapist1.webp" />
                  <div>
                    <p>Book with Lorito</p>
                  </div>
                </div>
                <br />
                <div class="user-profile">
                  <img src="images/date.jpeg" />
                  <div className="date">
                    <div className="date-content">
                        <ul>09/08/2023</ul>
                        <ul>09/06/2023</ul>
                    </div>
                    <p>Choose a date</p>
                    <a href="#">when?</a>
                  </div>
                </div>
                <br />
                <div class="user-profile">
                  <img src="images/book.png" />
                  <div>
                    <p>BOOKING</p>
                  </div>
                </div>
                <br />
                <div class="setting-links">
                  <img src="images/setting.png" class="settings-icon" />
                  <a href="#">
                    Settings & Privacy{" "}
                    <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
                <div class="setting-links">
                  <img src="images/help.png" class="settings-icon" />
                  <a href="#">
                    Help & Support <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
                <div class="setting-links">
                  <img src="images/logout2.png" class="settings-icon" />
                  <a href="#">
                    Logout <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
              </div>
            </div>

      </div>
      <div className="right-sidebar1">
        <div className="counsellor">
          <div className="counsellor-img" onClick={settingsMenuToggle}>
              <img
                src="images/therapist2.webp"
              />
          </div>
          <div className="counsellor-text" >
              <span>September 21, 2022 / Depression</span>
              <a
                href="https://psychcentral.com/health/stop-feeling-lonely"
                className="counsellor-title"
              >
                How I Deal With My Depression
              </a>
              <p>
                My advice for dealing with multiple mental health conditions is
                to prioritize which one needs your attention at the moment.
              </p>
              <a href="https://psychcentral.com/health/stop-feeling-lonely">
                Read more
              </a>
          </div>
        </div>

        <div class="settings-menu">
              <div class="settings-menu-inner">
                <div class="user-profile">
                  <img src="images/therapist1.webp" />
                  <div>
                    <p>Book with Lorito</p>
                    <a href="#">Where?</a>
                  </div>
                </div>
                <br />
                <div class="user-profile">
                  <img src="images/date.jpeg" />
                  <div>
                    <p>Choose a date</p>
                    <a href="#">when?</a>
                  </div>
                </div>
                <br />
                <div class="user-profile">
                  <img src="images/book.png" />
                  <div>
                    <p>BOOKING</p>
                  </div>
                </div>
                <br />
                <div class="setting-links">
                  <img src="images/setting.png" class="settings-icon" />
                  <a href="#">
                    Settings & Privacy{" "}
                    <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
                <div class="setting-links">
                  <img src="images/help.png" class="settings-icon" />
                  <a href="#">
                    Help & Support <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
                <div class="setting-links">
                  <img src="images/logout2.png" class="settings-icon" />
                  <a href="#">
                    Logout <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
              </div>
            </div>

      </div>
      {/* <div class="right-sidebar">
        <div class="post-container">
          <div class="post-row">
            <div class="user-profile">
              <div class="icons" onClick={settingsMenuToggle}>
                <img src="images/first.jpeg" />
              </div>

              <div>
                <p>Kamuwe</p>
                <span>july 8 2023, 7:42 am</span>
              </div>
            </div>
            <div class="settings-menu">
              <div class="settings-menu-inner">
                <div class="user-profile">
                  <img src="images/first.jpeg" />
                  <div>
                    <p>Book with Lorito</p>
                    <a href="#">Where?</a>
                  </div>
                </div>
                <br />
                <div class="user-profile">
                  <img src="images/date.jpeg" />
                  <div>
                    <p>Choose a date</p>
                    <a href="#">when?</a>
                  </div>
                </div>
                <br />
                <div class="user-profile">
                  <img src="images/book.png" />
                  <div>
                    <p>BOOKING</p>
                  </div>
                </div>
                <br />
                <div class="setting-links">
                  <img src="images/setting.png" class="settings-icon" />
                  <a href="#">
                    Settings & Privacy{" "}
                    <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
                <div class="setting-links">
                  <img src="images/help.png" class="settings-icon" />
                  <a href="#">
                    Help & Support <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
                <div class="setting-links">
                  <img src="images/logout2.png" class="settings-icon" />
                  <a href="#">
                    Logout <img src="images/arrow.png" width="10px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Booking