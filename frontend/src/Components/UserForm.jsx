import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
  const [newUser, setNewUser] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [userList, setUserList] = useState([]);

  // Fetch all user names for dropdown selection
  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:3000/api/users');
    setUserList(res.data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    if (!newUser) return;
    await axios.post('http://localhost:3000/api/users', { name: newUser });
    setNewUser('');
    fetchUsers();
    onUserAdded();
  };

  const handleClaimPoints = async () => {
    if (!selectedUser) return;
    await axios.post('http://localhost:3000/api/users/claim', { name: selectedUser });
    setSelectedUser('');
    onUserAdded();
  };

  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex items-center gap-2">
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new user"
          className="px-4 py-2 border rounded-md w-full max-w-sm"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add User
        </button>
      </div>
      <div className="flex items-center gap-2">
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="px-4 py-2 border rounded-md w-full max-w-sm"
        >
          <option value="">Select user to claim points</option>
          {userList.map((user) => (
            <option key={user._id} value={user.name}>{user.name}</option>
          ))}
        </select>
        <button
          onClick={handleClaimPoints}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Claim Points
        </button>
      </div>
    </div>
  );
};

export default UserForm;