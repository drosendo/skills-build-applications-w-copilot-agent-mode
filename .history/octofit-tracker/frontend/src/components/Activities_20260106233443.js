import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const ACTIVITIES_API = 'https://CODESPACE_NAME-8000.app.github.dev/api/activities/';

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(ACTIVITIES_API)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(() => setActivities([]));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Activities</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.length > 0 ? activities.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.date}</td>
            </tr>
          )) : <tr><td colSpan="3">No activities found</td></tr>}
        </tbody>
      </Table>
    </div>
  );
}
