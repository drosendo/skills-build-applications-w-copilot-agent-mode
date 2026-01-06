import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const WORKOUTS_API = 'https://CODESPACE_NAME-8000.app.github.dev/api/workouts/';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(WORKOUTS_API)
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(() => setWorkouts([]));
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
