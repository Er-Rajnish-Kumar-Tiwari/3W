import React from 'react';

const HistoryList = ({ history }) => (
  <div className="my-6">
    <h2 className="text-2xl font-bold mb-4">Claim History</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Points</th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{h.userId.name}</td>
              <td className="px-4 py-2 text-center">{h.points}</td>
              <td className="px-4 py-2">{new Date(h.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default HistoryList;
