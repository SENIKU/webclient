import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="mt-5">
      <h2>404 - URL not found</h2>
      <p>The requested URL does not match any valid routes.
      </p>
      <Link to="/" className="link-2">Go Home</Link>
    </div>
  );
}

export default NotFound;


