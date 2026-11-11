import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import posts from "./blogs";
import "./Blogs.css";

const Blogs = () => (
  <main className="blogs-page-wrapper">
    <Seo
      title="Blogs | VetanNow"
      description="Perspectives from VetanNow on the payday gap, financial wellness, and how people get paid."
      path="/blogs"
    />

    <section className="blogs-hero-section">
      <div className="section-header text-center">
        <div className="section-pill center-pill">INSIGHTS & STORIES</div>
        <h1 className="section-heading">
          Our <span className="highlight-crimson">Blog</span>
        </h1>
        <p className="section-subheading">
          Perspectives on earned wages, financial wellness, and what employee-first
          support looks like at work.
        </p>
      </div>
    </section>

    <section className="blogs-grid-section">
      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <Link to={`/blogs/${post.slug}`} className="blog-card-img-link">
              <img src={post.image} alt={post.imageAlt} />
            </Link>
            <div className="blog-card-body">
              <h2>
                <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
              <Link className="blog-read-link" to={`/blogs/${post.slug}`}>
                Read Article <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default Blogs;
