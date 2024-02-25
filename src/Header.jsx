// import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <>
      <div className="wrapper-images">
        <div className="images-line">
          <div className="line large"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line large"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="images-line">
          <div className="line"></div>
          <div className="line large"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line large"></div>
          <div className="line"></div>
        </div>
        <div className="images-line">
          <div className="line "></div>
          <div className="line"></div>
          <div className="line large"></div>
          <div className="line "></div>
          <div className="line"></div>
          <div className="line large"></div>
        </div>
      </div>
      <div className="container">
        <div className="logo">
          <img src="/src/assets/Lost-&-Found-Logo.png" alt="Lost & Found Logo" />
        </div>
        <nav className="menu">
          <a href="/login">Login</a>
          <a href="https://www.instagram.com/stories/highlights/17860817942544583/">List a Lost Item</a>
          <a href="https://www.instagram.com/stories/highlights/17888680058390863/">Browse Found Items</a>
        </nav>
      </div>
    </>
  );
}
// <header>
//   <nav>
//     <a href="#">Home</a> | <a href="#">Link</a>
//   </nav>
//   <Link to="/signup">Signup</Link>
// </header>
