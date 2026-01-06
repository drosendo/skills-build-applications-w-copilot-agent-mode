import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const USERS_API = 'https://CODESPACE_NAME-8000.app.github.dev/api/users/';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USERS_API)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          )) : <tr><td colSpan="3">No users found</td></tr>}
        </tbody>
      </Table>
    </div>
  );
}
