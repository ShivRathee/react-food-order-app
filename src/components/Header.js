import { useState } from "react";
import { Link } from "react-router-dom";

export const Title = () => (
  <img src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/blackoption_200x.png?v=1659016547" />
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <nav>
        <Title />
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            {isLoggedIn ? (
              <button
                className="btn-login"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="btn-login" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
