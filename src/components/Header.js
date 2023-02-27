const Title = () => (
  <img src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/blackoption_200x.png?v=1659016547" />
);
const HeaderComponent = () => (
  <div className="header">
    <nav>
      <Title></Title>
      <div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  </div>
);

export default HeaderComponent;
