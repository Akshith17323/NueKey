import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState({
    address: '',
    bhk: '',
    area: ''
  });

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-[90%] lg:w-[70%] mx-auto mt-10 
                 p-6 rounded-2xl border border-white/30 
                 bg-white/10 backdrop-blur-lg text-white shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input type="text" name="address" placeholder="Search by address" value={query.address} onChange={handleChange} className="w-full px-4 py-2 rounded bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none"/>

        <input type="number" name="bhk" placeholder="BHK" value={query.bhk} onChange={handleChange} className="w-full px-4 py-2 rounded bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none"/>

        <input type="number" name="area" placeholder="Min Area (sqft)" value={query.area} onChange={handleChange} className="w-full px-4 py-2 rounded bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none"/>

        <button type="submit" className="px-6 py-2 rounded bg-white text-black font-medium hover:bg-white hover:text-stone-950 ">
          Search
        </button>
      </div>
    </form>
  );
}




export default SearchBar;