
const Landing = () => {
  return (
    <div className="landing-page">
      <section className="landing">
        <div className="landing-content">
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
        <div className="landing-image">
          <img src="./images/mental-health.jpg" alt="" />
        </div>
      </section>
      <main>
        <div className="review">
          <p>Testimonials</p>
        </div>
        <div className="review-container">
          <div className="thomas">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg"
              alt="portait"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ullam distinctio pariatur sint obcaecati, dolor quidem
              omnis voluptatum rem explicabo. Odit rem iste vel cum quod,
              blanditiis autem nobis sunt!
            </p>
            <h5>Thomas</h5>
          </div>
          <div className="emily">
            <img
              src="https://cdn.pixabay.com/photo/2018/05/06/03/39/woman-3377839_1280.jpg"
              alt="portait"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ullam distinctio pariatur sint obcaecati, dolor quidem
              omnis voluptatum rem explicabo. Odit rem iste vel cum quod,
              blanditiis autem nobis sunt!
            </p>
            <h5>Emily</h5>
          </div>
          <div className="jennie">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg"
              alt="portait"
            />
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
        <p>&copy; 2023 Mending Mind. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
