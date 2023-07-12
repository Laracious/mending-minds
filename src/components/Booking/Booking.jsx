import "./booking.css";
// import './Session'
import { Session } from "./Session";
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
      {/* <div className="right-sidebar">
        <div className="story-gallery">
          <div className="story s1">
            <img src="./images/post.png" />
            <p>My story</p>
          </div>
          <div className="story s2">
            <img src="./images/second.jpeg" />
            <p>hassan</p>
          </div>
          <div className="story s3">
            <img src="./images/third.jpeg" />
            <p>Millan</p>
          </div>
          <div className="story s4">
            <img src="./images/fourth.jpeg" />
            <p>Ochuwe</p>
          </div>
          <div className="story s5">
            <img src="./images/fifth.jpeg" />
            <p>khan</p>
          </div>
        </div>
        <div className="wirte-post-container">
          <div className="user-profile">
            <img src="./images/first.jpeg" />
            <div>
              <p>Kamuwe</p>
              <small>Public</small>
            </div>
          </div>

          <div className="post-input-container">
            <textarea rows="3" placeholder="Share your story"></textarea>
            <div className="add-post-links">
              <a href="#">
                <img src="./images/video.jpeg" />
                Live video
              </a>
              <a href="#">
                <img src="./images/photo.jpeg" />
                Photo/video
              </a>
              <a href="#">
                <img src="./images/emoji.png" />
                Feeling activity
              </a>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src="./images/first.jpeg" />
              <div>
                <p>Kamuwe</p>
                <span>july 8 2023, 7:42 am</span>
              </div>
            </div>
          </div>

          <div>
            <p className="post-text">
              Hi am happy to share that mending-minds has been helping me to
              cope with my mental problems for that reason i have decided to
              help others who have the same problem as me
            </p>
            <img src="./images/story.jpeg" className="post-img" />

            <div className="post-row">
              <div className="activity-icons">
                <div>
                  <img src="./images/like.png" />
                  120
                </div>
                <div>
                  <img src="./images/comment.jpg" />
                  30
                </div>
                <div>
                  <img src="./images/share2.jpeg" />
                  23
                </div>
              </div>
              <div className="post-profile-icon">
                <img src="./images/first.jpeg" />
              </div>
            </div>
          </div>
        </div>

        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src="./images/first.jpeg" />
              <div>
                <p>Kamuwe</p>
                <span>july 8 2023, 7:42 am</span>
              </div>
            </div>
          </div>

          <div>
            <p className="post-text">
              Hi am happy to share that mending-minds has been helping me to
              cope with my mental problems for that reason i have decided to
              help others who have the same problem as me
            </p>
            <img src="images/therapy1.jpeg" className="post-img" />

            <div className="post-row">
              <div className="activity-icons">
                <div>
                  <img src="./images/like.png" />
                  120
                </div>
                <div>
                  <img src="./images/comment.jpg" />
                  30
                </div>
                <div>
                  <img src="./images/share2.jpeg" />
                  23
                </div>
              </div>
              <div className="post-profile-icon">
                <img src="./images/first.jpeg" />
              </div>
            </div>
          </div>
        </div>

        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src="./images/first.jpeg" />
              <div>
                <p>Kamuwe</p>
                <span>july 8 2023, 7:42 am</span>
              </div>
            </div>
          </div>

          <div>
            <p className="post-text">
              Hi am happy to share that mending-minds has been helping me to
              cope with my mental problems for that reason i have decided to
              help others who have the same problem as me
            </p>
            <img src="./images/therapy2.jpeg" className="post-img" />

            <div className="post-row">
              <div className="activity-icons">
                <div>
                  <img src="./images/like.png" />
                  120
                </div>
                <div>
                  <img src="./images/comment.jpg" />
                  30
                </div>
                <div>
                  <img src="./images/share2.jpeg" />
                  23
                </div>
              </div>
              <div className="post-profile-icon">
                <img src="./images/first.jpeg" />
              </div>
            </div>
          </div>
        </div>

        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src="./images/first.jpeg" />
              <div>
                <p>Kamuwe</p>
                <span>july 8 2023, 7:42 am</span>
              </div>
            </div>
          </div>

          <div>
            <p className="post-text">
              Hi am happy to share that mending-minds has been helping me to
              cope with my mental problems for that reason i have decided to
              help others who have the same problem as me
            </p>
            <img src="./images/therapy3.jpeg" className="post-img" />

            <div className="post-row">
              <div className="activity-icons">
                <div>
                  <img src="./images/like.png" />
                  120
                </div>
                <div>
                  <img src="./images/comment.jpg" />
                  30
                </div>
                <div>
                  <img src="./images/share2.jpeg" />
                  23
                </div>
              </div>
              <div className="post-profile-icon">
                <img src="./images/first.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Session /> */}

      <div class="right-sidebar">
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

                {/* <!-- <a href="#"><i class="fas fa-ellipsis-v"></i></a>  --> */}
              </div>

              <div>
                <p class="post-text">
                  Hi my name is Lorito i am 29 years old and i am a specialized
                  therapist I have been giving therapy sessions for 6 years and
                  i am not a disappointment{" "}
                </p>

                <img src="images/story.jpeg" class="post-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking