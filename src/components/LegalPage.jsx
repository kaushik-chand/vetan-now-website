import { Link } from "react-router-dom";
import Seo from "./Seo";
import "../pages/Legal.css";

const LegalPage = ({ title, description, path, children }) => (
  <main className="legal-page">
    <Seo title={`${title} | VetanNow`} description={description} path={path} />
    <h1>{title}</h1>
    {children}
    <section>
      <h2>Related</h2>
      <div className="legal-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms of Use</Link>
        <Link to="/faq">FAQs</Link>
      </div>
    </section>
  </main>
);

export default LegalPage;
