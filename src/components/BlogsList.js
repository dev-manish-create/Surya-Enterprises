// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./BlogsList.css";

// const BlogsList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/blogs/get")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data && data.data) {
//           // Sort blogs by creation date (latest first)
//           const sortedBlogs = data.data.sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );
//           setBlogs(sortedBlogs);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching blogs:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div className="loading">Loading blogs...</div>;
//   if (blogs.length === 0) return <div className="no-blogs">No blogs available right now.</div>;

//   const [mainBlog, ...otherBlogs] = blogs;

//   return (
//     <div className="blogs-section">
//       <h2 className="section-heading">Featured Blog</h2>

//       <div className="main-layout">
//         {/* Featured Full Blog */}
//         <div className="featured-blog">
//           <img
//             src={mainBlog.coverImage || "/placeholder.jpg"}
//             alt={mainBlog.title}
//             className="featured-image"
//           />
//           <div className="featured-content">
//             <h1 className="featured-title">{mainBlog.title}</h1>
//             <p className="featured-date">
//               {new Date(mainBlog.createdAt).toLocaleDateString()}
//             </p>
//             <div
//               className="featured-body"
//               dangerouslySetInnerHTML={{ __html: mainBlog.content }}
//             ></div>
//             <Link to={`/blogs/get/${mainBlog.slug}`} className="read-btn">
//               Continue Reading →
//             </Link>
//           </div>
//         </div>

//         {/* Other Blog Links */}
//         <div className="other-blogs">
//           <h3>More Blogs</h3>
//           <ul>
//             {otherBlogs.map((blog) => (
//               <li key={blog._id}>
//                 <Link to={`/blogs/get/${blog.slug}`} className="blog-link">
//                   {blog.title}
//                 </Link>
//                 <span className="blog-date">
//                   {new Date(blog.createdAt).toLocaleDateString()}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogsList;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogsList.css";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs/get")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          const sortedBlogs = data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setBlogs(sortedBlogs);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading blogs...</div>;
  if (blogs.length === 0) return <div className="no-blogs">No blogs available right now.</div>;

  const [mainBlog, ...otherBlogs] = blogs;

  return (
    <div className="blogs-wrapper">
      {/* Featured Blog Section */}
      <section className="featured-section">
        <div className="featured-image-container">
          <img
            src={mainBlog.coverImage || "/placeholder.jpg"}
            alt={mainBlog.title}
            className="featured-image"
          />
          <div className="overlay-gradient"></div>
          <div className="featured-text">
            <h1 className="featured-title">{mainBlog.title}</h1>
            <p className="featured-date">
              {new Date(mainBlog.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="featured-content">
          <div
            className="featured-body"
            dangerouslySetInnerHTML={{ __html: mainBlog.content }}
          ></div>
          <Link to={`/blogs/get/${mainBlog.slug}`} className="read-btn">
            Continue Reading →
          </Link>
        </div>
      </section>

      {/* More Blogs */}
      <section className="more-blogs">
        <h2>More from our Blog</h2>
        <div className="blogs-grid">
          {otherBlogs.map((blog) => (
            <Link
              key={blog._id}
              to={`/blogs/get/${blog.slug}`}
              className="blog-card"
            >
              <h3>{blog.title}</h3>
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsList;

