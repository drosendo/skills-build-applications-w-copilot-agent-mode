import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const LEADERBOARD_API = 'https://CODESPACE_NAME-8000.app.github.dev/api/leaderboards/';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(() => setLeaderboard([]));
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
