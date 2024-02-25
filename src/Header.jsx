import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a>
      </nav>
      <Link to="/signup">Signup</Link>
    </header>
  );
}
