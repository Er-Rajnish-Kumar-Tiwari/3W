import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClaimHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get('https://threew-backend-oi3h.onrender.com/api/history');
        setHistory(res.data);
      } catch (err) {
        console.error('Error fetching history:', err);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">🕒 Claim History</h2>
      <div className="overflow-x-auto bg-white shadow rounded-md">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-center">Points</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={entry._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{entry.name}</td>
                <td className="px-4 py-2 text-center font-semibold text-green-600">+{entry.points}</td>
                <td className="px-4 py-2">{entry.category}</td>
                <td className="px-4 py-2 text-gray-500">
                  {new Date(entry.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {history.length === 0 && (
          <p className="text-center py-6 text-gray-500">No claims yet!</p>
        )}
      </div>
    </div>
  );
};

export default ClaimHistory;
