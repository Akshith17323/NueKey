import React from 'react';

function PropertyDetails() {
  const property = {
    id: "PROP001",
    address: "828 Ghose Chowk, Kolkata, West Bengal 757528",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "757528",
    type: "Apartment",
    floorspace_sqft: 1200,
    bedrooms: 3,
    bathrooms: 2,
    price_inr: 25000000,
    parking: 1,
    construction_features: ["Elevator", "Gym"],
    health_features: {
      walkability_score: 85,
      proximity_to_park_km: 0.5,
      proximity_to_gym_km: 0.2,
      proximity_to_healthcare_km: 1.0,
      proximity_to_healthy_food_market_km: 0.8,
      air_quality_index: 60
    },
    community_features: {
      public_transport_access: "Metro Station (500m)",
      school_rating: 8.5,
      crime_rate: "Low"
    },
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
        type: "exterior",
        caption: "Modern apartment building with nearby park access (0.5 km)"
      },
      {
        url: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
        type: "interior",
        caption: "Spacious living area with natural light, promoting wellness"
      },
      {
        url: "https://cdn.pixabay.com/photo/2016/11/29/03/53/apartment-1866777_1280.jpg",
        type: "community",
        caption: "On-site gym facility within the complex"
      }
    ],
    listing_status: "For Sale",
    last_updated: "2025-05-07T12:07:49.255424"
  };

  return (
    <section className="p-4 sm:p-6 md:p-10 text-white mt-8 min-h-screen w-full">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {property.images.map((img, idx) => (
          <figure
            key={idx}
            className="rounded-2xl overflow-hidden border border-white/30 backdrop-blur-lg bg-black/45 shadow-md"
          >
            <img
              src={img.url}
              alt={img.caption}
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
            <figcaption className="text-sm px-4 py-2 text-gray-300">{img.caption}</figcaption>
          </figure>
        ))}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="rounded-2xl p-6 border border-white/30 backdrop-blur-lg bg-black/45 space-y-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">🏡 Property Overview</h2>
          <p><span className="text-gray-300 text-sm">Address:</span> {property.address}</p>
          <p><span className="text-gray-300 text-sm">Type:</span> {property.type}</p>
          <p><span className="text-gray-300 text-sm">Size:</span> {property.floorspace_sqft} sq ft</p>
          <p><span className="text-gray-300 text-sm">Bedrooms:</span> {property.bedrooms}</p>
          <p><span className="text-gray-300 text-sm">Bathrooms:</span> {property.bathrooms}</p>
          <p><span className="text-gray-300 text-sm">Parking:</span> {property.parking ? 'Yes' : 'No'}</p>
          <p><span className="text-gray-300 text-sm">Features:</span> {property.construction_features.join(', ')}</p>
          <p><span className="text-gray-300 text-sm">Price:</span> <span className="text-green-300 font-bold text-lg">₹{property.price_inr.toLocaleString()}</span></p>
          <p><span className="text-gray-300 text-sm">Status:</span> <span className="italic text-gray-300">{property.listing_status}</span></p>
        </div>


        <div className="rounded-2xl p-6 border border-white/30 backdrop-blur-lg bg-black/45 space-y-6 shadow-md">
          <div>
            <h2 className="text-xl font-semibold mb-2">Community Features</h2>
            <p><span className="text-gray-300 text-sm">Transport Access:</span>{property.community_features.public_transport_access}</p>
            <p><span className="text-gray-300 text-sm">School Rating:</span> {property.community_features.school_rating}</p>
            <p><span className="text-gray-300 text-sm">Crime Rate:</span> {property.community_features.crime_rate}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Health Features</h2>
            <p><span className="text-gray-300 text-sm">Walkability:</span> {property.health_features.walkability_score}</p>
            <p><span className="text-gray-300 text-sm">Park:</span> {property.health_features.proximity_to_park_km} km</p>
            <p><span className="text-gray-300 text-sm">Gym:</span> {property.health_features.proximity_to_gym_km} km</p>
            <p><span className="text-gray-300 text-sm">Healthcare:</span> {property.health_features.proximity_to_healthcare_km} km</p>
            <p><span className="text-gray-300 text-sm">Healthy Food Market:</span> {property.health_features.proximity_to_healthy_food_market_km} km</p>
            <p><span className="text-gray-300 text-sm">Air Quality Index:</span> {property.health_features.air_quality_index}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;