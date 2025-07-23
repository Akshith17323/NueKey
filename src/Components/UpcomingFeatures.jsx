import React from "react";

function UpcomingFeatures() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-32 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Upcoming Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1: Chat App */}
        <div className="p-6 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white">
          <h3 className="text-2xl font-semibold mb-2"> Buyer-Seller Chat</h3>
          <p className="text-white/90">
            A real-time chat system allowing potential buyers and sellers to connect instantly.
            It facilitates asking questions, negotiating, and scheduling visits—all in one place.
          </p>
        </div>

        {/* Feature 2: Auction System */}
        <div className="p-6 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white">
          <h3 className="text-2xl font-semibold mb-2">Property Auction System</h3>
          <p className="text-white/90">
            An interactive bidding system with countdowns, live updates, and fair competition
            for users interested in high-demand properties.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white">
          <h3 className="text-2xl font-semibold mb-2">Side Comparision with properties</h3>
          <p className="text-white/90">
            A side to side comaprision of properties of your liking to compare
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white">
          <h3 className="text-2xl font-semibold mb-2">More Featires in developemnt Stage</h3>
          <p className="text-white/90">
            ......................
          </p>
        </div>
      </div>
    </div>
  );
}
export default UpcomingFeatures