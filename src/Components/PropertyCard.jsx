import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="p-4 border rounded shadow-lg bg-white flex gap-4 w-full md:w-[48%]">
      <img
        src={property.images[0].url}
        alt={property.images[0].caption}
        className="w-1/2 h-64 object-cover rounded"
      />
      <div className="w-1/2">
        <h2 className="text-xl font-bold">{property.type} in {property.city}</h2>
        <p className="mt-2 font-medium">Price:</p>
        <p className="text-green-700 font-semibold">₹{property.price_inr.toLocaleString('en-IN')}</p>
        <p className="mt-2 font-medium">Address:</p>
        <p className="text-gray-600">{property.address}</p>
        <p className="mt-2 font-medium">Other Details:</p>
        <p className="text-gray-800">{property.bedrooms} BHK • {property.bathrooms} Bath • {property.floorspace_sqft} sqft</p>
        <p className="text-gray-500 mt-1">{property.listing_status}</p>
      </div>
      <button>ViewDetails</button>
    </div>
  );
}

export default PropertyCard;