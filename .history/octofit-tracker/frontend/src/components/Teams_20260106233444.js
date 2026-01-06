import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const TEAMS_API = 'https://CODESPACE_NAME-8000.app.github.dev/api/teams/';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(TEAMS_API)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(() => setTeams([]));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Teams</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.length > 0 ? teams.map((team) => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.members ? team.members.length : 0}</td>
            </tr>
          )) : <tr><td colSpan="3">No teams found</td></tr>}
        </tbody>
      </Table>
    </div>
  );
}
