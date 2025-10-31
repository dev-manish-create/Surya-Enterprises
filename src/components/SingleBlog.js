import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
  fetch(`http://localhost:5000/api/blogs/get/${slug}`)
    .then((res) => res.json())
    .then((data) => {
      if (data) setBlog(data);
      else setBlog(null);
    })
    .catch((err) => console.error("Error fetching blog:", err));
}, [slug]);


  if (!blog) return <div className="loading">Loading blog...</div>;

  return (
    <div className="single-blog-container">
      <div className="single-blog-header">
        <img src={blog.coverImage} alt={blog.title} className="single-blog-image" />
        <h1 className="single-blog-title">{blog.title}</h1>
        <p className="single-blog-date">
          Published on {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div
        className="single-blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>

      <div className="blog-footer">
        <div className="share-buttons">
          <p>Share this article:</p>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <Link to="/blogs" className="back-to-blogs">
          ← Back to all blogs
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
