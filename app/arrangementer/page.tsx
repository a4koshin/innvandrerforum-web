// app/annual-event/page.tsx
import React from "react";
import EventCard from "@/components/EventCard";
import { Event } from "@/constants/event";

const ArrangementerPage = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Football Tournament",
      description:
        "Join our annual 5-a-side knockout championship. Trophies await the winning team! Perfect for competitive spirits and team building.",
      date: "Day 1 • June 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Central Sports Field",
      icon: "⚽",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      buttonText: "Join Tournament",
      spotsLeft: 12,
      featured: true,
    },
    {
      id: 2,
      title: "Cabin Tour",
      description:
        "Explore scenic mountain cabins with guided nature walks. Experience tranquility and breathtaking views in the wilderness.",
      date: "Day 2 • June 16, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Pinewood Mountains",
      icon: "🏔️",
      color: "from-amber-600 to-orange-500",
      bgColor: "bg-amber-50",
      buttonText: "Book Tour",
      spotsLeft: 8,
      featured: false,
    },
    {
      id: 3,
      title: "Bowling Championship",
      description:
        "Friendly team bowling with cosmic lights and music. Prizes for highest scores and most creative team outfits!",
      date: "Day 3 • June 17, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Strikes & Spares Alley",
      icon: "🎳",
      color: "from-purple-600 to-pink-500",
      bgColor: "bg-purple-50",
      buttonText: "Register Team",
      spotsLeft: 5,
      featured: false,
    },
    {
      id: 4,
      title: "Cinema Night",
      description:
        "Exclusive private screening of a blockbuster premiere. Enjoy gourmet popcorn, drinks, and luxury seating.",
      date: "Day 4 • June 18, 2024",
      time: "8:00 PM - 11:00 PM",
      location: "Grand Theater",
      icon: "🎬",
      color: "from-blue-600 to-indigo-500",
      bgColor: "bg-blue-50",
      buttonText: "Get Tickets",
      spotsLeft: 20,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-red-600/5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-48" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-48" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Årlige{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
                Arrangementer
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Gøyale aktiviteter som samler alle for uforglemmelige opplevelser.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4</div>
                <div className="text-gray-600">Aktiviteter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4</div>
                <div className="text-gray-600">Dager</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">Deltakere</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 -mt-12">
        {/* Decorative Elements */}
        <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-red-200/10 to-pink-200/10 rounded-full blur-3xl" />

        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Våre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
                Årlige Favoritter
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Velg fra våre mest populære arrangementer og bli med på moroa!
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Klar for en uforglemmelig uke?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Registrer deg for alle arrangementer og få 20% rabatt på
              totalprisen!
            </p>
            <button className="bg-gradient-to-r from-blue-900 to-red-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Registrer for Alle Arrangementer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArrangementerPage;
