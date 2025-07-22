import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import PropertyCard from './PropertyCard';

function PropertyList() {
  const [allProperties, setAllProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('src/Assests/Properties/real_estate_varied_attributes.json')
      .then((res) => res.json())
      .then((data) => {
        setAllProperties(data.properties);
        setFiltered(data.properties);
      })
      .catch((err) => console.error('Error loading data:', err));
  }, []);

  const handleSearch = ({ address, bhk, area }) => {
    const results = allProperties.filter((p) => {
      return (
        (!address || p.address.toLowerCase().includes(address.toLowerCase())) &&
        (!bhk || p.bedrooms === Number(bhk)) &&
        (!area || p.floorspace_sqft >= Number(area))
      );
    });
    setFiltered(results);
  };

  return (
    <div className='bg-black/60 min-h-screen'>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center gap-4 p-6">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;