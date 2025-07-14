import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Podium = ({ topUsers }) => {
  const [first, second, third] = topUsers;

  const Avatar = ({ src, size }) => (
    src ? <img src={src} className={`rounded-full ${size}`} /> : <FaUserCircle className={`${size} text-gray-500`} />
  );

  return (
    <div className="flex justify-center gap-4 mt-8">
      {second && (
        <div className="flex flex-col items-center">
          <Avatar src={second.avatar} size="w-16 h-16" />
          <p className="mt-2 text-lg font-semibold">{second.name}</p>
          <span className="text-sm text-gray-600">🥈 {second.totalPoints}</span>
        </div>
      )}
      {first && (
        <div className="flex flex-col items-center">
          <Avatar src={first.avatar} size="w-20 h-20" />
          <p className="mt-2 text-xl font-bold">{first.name}</p>
          <span className="text-sm text-yellow-700">🥇 {first.totalPoints}</span>
        </div>
      )}
      {third && (
        <div className="flex flex-col items-center">
          <Avatar src={third.avatar} size="w-16 h-16" />
          <p className="mt-2 text-lg font-semibold">{third.name}</p>
          <span className="text-sm text-gray-600">🥉 {third.totalPoints}</span>
        </div>
      )}
    </div>
  );
};

export default Podium;

