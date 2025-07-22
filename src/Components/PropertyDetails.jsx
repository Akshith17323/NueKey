import React from 'react'

function PropertyDetails() {
    
    const property  = {
      "id": "PROP001",
      "address": "828 Ghose Chowk, Kolkata, West Bengal 757528",
      "city": "Kolkata",
      "state": "West Bengal",
      "pincode": "757528",
      "type": "Apartment",
      "floorspace_sqft": 1200,
      "bedrooms": 3,
      "bathrooms": 2,
      "price_inr": 25000000,
      "parking": 1,
      "construction_features": [
        "elevator",
        "gym"
      ],
      "health_features": {
        "walkability_score": 85,
        "proximity_to_park_km": 0.5,
        "proximity_to_gym_km": 0.2,
        "proximity_to_healthcare_km": 1.0,
        "proximity_to_healthy_food_market_km": 0.8,
        "air_quality_index": 60
      },
      "community_features": {
        "public_transport_access": "Metro Station (500m)",
        "school_rating": 8.5,
        "crime_rate": "Low"
      },
      "images": [
        {
          "url": "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
          "type": "exterior",
          "caption": "Modern apartment building with nearby park access (0.5 km)"
        },
        {
          "url": "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
          "type": "interior",
          "caption": "Spacious living area with natural light, promoting wellness"
        },
        {
          "url": "https://cdn.pixabay.com/photo/2016/11/29/03/53/apartment-1866777_1280.jpg",
          "type": "community",
          "caption": "On-site gym facility within the complex"
        }
      ],
      "listing_status": "For Sale",
      "last_updated": "2025-05-07T12:07:49.255424"
    }
  return (
    <section className="p-10 text-white bg-sky-950 min-h-screen w-screen">

        {/* Images Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {property.images.map((img, idx) => (
            <figure key={idx}>
                <img
                src={img.url}
                alt={img.caption}
                className="w-full h-64 object-cover rounded-lg"
                />
                <figcaption className="text-sm mt-1 text-gray-300">{img.caption}</figcaption>
            </figure>
            ))}
        </section>

        {/* Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Property Overview */}
            <article className="space-y-4 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/30 shadow-lg">
            <h2 className="text-2xl font-semibold">Property Overview</h2>
            <p className="text-sm text-gray-300">Address:</p>
            <address className="not-italic text-base text-white">{property.address}</address>

            <p className="text-sm text-gray-300">Type:</p>
            <p>{property.type}</p>

            <p className="text-sm text-gray-300">Size:</p>
            <p>{property.floorspace_sqft} sq ft</p>

            <p className="text-sm text-gray-300">Bedrooms:</p>
            <p>{property.bedrooms}</p>

            <p className="text-sm text-gray-300">Bathrooms:</p>
            <p>{property.bathrooms}</p>

            <p className="text-sm text-gray-300">Parking:</p>
            <p>{property.parking ? 'Yes' : 'No'}</p>

            <p className="text-sm text-gray-300">Features:</p>
            <p>{property.construction_features.join(', ')}</p>

            <p className="text-sm text-gray-300">Price:</p>
            <p className="text-green-300 font-bold text-lg">₹{property.price_inr.toLocaleString()}</p>

            <p className="text-sm text-gray-300">Status:</p>
            <p className="italic text-gray-300">{property.listing_status}</p>
            </article>

            {/* Community + Health */}
            <aside className="space-y-6 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/30 shadow-lg">

            <section>
                <h2 className="text-xl font-semibold mb-2">Community Features</h2>
                <p className="text-sm text-gray-300">Transport Access:</p>
                <p>{property.community_features.public_transport_access}</p>

                <p className="text-sm text-gray-300 mt-2">School Rating:</p>
                <p>{property.community_features.school_rating}</p>

                <p className="text-sm text-gray-300 mt-2">Crime Rate:</p>
                <p>{property.community_features.crime_rate}</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Health Features</h2>

                <p className="text-sm text-gray-300">Walkability Score:</p>
                <p>{property.health_features.walkability_score}</p>

                <p className="text-sm text-gray-300 mt-2">Park Distance:</p>
                <p>{property.health_features.proximity_to_park_km} km</p>

                <p className="text-sm text-gray-300 mt-2">Gym Distance:</p>
                <p>{property.health_features.proximity_to_gym_km} km</p>

                <p className="text-sm text-gray-300 mt-2">Healthcare Distance:</p>
                <p>{property.health_features.proximity_to_healthcare_km} km</p>

                <p className="text-sm text-gray-300 mt-2">Healthy Food Market:</p>
                <p>{property.health_features.proximity_to_healthy_food_market_km} km</p>

                <p className="text-sm text-gray-300 mt-2">Air Quality Index:</p>
                <p>{property.health_features.air_quality_index}</p>
            </section>

            </aside>
        </section>
    </section>
  )
}

export default PropertyDetails