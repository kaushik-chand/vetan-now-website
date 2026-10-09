import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import posts from "./blogs";
import "./Blogs.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="blogs-page">
        <h1>Article not found</h1>
        <Link className="blog-read" to="/blogs">
          Back to blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="blogs-page blog-article">
      <Seo title={`${post.title} | VetanNow`} description={post.excerpt} path={`/blogs/${post.slug}`} />
      <Link className="blog-back" to="/blogs">
        Back to blogs
      </Link>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.imageAlt} />
      {post.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        <a
          href="https://www.linkedin.com/company/vetannow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VetanNow on LinkedIn
        </a>
      </p>
    </main>
  );
};

export default BlogPost;
