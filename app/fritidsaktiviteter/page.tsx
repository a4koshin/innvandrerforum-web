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
} from "lucide-react";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaBowlingBall } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { useRouter } from "next/navigation";
// Sports Activities Data with Images
const sportsActivities = [
  {
    id: 1,
    name: "Fotball",
    description:
      "Månedlige turneringer og treninger for alle aldre og ferdighetsnivåer",
    schedule: "Ukentlig • Mandager 18:00-20:00",
    participants: "120+ deltakere",
    color: "bg-gradient-to-br from-blue-900 to-blue-800",
    icon: IoFootball,
    image: "/football.jpg",
    location: "Østfold Stadion",
  },
  {
    id: 2,
    name: "Bowling",
    description: "Sosiale bowlingkvelder med fokus på glede og fellesskap",
    schedule: "Annenhver uke • Fredager 19:00-22:00",
    participants: "40+ deltakere",
    color: "bg-gradient-to-br from-red-600 to-red-500",
    icon: FaBowlingBall,
    image: "/bowling.jpeg",
    location: "Strike Bowling",
  },
  {
    id: 3,
    name: "Svømming",
    description:
      "Svømmekurs og fritidssvømming for både nybegynnere og erfarne",
    schedule: "Månedlig • Lørdager 10:00-12:00",
    participants: "35+ deltakere",
    color: "bg-gradient-to-br from-blue-900 to-blue-800",
    icon: FaPersonSwimming,
    image: "/swimming.jpeg",
    location: "Østfold Svømmehall",
  },
  {
    id: 4,
    name: "Paintball",
    description: "Spennende paintball-opplevelser i trygge omgivelser",
    schedule: "Kvartalsvis • Søndager 13:00-16:00",
    participants: "25+ deltakere",
    color: "bg-gradient-to-br from-red-600 to-red-500",
    icon: Target,
    image: "/football.jpg",
    location: "Østfold Paintball Park",
  },
];

// Outdoor Activities Data with Images
const outdoorActivities = [
  {
    id: 1,
    title: "Fjellturer",
    description: "Utforsk Østfolds vakre fjellandskap med erfarne guider",
    image: "/outdoor/mountains.jpg",
    date: "Neste tur: 15. Juni",
    difficulty: "Middels",
    duration: "6 timer",
    season: "Vår - Høst",
  },
  {
    id: 2,
    title: "Sykketurer",
    description: "Oppdag skjulte stier og naturperler på sykkel",
    image: "/outdoor/cycling.jpg",
    date: "Neste tur: 22. Juni",
    difficulty: "Lett",
    duration: "4 timer",
    season: "Hele året",
  },
  {
    id: 3,
    title: "Naturopplevelser",
    description: "Lær om lokal flora og fauna på våre guidede turer",
    image: "/outdoor/nature.jpg",
    date: "Neste tur: 29. Juni",
    difficulty: "Alle nivåer",
    duration: "3 timer",
    season: "Hele året",
  },
  {
    id: 4,
    title: "Familievennlige turer",
    description: "Perfekte utflukter for familier med barn",
    image: "/outdoor/family.jpg",
    date: "Neste tur: 6. Juli",
    difficulty: "Lett",
    duration: "2-3 timer",
    season: "Vår - Høst",
  },
];

// Gaming Activities Data with Images
const gamingActivities = [
  {
    id: 0,
    name: "Gaming Night",
    description: "Ukentlige gaming-kvelder med konkurranser og fellesskap",
    schedule: "Ukentlig • Torsdager 18:00-22:00",
    ageGroup: "13+ år",
    icon: Gamepad2,
    tags: ["Alle spill", "Priser"],
    image: "/PCGaming.jpg",
    equipment: "PC & Konsoller",
  },
  {
    id: 1,
    name: "EA Sports FIFA Turnering",
    description: "Årlig mesterskap med premier og ære på spill",
    schedule: "Årlig • Oktober",
    ageGroup: "Alle aldre",
    icon: "🏆",
    tags: ["Turnering", "Premier"],
    image: "/EAsports.jpg",
    equipment: "PS5 & Xbox",
  },
];

