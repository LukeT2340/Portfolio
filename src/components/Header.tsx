

const Header = () => {
  return (
    <header className="integration-message">
      <h3 className="integration-text">
        Advertising feature
        <span className="reader-only">sponsored by BRAND</span>
      </h3>
      <a href="www.google.com" className="integration-logo" target="_blank" rel="sponsored noopener noreferrer">
        <img src="./assets/common/logo.svg" alt="BRAND logo" />
      </a>
    </header>
  );
};

export default Header;
