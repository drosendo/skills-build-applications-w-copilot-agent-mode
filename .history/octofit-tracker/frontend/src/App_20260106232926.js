

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary octofit-navbar">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <img src={logo} className="App-logo" alt="Octofit Logo" />
            <span className="ms-2 fw-bold fs-4">OctoFit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="App-header">
        <h1 className="octofit-heading display-4">Welcome to OctoFit Tracker</h1>
        <p className="lead">
          Your all-in-one fitness tracking and team competition platform.
        </p>
        <a
          className="App-link btn btn-outline-primary mb-3"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Bootstrap Table Example */}
        <div className="container my-4">
          <h2 className="mb-3">Leaderboard</h2>
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>1200</td>
                <td><button className="btn btn-success btn-sm">View</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>1100</td>
                <td><button className="btn btn-success btn-sm">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bootstrap Card Example */}
        <div className="container my-4">
          <div className="card mx-auto" style={{maxWidth: '22rem'}}>
            <div className="card-body">
              <h5 className="card-title">Personal Best</h5>
              <h6 className="card-subtitle mb-2 text-muted">Alice</h6>
              <p className="card-text">You ran 10km in 45 minutes! Keep it up!</p>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>See Details</button>
            </div>
          </div>
        </div>

        {/* Bootstrap Modal Example */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{background: 'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Personal Best Details</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Distance: 10km</p>
                  <p>Time: 45 minutes</p>
                  <p>Date: 2026-01-06</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bootstrap Form Example */}
        <div className="container my-4">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputActivity" className="form-label">Activity</label>
              <input type="text" className="form-control" id="inputActivity" placeholder="e.g. Running" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

      </header>
    </div>
  );
}

export default App;
