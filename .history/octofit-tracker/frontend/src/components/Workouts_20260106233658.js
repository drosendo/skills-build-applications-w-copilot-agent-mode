import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const codespace = process.env.REACT_APP_CODESPACE_NAME;
const WORKOUTS_API = `https://${codespace}-8000.app.github.dev/api/workouts/`;

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    console.log('Fetching workouts from:', WORKOUTS_API);
    fetch(WORKOUTS_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched workouts:', results);
      })
      .catch((err) => {
        setWorkouts([]);
        console.log('Error fetching workouts:', err);
      });
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Workouts</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {workouts.length > 0 ? workouts.map((w) => (
            <tr key={w.id}>
              <td>{w.id}</td>
              <td>{w.type}</td>
              <td>{w.duration}</td>
            </tr>
          )) : <tr><td colSpan="3">No workouts found</td></tr>}
        </tbody>
      </Table>
    </div>
  );
}
