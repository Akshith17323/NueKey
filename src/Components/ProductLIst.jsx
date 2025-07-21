import React, { useState, useEffect } from 'react';
import PropertySearchBar from './PropertySearchBar';
import PropertyCard from './PropertyCard';

function PropertyList() {
  const [allProperties, setAllProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('/real_estate_varied_attributes.json')
      .then((res) => res.json())
      .then((data) => {
        setAllProperties(data.properties);
        setFiltered(data.properties);
      });
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
    <div className='bg-black/60'>
      <PropertySearchBar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center gap-4 p-6">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;