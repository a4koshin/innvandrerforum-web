import Image from "next/image";
import React from "react";
import {
  Trophy,
  Gamepad2,
  Mountain,
  Users,
  Heart,
  BookOpen,
  Film,
  Music,
  Target,
  Coffee,
  Calendar,
  Star,
  Globe,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { IoFootball } from "react-icons/io5";
const activities = [
  {
    category: "Idrett & Fysisk Aktivitet",
    icon: Trophy,
    color: "from-blue-900 to-blue-800",
    items: [
      {
        name: "Fotballturneringer",
        participants: "120+",
        frequency: "Månedlig",
      },
      {
        name: "Bowlingkvelder",
        participants: "40+",
        frequency: "Annenhver uke",
      },
      { name: "Svømmeaktiviteter", participants: "35+", frequency: "Månedlig" },
      { name: "Paintball", participants: "25+", frequency: "Kvartalsvis" },
    ],
    description:
      "Fysisk aktivitet for alle aldre og ferdighetsnivåer. Fokus på helse, fellesskap og glede.",
    stat: "Over 200 deltakere årlig",
  },
  {
    category: "Friluftsliv & Turer",
    icon: Mountain,
    color: "from-green-700 to-emerald-600",
    items: [
      { name: "Organiserte turer", participants: "30+", frequency: "Månedlig" },
      {
        name: "Naturopplevelser",
        participants: "25+",
        frequency: "Kvartalsvis",
      },
      { name: "Fjellturer", participants: "20+", frequency: "Sesongbasert" },
      { name: "Sykketurer", participants: "15+", frequency: "Annenhver uke" },
    ],
    description:
      "Utforsk Østfolds vakre natur sammen med andre. Perfekt for nyankomne og ungdom.",
    stat: "15+ turer årlig",
  },
  {
    category: "Gaming & E-sport",
    icon: Gamepad2,
    color: "from-red-600 to-red-500",
    items: [
      {
        name: "EA Sports FIFA-turnering",
        participants: "45+",
        frequency: "Årlig",
      },
      { name: "E-sport kvelder", participants: "30+", frequency: "Ukentlig" },
      {
        name: "Gaming-turneringer",
        participants: "25+",
        frequency: "Månedlig",
      },
      { name: "Retro-gaming", participants: "20+", frequency: "Månedlig" },
    ],
    description:
      "For alle gaming-enthusiaster. Konkurranse, fellesskap og gøy for alle aldre.",
    stat: "Årlig mesterskap",
  },
  {
    category: "Ungdomshus & Møteplass",
    icon: Users,
    color: "from-purple-700 to-purple-600",
    items: [
      {
        name: "Fredrikstad Flerkulturelt Ungdomshus",
        participants: "100+",
        frequency: "Daglig",
      },
      {
        name: "Leksehjelp & Studiestøtte",
        participants: "40+",
        frequency: "Ukentlig",
      },
      {
        name: "Kurs & Temakvelder",
        participants: "35+",
        frequency: "Månedlig",
      },
      {
        name: "Trygt sosialt miljø",
        participants: "6-24 år",
        frequency: "Åpent hele året",
      },
    ],
    description:
      "Et trygt, inkluderende miljø for barn og unge (6-24 år) med varierte tilbud.",
    stat: "500+ ukentlige besøk",
  },
  {
    category: "Sosiale & Kulturelle Arrangementer",
    icon: Heart,
    color: "from-pink-600 to-rose-500",
    items: [
      { name: "Kulturkvelder", participants: "60+", frequency: "Månedlig" },
      {
        name: "Markeringer og feiringer",
        participants: "80+",
        frequency: "Kvartalsvis",
      },
      { name: "Filmkvelder", participants: "40+", frequency: "Annenhver uke" },
      {
        name: "Musikkarrangementer",
        participants: "50+",
        frequency: "Månedlig",
      },
    ],
    description:
      "Feiring av mangfold og fellesskap gjennom kulturelle og sosiale arrangementer.",
    stat: "30+ arrangementer årlig",
  },
  {
    category: "Aktivitetsportalen Fredrikstad",
    icon: Globe,
    color: "from-cyan-600 to-blue-500",
    items: [
      {
        name: "Digital aktivitetskalender",
        participants: "500+",
        frequency: "Løpende",
      },
      {
        name: "Påmelding og informasjon",
        participants: "Alle",
        frequency: "24/7",
      },
      {
        name: "Ressursbank",
        participants: "Samfunnet",
        frequency: "Alltid tilgjengelig",
      },
      {
        name: "Frivillighetsmuligheter",
        participants: "50+",
        frequency: "Kontinuerlig",
      },
    ],
    description:
      "Din digitale portal for alle aktiviteter og muligheter i Fredrikstad-området.",
    stat: "1000+ årlige brukere",
  },
];

const featuredPrograms = [
  {
    title: "Fredrikstad Flerkulturelt Ungdomshus",
    description:
      "Et trygt tilfluktssted for ungdom mellom 6-24 år med gaming, biljard, leksehjelp, kurs og mer.",
    ageGroup: "6-24 år",
    hours: "Åpent daglig",
    capacity: "100+ daglige besøk",
    icon: Shield,
    color: "bg-purple-100 border-purple-200",
    iconColor: "text-purple-700",
  },
  {
    title: "EA Sports FIFA Årlig Turnering",
    description:
      "Vårt største gaming-event som samler spillere fra hele Østfold for konkurranse og fellesskap.",
    ageGroup: "Alle aldre",
    hours: "Årlig arrangement",
    capacity: "45+ deltakere",
    icon: Gamepad2,
    color: "bg-red-100 border-red-200",
    iconColor: "text-red-700",
  },
  {
    title: "Fotball for Alle",
    description:
      "Inkluderende fotballaktiviteter uavhengig av ferdighetsnivå, kjønn eller bakgrunn.",
    ageGroup: "5-75 år",
    hours: "Månedlige turneringer",
    capacity: "120+ deltakere",
    icon: IoFootball,
    color: "bg-blue-100 border-blue-200",
    iconColor: "text-blue-900",
  },
  {
    title: "Leksehjelp & Karriereveiledning",
    description:
      "Gratis studiestøtte og veiledning for unge som trenger ekstra hjelp på skolen.",
    ageGroup: "10-25 år",
    hours: "Ukentlige sesjoner",
    capacity: "40+ deltakere",
    icon: BookOpen,
    color: "bg-green-100 border-green-200",
    iconColor: "text-green-700",
  },
];

const fritidsaktiviteter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-red-600/5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-48" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-48" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/10 to-red-600/10 px-6 py-3 rounded-2xl mb-8">
              <Sparkles className="w-5 h-5 text-blue-900" />
              <span className="text-blue-900 font-semibold">
                Tilbud for hele samfunnet
              </span>
              <Sparkles className="w-5 h-5 text-red-600" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Våre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
                aktiviteter
              </span>{" "}
              og{" "}
              <span className="relative">
                <span className="relative z-10">programmer</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-red-600/20 -rotate-1 z-0" />
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Vi tilbyr en bred variasjon av aktiviteter og programmer for alle
              aldre og interesser. Fra idrett og gaming til kultur og utdanning
              — alt med fokus på inkludering, fellesskap og personlig utvikling.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">40+</div>
                <div className="text-gray-600">Aktiviteter årlig</div>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600">Ukentlige deltakere</div>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Gratis deltakelse</div>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">6-75</div>
                <div className="text-gray-600">Aldersspenn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-900">Flaggskip</span>{" "}
              <span className="text-red-600">programmer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Våre mest populære og etablerte tilbud som har positiv påvirkning
              på samfunnet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {featuredPrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${program.color} border`}>
                    <program.icon className={`w-6 h-6 ${program.iconColor}`} />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-2">
                      Program
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Aldersgruppe:</span>
                    <span className="font-semibold text-blue-900">
                      {program.ageGroup}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Åpningstider:</span>
                    <span className="font-semibold text-red-600">
                      {program.hours}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Kapasitet:</span>
                    <span className="font-semibold text-blue-900">
                      {program.capacity}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
                  Les mer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Activities Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Utforsk alle <span className="text-blue-900">aktivitetene</span>{" "}
              våre
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Klikk på hver kategori for å se detaljer og påmeldingsinformasjon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${activity.color} p-8`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {activity.category}
                    </h3>
                  </div>
                  <p className="text-white/90 mt-4 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Activity Details */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {activity.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                      >
                        <div>
                          <div className="font-semibold text-gray-900">
                            {item.name}
                          </div>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-gray-500">
                              <Users className="w-3 h-3 inline mr-1" />
                              {item.participants}
                            </span>
                            <span className="text-sm text-gray-500">
                              <Calendar className="w-3 h-3 inline mr-1" />
                              {item.frequency}
                            </span>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-900/10 to-red-600/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-900/20 group-hover:to-red-600/20 transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-blue-900" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold text-gray-900">
                          {activity.stat}
                        </span>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-300">
                        Påmelding
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tilpassede tilbud for{" "}
              <span className="text-blue-900">alle aldre</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Vi har aktiviteter spesielt designet for ulike aldre og interesser
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                age: "6-12 år",
                title: "Barn",
                activities: [
                  "Gaming",
                  "Brettspill",
                  "Svømming",
                  "Kreative workshops",
                ],
                icon: Sparkles,
                color: "from-blue-900/20 to-blue-900/10",
              },
              {
                age: "13-18 år",
                title: "Ungdom",
                activities: [
                  "E-sport",
                  "Fotball",
                  "Leksehjelp",
                  "Sosiale arrangementer",
                ],
                icon: Gamepad2,
                color: "from-red-600/20 to-red-600/10",
              },
              {
                age: "19-30 år",
                title: "Ung voksen",
                activities: [
                  "Networking",
                  "Karrierekurs",
                  "Sport",
                  "Kulturarrangementer",
                ],
                icon: Users,
                color: "from-blue-900/20 to-blue-900/10",
              },
              {
                age: "31+ år",
                title: "Voksne & Familier",
                activities: [
                  "Familiedager",
                  "Kulturkvelder",
                  "Turer",
                  "Fellesskapsarrangementer",
                ],
                icon: Heart,
                color: "from-red-600/20 to-red-600/10",
              },
            ].map((group, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-6`}
                >
                  <group.icon className="w-8 h-8 text-blue-900" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {group.age}
                </div>
                <div className="text-lg font-semibold text-red-600 mb-4">
                  {group.title}
                </div>
                <ul className="space-y-3">
                  {group.activities.map((activity, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full" />
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 rounded-4xl p-12 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">
                  Aktivitetsportalen Fredrikstad
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Finn og meld deg på aktiviteter
              </h2>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Besøk vår digitale aktivitetsportal for å se alle tilgjengelige
                arrangementer, melde deg på, og holde deg oppdatert om kommende
                aktiviteter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-900 rounded-2xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  <Globe className="w-5 h-5" />
                  Gå til Aktivitetsportalen
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Last ned kalender
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-200 text-sm">
                  📍 Alle aktiviteter finner sted i Østfold • 💰 100% gratis
                  deltakelse • 🤝 Tolk tilgjengelig ved behov • 🎯 Tilpasset for
                  alle ferdighetsnivåer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default fritidsaktiviteter;
