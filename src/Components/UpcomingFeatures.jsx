import React from "react";

function Features() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-32 px-6">
      <div className="p-8 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Upcoming Features</h2>

        <div className="space-y-8 text-white/90">

          <div>
            <h3 className="text-2xl font-semibold mb-2">💬 Buyer-Seller Chat</h3>
            <p>
              A real-time chat system that allows potential buyers and property sellers to communicate instantly.
              Users can ask questions, negotiate prices, and schedule visits—all within the platform.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">🏡 Property Auction System</h3>
            <p>
              An interactive auction system where users can place live bids on listed properties. Each auction
              includes countdown timers, bid history, and auto-refresh to create a fair and competitive experience.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
export default UpcomingFeatures