// Youth House Activities Data with Images
const youthHouseActivities = [
  {
    id: 1,
    name: "Kulturkvelder",
    description: "Oppdag og feir mangfoldet gjennom mat, musikk og dans",
    icon: Heart,
    schedule: "Månedlig",
    ageGroup: "Alle aldre",
    image: "/youth/culture.jpg",
    time: "18:00-21:00",
  },
  {
    id: 2,
    name: "Leksehjelp",
    description: "Gratis studiestøtte og veiledning for skoleelever",
    icon: BookOpen,
    schedule: "Ukentlig",
    ageGroup: "6-18 år",
    image: "/youth/homework.jpg",
    time: "16:00-18:00",
  },
  {
    id: 3,
    name: "Sport på TV",
    description: "Følg store kamper sammen med andre fans",
    icon: "📺",
    schedule: "Ukentlig",
    ageGroup: "Alle aldre",
    image: "/youth/sports-tv.jpg",
    time: "Avhengig av kamp",
  },
  {
    id: 4,
    name: "Kurs & Temakvelder",
    description: "Lær nye ferdigheter og delta i spennende workshops",
    icon: Sparkles,
    schedule: "Månedlig",
    ageGroup: "Alle aldre",
    image: "/youth/workshops.jpg",
    time: "18:00-20:00",
  },
  {
    id: 5,
    name: "Sosiale kvelder",
    description: "Uformelle samlinger med spill, musikk og prat",
    icon: Coffee,
    schedule: "Ukentlig",
    ageGroup: "13-24 år",
    image: "/youth/social.jpg",
    time: "17:00-22:00",
  },
  {
    id: 6,
    name: "Filmkvelder",
    description: "Visning av filmer fra hele verden med diskusjon etterpå",
    icon: Film,
    schedule: "Annenhver uke",
    ageGroup: "Alle aldre",
    image: "/youth/movie.jpg",
    time: "19:00-22:00",
  },
  {
    id: 7,
    name: "Musikkworkshops",
    description: "Lær å spille instrumenter eller delta i kor",
    icon: Music,
    schedule: "Månedlig",
    ageGroup: "10+ år",
    image: "/youth/music.jpg",
    time: "17:00-19:00",
  },
  {
    id: 8,
    name: "Gaming Arena",
    description: "Dedikert gaming-område med moderne utstyr",
    icon: Gamepad2,
    schedule: "Daglig",
    ageGroup: "10+ år",
    image: "/youth/gaming.jpg",
    time: "14:00-20:00",
  },
];

const ActivityPage = () => {
  const [currentOutdoorSlide, setCurrentOutdoorSlide] = useState(0);
  const router = useRouter();
  const nextSlide = () => {
    setCurrentOutdoorSlide((prev) =>
      prev === outdoorActivities.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentOutdoorSlide((prev) =>
      prev === 0 ? outdoorActivities.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-red-600/5 py-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-48" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-48" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900/10 to-red-600/10 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-blue-900" />
              <span className="text-blue-900 font-semibold">
                Aktiviteter for hele familien
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Oppdag våre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
                fritidsaktiviteter
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fra idrett og gaming til kultur og natur — vi har noe for alle.
              Alle aktiviteter er gratis og åpne for hele samfunnet.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Sports & Physical Activities */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Idrett & Fysisk Aktivitet
                </h2>
                <p className="text-gray-600 mt-2">
                  Hold deg aktiv og møt nye venner gjennom våre sportstilbud
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sportsActivities.map((sport) => (
              <div
                key={sport.id}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative">
                    <div className="aspect-square md:aspect-auto md:h-full relative">
                      <div className={``}>
                        <Image
                          src={sport.image}
                          alt="football image"
                          width={800}
                          height={800}
                          priority
                          className="w-[380px] h-[380px]"
                        />
                      </div>
                      <div className="absolute top-4 left-4 z-30">
                        <div
                          className={`p-2 rounded-lg ${sport.color} bg-opacity-90`}
                        >
                          {typeof sport.icon === "string" ? (
                            <span className="text-xl text-white">
                              {sport.icon}
                            </span>
                          ) : (
                            <sport.icon className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {sport.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{sport.location}</span>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                        {sport.participants}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">{sport.description}</p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-900" />
                        <div>
                          <div className="text-sm text-gray-500">Tidspunkt</div>
                          <div className="font-medium text-gray-900">
                            {sport.schedule}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          Gratis for alle medlemmer
                        </div>
                        <button
                          onClick={() => router.push("/kontakt")}
                          className="px-6 py-2.5 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
                        >
                          <span>Påmelding</span>
                          <ArrowRight className="w-4 h-4" />
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

      {/* Section 2: Outdoor & Nature Activities */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Friluftsliv & Natur
                </h2>
                <p className="text-gray-600 mt-2">
                  Utforsk Østfolds vakre natur sammen med oss
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorActivities.map((activity) => (
              <div
                key={activity.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-green-600/10" />
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700" />

                  {/* Activity Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {activity.difficulty}
                      </span>
                      <span className="text-sm text-white/90">
                        {activity.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-300 font-medium">
                        {activity.date}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Season Info & CTA */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Turer hele året
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Vår", "Sommer", "Høst", "Vinter"].map((season) => (
                    <div key={season} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-gray-700">{season} turer</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                  Bli med på vår neste tur
                </button>
                <p className="text-gray-600 text-sm mt-3">
                  Alle utstyr og veiledning inkludert
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Gaming & E-sport */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-600 to-red-500 rounded-xl">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Gaming & E-sport
                </h2>
                <p className="text-gray-600 mt-2">
                  For alle spillentusiaster – fra casual til competitive
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gamingActivities.map((game) => (
              <div
                key={game.id}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex">
                  {/* Image Section */}
                  <div className="w-2/5 relative">
                    <div>
                      <Image
                        src={game.image}
                        alt="gaming image"
                        width={800}
                        height={800}
                        className="w-full h-[380px]"
                      />
                    </div>
                    <div className="absolute top-4 left-4 z-10">
                      <div className="p-2 bg-red-600/90 rounded-lg">
                        {typeof game.icon === "string" ? (
                          <span className="text-xl text-white">
                            {game.icon}
                          </span>
                        ) : (
                          <game.icon className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-3/5 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {game.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{game.schedule}</span>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                        {game.ageGroup}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {game.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Utstyr:</div>
                      <div className="font-medium text-gray-900">
                        {game.equipment}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {game.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300">
                      Meld deg på
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Youth House / Social Space */}
      <section className="py-16 relative bg-gradient-to-br from-blue-900/5 via-purple-50/30 to-red-600/5">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Fredrikstad Flerkulturelt Ungdomshus
                </h2>
                <p className="text-gray-600 mt-2">
                  Et trygt og inkluderende sted for barn og unge (6-24 år)
                </p>
              </div>
            </div>
          </div>

          {/* Youth House Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {youthHouseActivities.map((activity) => (
              <div
                key={activity.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-500/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Activity Icon */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      {typeof activity.icon === "string" ? (
                        <span className="text-xl text-white">
                          {activity.icon}
                        </span>
                      ) : (
                        <activity.icon className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Activity Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {activity.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-3 line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/90">
                        <div>{activity.schedule}</div>
                        <div>{activity.time}</div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Youth House Info */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-3 bg-gradient-to-br from-purple-600/10 to-purple-500/10 rounded-xl mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Åpningstider</h4>
                <p className="text-gray-600">Mandag - Fredag: 14:00-20:00</p>
                <p className="text-gray-600">Lørdag: 12:00-18:00</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 bg-gradient-to-br from-purple-600/10 to-purple-500/10 rounded-xl mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">For hvem?</h4>
                <p className="text-gray-600">Barn og unge mellom 6-24 år</p>
                <p className="text-gray-600">Alle kulturer og bakgrunner</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 bg-gradient-to-br from-purple-600/10 to-purple-500/10 rounded-xl mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Trygt miljø</h4>
                <p className="text-gray-600">Profesjonell veiledning</p>
                <p className="text-gray-600">Krisehåndtering på plass</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 rounded-4xl p-12 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Sparkles className="w-5 h-5" />
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
                <button className="px-8 py-4 bg-white text-blue-900 rounded-2xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Se alle aktiviteter
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                  <Users className="w-5 h-5" />
                  Kontakt oss
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold">40+</div>
                    <div className="text-blue-200 text-sm">
                      Årlige aktiviteter
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
