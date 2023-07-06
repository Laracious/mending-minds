// import React from 'react'
import "./blog.css";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog Title",
      description: "Feeling lonely from time to time is natural and not uncommon. If you feel lonely, reaching out to loved ones and practicing self-compassion can help you overcome loneliness.",
      coverImg:"https://th.bing.com/th/id/R.8880c351f84f98068790b83dc6544397?rik=m3Px%2fW8EEkmrMw&pid=ImgRaw&r=0",
      links:"https://www.who.int/teams/mental-health-and-substance-use/world-mental-health-report",
      pageAuthor: "World Health Organization",
    },
    {
      id: 2,
      title: "World Health Report",
      description:"Feeling lonely from time to time is natural and not uncommon. If you feel lonely, reaching out to loved ones and practicing self-compassion can help you overcome loneliness.",
      coverImg:
        "https://th.bing.com/th/id/R.8880c351f84f98068790b83dc6544397?rik=m3Px%2fW8EEkmrMw&pid=ImgRaw&r=0",
      links: "https://psychcentral.com/health/stop-feeling-lonely",
    },
    {
      id: 3,
      title: "Blog Title",
      description: "Lorem Ipsum has been published recently in the blog",
      coverImg:
        "https://th.bing.com/th/id/R.8880c351f84f98068790b83dc6544397?rik=m3Px%2fW8EEkmrMw&pid=ImgRaw&r=0",
      links: "https://psychcentral.com/health/stop-feeling",
    },
    {
      id: 4,
      title: "Blog Title",
      description:
        "Feeling lonely from time to time is natural and not uncommon. If you feel lonely, reaching out to loved ones and practicing self-compassion can help you overcome loneliness.",
      coverImg:
        "https://th.bing.com/th/id/R.8880c351f84f98068790b83dc6544397?rik=m3Px%2fW8EEkmrMw&pid=ImgRaw&r=0",
      links: "https://psychcentral.com/health/stop-feeling",
    },
  ];

  return (
    <div className="blog">
      <div className="header"><h2>Blog Post</h2></div>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-item">
            <img src={blog.coverImg} />
            <div blog-text>
              <h3 className="title">{blog.title}</h3>
              <a href={blog.links}>The Best Mental Health Blogs of 2021</a>
              <p>{blog.description}</p>
            </div>
          </div>

        ))}
      {/* <div className="side-bar">
          <img src="./src/images/mental-health.webp" alt="" />
      </div> */}
      </div>
    </div>
  );
};

export default Blog;
