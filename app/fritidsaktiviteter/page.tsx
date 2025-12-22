"use client";

import { Calendar } from "lucide-react";
import ActivityCard from "@/components/ActivityCard";
import { weeklyActivities, monthlyActivities } from "@/constants/activities";

const ActivityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-red-600/5 py-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-48" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-48" />

        <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vårt{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
                aktivitetsprogram
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fra ukentlig trening til årlige arrangementer — vi har aktiviteter
              for alle aldre og interesser. Alt er gratis og åpent for hele
              samfunnet.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Weekly Activities */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Ukentlig Program
                </h2>
                <p className="text-gray-600 mt-2">
                  Faste aktiviteter hver uke - kom og bli med!
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {weeklyActivities.map((dayData) => (
              <div key={dayData.id} className="space-y-6">
                {/* Day Header */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-900 text-white rounded-xl">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {dayData.day}
                  </h3>
                </div>

                {/* Activities for this day */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {dayData.activities.map((activity, index) => (
                    <ActivityCard
                      key={`${dayData.id}-${index}`}
                      image={activity.image}
                      title={activity.name}
                      description={activity.description}
                      location={activity.location}
                      time={activity.time}
                      day={dayData.day}
                      buttonText="Meld interesse"
                      accent="blue"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Monthly Activities */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-600 to-red-500 rounded-xl">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Månedlige Arrangementer
                </h2>
                <p className="text-gray-600 mt-2">
                  Spesielle arrangementer en gang i måneden
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {monthlyActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                image={activity.image}
                title={activity.name}
                description={activity.description}
                location={activity.location}
                time={activity.schedule}
                buttonText="Meld interesse"
                accent="red"
                icon={activity.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityPage;
