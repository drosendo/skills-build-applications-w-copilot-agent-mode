
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className="octofit-navbar">
        <img src={logo} className="App-logo" alt="Octofit Logo" />
        <span style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }}>OctoFit Tracker</span>
        <a href="#features" style={{ marginLeft: 'auto' }}>Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <header className="App-header">
        <h1 className="octofit-heading">Welcome to OctoFit Tracker</h1>
        <p>
          Your all-in-one fitness tracking and team competition platform.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
