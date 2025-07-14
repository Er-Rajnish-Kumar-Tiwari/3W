import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Leaderboard = ({ users }) => (
  <div className="mt-6">
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="border-b">
              <td className="px-4 py-2 text-center">
                {index + 4}
              </td>
              <td className="px-4 py-2 flex items-center gap-2">
                {user.avatar ? (
                  <img src={user.avatar} className="w-6 h-6 rounded-full" />
                ) : (
                  <FaUserCircle className="w-6 h-6 text-gray-500" />
                )}
                {user.name}
              </td>
              <td className="px-4 py-2 text-center">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Leaderboard;
