import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

function FeatureProducts() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('src/Assests/Properties/real_estate_varied_attributes.json')
      .then((response) => response.json())
      .then((data) => setProperties(data.properties.slice(0, 3)))
      .catch((error) => console.error('Failed to load data:', error));
  }, []);

  return (
    <main className='bg-black/60 '>
        <p className='text-4xl p-6 text-white'>Featured Products</p>
        <secion className="grid justify-between lg:grid-cols-3  sm:grid-cols-2 grid-rows-none">
        {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
        ))}
        </secion>
    </main>
  );
}

export default FeatureProducts;