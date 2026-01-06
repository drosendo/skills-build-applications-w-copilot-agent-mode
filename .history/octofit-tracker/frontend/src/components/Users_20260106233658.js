import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const codespace = process.env.REACT_APP_CODESPACE_NAME;
const USERS_API = `https://${codespace}-8000.app.github.dev/api/users/`;

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Fetching users from:', USERS_API);
    fetch(USERS_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Fetched users:', results);
      })
      .catch((err) => {
        setUsers([]);
        console.log('Error fetching users:', err);
      });
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
