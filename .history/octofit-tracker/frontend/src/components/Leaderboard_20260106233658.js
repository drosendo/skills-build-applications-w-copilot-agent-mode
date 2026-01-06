import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const codespace = process.env.REACT_APP_CODESPACE_NAME;
const LEADERBOARD_API = `https://${codespace}-8000.app.github.dev/api/leaderboards/`;

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    console.log('Fetching leaderboard from:', LEADERBOARD_API);
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        console.log('Fetched leaderboard:', results);
      })
      .catch((err) => {
        setLeaderboard([]);
        console.log('Error fetching leaderboard:', err);
      });
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Leaderboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length > 0 ? leaderboard.map((entry, idx) => (
            <tr key={entry.id || idx}>
              <td>{idx + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.points}</td>
            </tr>
          )) : <tr><td colSpan="3">No leaderboard data</td></tr>}
        </tbody>
      </Table>
    </div>
  );
}
