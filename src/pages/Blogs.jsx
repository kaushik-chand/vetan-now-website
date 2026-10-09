import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import posts from "./blogs";
import "./Blogs.css";

const Blogs = () => (
  <main className="blogs-page">
    <Seo
      title="Blogs | VetanNow"
      description="Perspectives from VetanNow on the payday gap, financial wellness, and how people get paid."
      path="/blogs"
    />
    <h1>Blogs</h1>
    <p className="blogs-intro">
      Perspectives on earned wages, financial wellness, and what employee-first support looks like at work.
    </p>
    <div className="blog-grid">
      {posts.map((post) => (
        <article className="blog-card" key={post.slug}>
          <Link to={`/blogs/${post.slug}`}>
            <img src={post.image} alt={post.imageAlt} />
          </Link>
          <div className="blog-card-body">
            <h2>
              <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <Link className="blog-read" to={`/blogs/${post.slug}`}>
              Read article
            </Link>
          </div>
        </article>
      ))}
    </div>
  </main>
);

export default Blogs;
