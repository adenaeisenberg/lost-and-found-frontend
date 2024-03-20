// import { Link } from "react-router-dom";
import "./Home.css";
import { LogoutLink } from "./LogoutLink";

// CODE IS FROM https://codepen.io/designfenix/pen/jOLYpNK

export function Home() {
  return (
    <>
      {/* <div className="wrapper-images">
        <div className="images-line">
          <div
            className="line large"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
        </div>
        <div className="images-line">
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
        </div>
        <div className="images-line">
          <div
            className="line "
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line "
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage: `url:(https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)`,
            }}
          ></div>
        </div>
      </div> */}
      <div className="container">
        <div className="logo">
          <img src="/src/assets/Lost-&-Found-Logo.png" alt="Lost & Found Logo" />
        </div>
        <nav className="menu">
          {localStorage.jwt === undefined ? <a href="/login">Login</a> : <LogoutLink />}
          <a href="/lostitems">List a Lost Item</a>
          <a href="/founditems">Browse Found Items</a>
        </nav>
      </div>
    </>
  );
}
