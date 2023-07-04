
const Landing = () => {
  return (
    <div className="body">
      {/* <Navbar /> */}
      <div className="main-body">
        <div className="welcome">
          <h1>Welcome</h1>
          <p>
            to a safe space dedicated to nurturing your mental well-being and
            guiding you towards a healthier, happier life. We understand that
            mental health is an essential aspect of overall wellness, and our
            mission is to provide you with the support and resources you need to
            flourish.
          </p>
          <a href="/About">Learn more</a>
        </div>
        <div className="image-container">
          <img
            className="body-image"
            src="../src/images/mental-health.jpg"
            alt="depression"
          />
        </div>
      </div>

      <main>
        <div className="review">
          <p>Testimonials</p>
        </div>
        <div className="review-container">
          <div className="emily">
            <img src="./src/images/review/emily.jpg" alt="portait" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ullam distinctio pariatur sint obcaecati, dolor quidem
              omnis voluptatum rem explicabo. Odit rem iste vel cum quod,
              blanditiis autem nobis sunt!
            </p>
            <h5>Emily</h5>
          </div>
          <div className="thomas">
            <img src="./src/images/review/thomas.jpg" alt="portait" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ullam distinctio pariatur sint obcaecati, dolor quidem
              omnis voluptatum rem explicabo. Odit rem iste vel cum quod,
              blanditiis autem nobis sunt!
            </p>
            <h5>Thomas</h5>
          </div>
          <div className="jennie">
            <img src="./src/images/review/jennie.jpg" alt="portait" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ullam distinctio pariatur sint obcaecati, dolor quidem
              omnis voluptatum rem explicabo. Odit rem iste vel cum quod,
              blanditiis autem nobis sunt!
            </p>
            <h5>Jennie</h5>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Mending Minds. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing