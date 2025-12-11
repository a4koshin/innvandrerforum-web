"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Gamepad2,
  Mountain,
  Users,
  Heart,
  BookOpen,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Coffee,
  Film,
  Music,
  Globe,
  Sparkles,
  Target,
  Shield,
  Star,
  ExternalLink,
  Home,
} from "lucide-react";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaBowlingBall } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { useRouter } from "next/navigation";

// Weekly Schedule Activities with Images
const weeklyActivities = [
  {
    id: 1,
    day: "Mandag",
    activities: [
      {
        name: "Futsal Trening",
        time: "20:30 - 22:00",
        location: "Kongstenhallen",
        description: "Futsal trening for alle nivåer",
        type: "sport",

        image: "/fotbal2.JPG", // Your football image
      },
      {
        name: "Svømming (Kvinner)",
        time: "19:00 - 20:00",
        location: "Gressvik ungdomsskole",
        description: "Svømmetrening for kvinner",
        type: "sport",

        image: "/swimming.jpeg", // Your swimming image
      },
    ],
  },
  {
    id: 2,
    day: "Torsdag",
    activities: [
      {
        name: "Futsal Trening",
        time: "20:00 - 22:00",
        location: "Kongstenhallen",
        description: "Intensiv futsal trening",
        type: "sport",

        image: "/fotbal1.JPG", // Your football image
      },
    ],
  },
  {
    id: 3,
    day: "Fredag",
    activities: [
      {
        name: "Futsal Trening",
        time: "19:30 - 21:30",
        location: "Kongstenhallen",
        description: "Ukeavslutning med futsal",
        type: "sport",

        image: "/fotbal0.JPG", // Your football image
      },
    ],
  },
];

// Monthly Activities with Images
const monthlyActivities = [
  {
    id: 1,
    name: "EA Sports FIFA Turnering",
    description: "Månedlig FIFA-konkurranse med premier",
    schedule: "Siste lørdag i måneden",

    icon: Gamepad2,
    image: "/EAsports.JPG",
    location: "Fredrikstad Flerkulturelt Ungdomshus",
    registration: "Påmelding via WhatsApp",
  },
  {
    id: 2,
    name: "Kino Kveld",
    description: "Filmvisning med etterfølgende diskusjon",
    schedule: "En gang i måneden",

    icon: Film,
    image: "/PCGaming.jpg", // Using PCGaming as placeholder for cinema
    location: "Ungdomshuset",
    registration: "Åpen for alle",
  },
];

// Yearly Activities with Images
const yearlyActivities = [
  {
    id: 1,
    name: "Fotballturnering",
    description: "Årlig fotballturnering for hele Østfold",
    month: "September",
    participants: "120+ deltakere",
    icon: Trophy,
    image: "/football.jpg",
    location: "Østfold Stadion",
    duration: "Hele dagen",
  },
  {
    id: 2,
    name: "Hyttetur",
    description: "Årlig hytteutflukt i vakre omgivelser",
    month: "Juni",
    participants: "40+ deltakere",
    icon: Mountain,
    image: "/football.jpg", // Placeholder - add actual hytte image
    location: "Østfold skog",
    duration: "Helg",
  },
  {
    id: 3,
    name: "Bowlingkveld",
    description: "Årlig bowlingturnering med sosialt samvær",
    month: "November",
    participants: "50+ deltakere",
    icon: FaBowlingBall,
    image: "/bowling.jpeg",
    location: "Strike Bowling",
    duration: "3 timer",
  },
  {
    id: 4,
    name: "Sommerfest",
    description: "Årlig sommerfeiring med grill og aktiviteter",
    month: "August",
    participants: "80+ deltakere",
    icon: Users,
    image: "/football.jpg", // Placeholder - add actual summerfest image
    location: "Fredrikstad sentrum",
    duration: "Hele dagen",
  },
];

