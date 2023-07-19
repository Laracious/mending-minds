// import React from 'react'
import "./blog.css";

const Blog = () => {
  return (
    <div>
      <div id="blog">
        <div className="blog-heading">
          <h3>Blog Post </h3>
        </div>
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img
                src="https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924_1280.jpg"
                alt="man"
              />
            </div>
            <div className="blog-text">
              <span>September 21, 2022 / Depression</span>
              <a
                href="https://psychcentral.com/health/stop-feeling-lonely"
                className="blog-title"
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

          <div className="blog-box">
            <div className="blog-img">
              <img
                src="https://cdn.pixabay.com/photo/2019/03/18/17/29/fantasy-4063619_1280.jpg"
                alt="empty"
              />
            </div>
            <div className="blog-text">
              <span>June 30, 2023 / Loneliness</span>
              <a
                href="https://psychcentral.com/health/stop-feeling-lonely"
                className="blog-title"
              >
                Practical tips to overcome loneliness
              </a>
              <p>
                Feeling lonely from time to time is natural and not uncommon. If
                you feel lonely, reaching out to loved ones and practicing
                self-compassion can help you overcome loneliness.
              </p>
              <a href="https://psychcentral.com/health/stop-feeling-lonely">
                Read more
              </a>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img
                src="https://cdn.pixabay.com/photo/2021/05/14/12/26/man-6253257_1280.jpg"
                alt="woman"
              />
            </div>
            <div className="blog-text">
              <span>May 18, 2020 / Anxiety</span>
              <a
                href="https://psychcentral.com/health/stop-feeling-lonely"
                className="blog-title"
              >
                {" "}
                Why Anxiety Should Not Be Feared
              </a>
              <p>
                {" "}
                What we know is we want the feeling to go away, and we’ll do
                almost anything to get rid of the feeling – avoid studying for
                the test, cancel the date, skip the check-up.
              </p>
              <a href="https://psychcentral.com/health/stop-feeling-lonely">
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          &copy; <span class="data"> {new Date().getFullYear()}</span> Mending
          Mind. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Blog;

// const blogs = [
//   {
//     id: 1,
//     title: "Blog Title",
//     description:
//       "Feeling lonely from time to time is natural and not uncommon. If you feel lonely, reaching out to loved ones and practicing self-compassion can help you overcome loneliness.",
//     coverImg:
//       "https://th.bing.com/th/id/R.8880c351f84f98068790b83dc6544397?rik=m3Px%2fW8EEkmrMw&pid=ImgRaw&r=0",
//     links:
//       "https://www.who.int/teams/mental-health-and-substance-use/world-mental-health-report",
//     pageAuthor: "World Health Organization",
//   },
//   {
//     id: 2,
//     title: "World Health Report",
//     description:
//       "Feeling lonely from time to time is natural and not uncommon. If you feel lonely, reaching out to loved ones and practicing self-compassion can help you overcome loneliness.",
//     coverImg:
//       "https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_1280.png",
//     links: "https://psychcentral.com/health/stop-feeling-lonely",
//   },
//   {
//     id: 3,
//     title: "Blog Title",
//     description: "Lorem Ipsum has been published recently in the blog",
//     coverImg:
//       "https://cdn.pixabay.com/photo/2022/09/01/15/37/broken-heart-7425755_1280.png",
//     links: "https://psychcentral.com/health/stop-feeling",
//   },
//   {
//     id: 4,
//     title: "Blog Title",
//     description:
//       "Feeling lonely from time to time is natural and not uncommon. If you feel lonely, reaching out to loved ones and practicing self-compassion can help you overcome loneliness.",
//     coverImg:
//       "https://cdn.pixabay.com/photo/2014/09/13/22/25/medicine-wheel-444550_1280.jpg",
//     links: "https://psychcentral.com/health/stop-feeling",
//   },
// ];
