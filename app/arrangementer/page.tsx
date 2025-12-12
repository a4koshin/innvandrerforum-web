// app/annual-event/page.tsx
import React from "react";
import EventCard from "@/components/EventCard";
import { Event } from "@/constants/event";
import { events } from "@/constants/event";
import { Button } from "@/components/ui/button";

const ArrangementerPage = () => {
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
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 mt-24">
        {/* Decorative Elements */}
        <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-red-200/10 to-pink-200/10 rounded-full blur-3xl" />

        <div className="relative">
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
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-900 to-red-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Registrer for Alle Arrangementer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArrangementerPage;
