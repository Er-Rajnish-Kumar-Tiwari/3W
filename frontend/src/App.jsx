import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './Components/UserForm';
import CategoryTabs from './Components/CategoryTabs';
import Podium from './Components/Podium';
import Leaderboard from './Components/Leaderboard';
import ClaimHistory from './Components/ClaimHistory';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Party Ranking');

  const fetchUsers = async () => {
    const res = await axios.get(`https://threew-backend-oi3h.onrender.com/api/users?category=${selectedCategory}`);
    const sorted = [...res.data].sort((a, b) => b.totalPoints - a.totalPoints);
    setUsers(sorted);
  };

  useEffect(() => {
    fetchUsers();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-white text-gray-800 p-4 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">🏆 {selectedCategory}</h1>
      <CategoryTabs selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <UserForm onUserAdded={fetchUsers} />
      <Podium topUsers={users.slice(0, 3)} />
      <Leaderboard users={users.slice(3)} />
      <ClaimHistory/>
    </div>
  );
};

export default App;
