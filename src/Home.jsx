// import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
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
          <a href="/lostitems">List a Lost Item</a>
          <a href="/founditems">Browse Found Items</a>
        </nav>
      </div>
    </>
  );
}
