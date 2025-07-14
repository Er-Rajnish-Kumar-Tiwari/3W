import React from 'react';

const categories = [
  "Party Ranking",
  "Live Ranking",
  "Hourly Ranking",
  "Family Ranking",
  "Wealth Ranking"
];

const CategoryTabs = ({ selectedCategory, onSelectCategory }) => (
  <div className="flex overflow-x-auto space-x-4 py-2">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => onSelectCategory(cat)}
        className={`px-4 py-2 whitespace-nowrap rounded-full border ${
          cat === selectedCategory ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700'
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryTabs;

