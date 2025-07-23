import React from 'react';
import { useNavigate } from 'react-router-dom';

function PropertyCard({ property }) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-2xl border border-white/30 bg-black/45 backdrop-blur-lg text-white shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <img
        src={property.images[0].url}
        alt={property.images[0].caption}
        className="w-full md:w-1/2 h-64 object-cover rounded-xl"
      />
      <div className="flex flex-col justify-between w-full md:w-1/2 space-y-2">
        <h2 className="text-xl font-semibold">{property.type} in {property.city}</h2>
        
        <div>
          <p className="text-sm font-medium text-gray-200">Price:</p>
          <p className="text-lg text-green-300 font-bold">₹{property.price_inr.toLocaleString('en-IN')}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-200">Address:</p>
          <p className="text-sm text-gray-100">{property.address}</p>
        </div>

        <p className="text-sm">{property.bedrooms} BHK • {property.bathrooms} Bath • {property.floorspace_sqft} sqft</p>
        <p className="text-xs italic text-gray-300">{property.listing_status}</p>

        <button className="mt-2 self-start px-4 py-2 rounded bg-white text-black hover:bg-black hover:text-white transition "
        onClick={(e)=> {e.preventDefault() 
                  navigate('/propertydetails')}}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;