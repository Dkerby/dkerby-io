import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="App-logo box"><p className="logo-text">DK</p></div>
        <div className="header-links">
          <h2><a className="header-link-item" href="https://github.com/Dkerby">Projects</a></h2>
          <h2><a className="header-link-item" href="https://www.linkedin.com/in/dkerby0/">Experience</a></h2>
        </div>
      </header>
      <body className="body">
        <div className="triangle-pattern"></div>
        <div className="text-wrapper">
          <div className="name">
            <h3>
              Drew Kerby
            </h3>
          </div>
          <div className="description">
            <h4>
              Developer & Blockchain Enthusiast
            </h4>
          </div>
        </div>
      </body>
      <footer className="footer">
        <ul className="social-links">
          <li>
          <a href="https://www.linkedin.com/in/dkerby0/" name="linkedinnav"  className="social-link-item social-link-item-linkedin"> </a>
          </li>
          <li>
          <a href="https://github.com/Dkerby" name="githubnav" className="social-link-item social-link-item-github"> </a>
          </li>
          <li className="email-link-outer">
          <a className="email-link" href="mailto:hello@dkerby.io">hello@dkerby.io</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
