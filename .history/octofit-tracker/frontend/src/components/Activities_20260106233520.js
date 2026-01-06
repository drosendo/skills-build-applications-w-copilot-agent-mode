import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const codespace = process.env.REACT_APP_CODESPACE_NAME;
const ACTIVITIES_API = `https://${codespace}-8000.app.github.dev/api/activities/`;

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log('Fetching activities from:', ACTIVITIES_API);
    fetch(ACTIVITIES_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
      })
      .catch((err) => {
        setActivities([]);
        console.log('Error fetching activities:', err);
      });
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