// Youth House Activities with Images
const youthHouseActivities = [
  {
    id: 1,
    name: "Ungdomshus Åpent",
    description: "Daglig åpningstid for gaming, leksehjelp og sosialt samvær",
    schedule: "Mandag - Fredag: 14:00-20:00",
    ageGroup: "6-24 år",
    icon: Home,
    image: "/PCGaming.jpg", // Placeholder - add actual youth house image
  },
  {
    id: 2,
    name: "Gaming Arena",
    description: "Dedikert gaming-område med moderne utstyr",
    schedule: "Daglig",
    ageGroup: "10+ år",
    icon: Gamepad2,
    image: "/PCGaming.jpg",
  },
  {
    id: 3,
    name: "Leksehjelp",
    description: "Gratis studiestøtte og veiledning for skoleelever",
    schedule: "Ukentlig",
    ageGroup: "6-18 år",
    icon: BookOpen,
    image: "/PCGaming.jpg", // Placeholder - add actual homework image
  },
  {
    id: 4,
    name: "Kulturkvelder",
    description: "Oppdag og feir mangfoldet gjennom mat, musikk og dans",
    schedule: "Månedlig",
    ageGroup: "Alle aldre",
    icon: Heart,
    image: "/PCGaming.jpg", // Placeholder - add actual culture image
  },
];

const ActivityPage = () => {
  const router = useRouter();
  const [activeDay, setActiveDay] = useState("Mandag");

  const getDayActivities = (day: string) => {
    const dayData = weeklyActivities.find((d) => d.day === day);
    return dayData ? dayData.activities : [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-red-600/5 py-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-48" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-48" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      {/* Section 1: Weekly Schedule with Images */}
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

          {/* Day Selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {weeklyActivities.map((dayData) => (
              <button
                key={dayData.id}
                onClick={() => setActiveDay(dayData.day)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeDay === dayData.day
                    ? "bg-blue-800 text-white cursor-pointer hover:bg-blue-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                }`}
              >
                {dayData.day}
              </button>
            ))}
          </div>

          {/* Activities for Selected Day - Updated with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getDayActivities(activeDay).map((activity, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-3/5 relative">
                    <div className="aspect-square md:aspect-auto md:h-full relative">
                      <Image
                        src={activity.image}
                        alt={activity.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {activity.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{activity.description}</p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-900" />
                        <div>
                          <div className="text-sm text-gray-500">Tid</div>
                          <div className="font-medium text-gray-900">
                            {activity.time}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-900" />
                        <div>
                          <div className="text-sm text-gray-500">Dag</div>
                          <div className="font-medium text-gray-900">
                            {activeDay}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <button
                          onClick={() => router.push("/kontakt")}
                          className="w-full py-2.5 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
                        >
                          Meld interesse
                        </button>
                      </div>
                    </div>
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monthlyActivities.map((activity) => (
              <div
                key={activity.id}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-3/5 relative">
                    <div className="aspect-square md:aspect-auto md:h-full relative">
                      <Image
                        src={activity.image}
                        alt={activity.name}
                        width={400}
                        height={400}
                        className="w-full h-[440px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {activity.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{activity.description}</p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-red-600" />
                        <div>
                          <div className="text-sm text-gray-500">Når</div>
                          <div className="font-medium text-gray-900">
                            {activity.schedule}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-red-600" />
                        <div>
                          <div className="text-sm text-gray-500">Påmelding</div>
                          <div className="font-medium text-gray-900">
                            {activity.registration}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <button
                          onClick={() => router.push("/kontakt")}
                          className="w-full py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
                        >
                          Send WhatsApp for påmelding
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 rounded-4xl p-12 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Bli med i fellesskapet</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meld deg på aktiviteter i dag!
              </h2>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Enten du er ny i området eller har bodd her lenge — våre
                aktiviteter er en perfekt måte å møte nye mennesker og bli en
                del av lokalsamfunnet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push("/kontakt")}
                  className="px-8 py-4 bg-white text-blue-900 rounded-2xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  Meld deg på aktivitet
                </button>
                <button
                  onClick={() => router.push("/om-oss")}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Users className="w-5 h-5" />
                  Les mer om oss
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-blue-200 text-sm">
                      Ukentlige aktiviteter
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-blue-200 text-sm">
                      Gratis deltakelse
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-blue-200 text-sm">
                      Årlige deltakere
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">6-75</div>
                    <div className="text-blue-200 text-sm">Aldersspenn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityPage;
