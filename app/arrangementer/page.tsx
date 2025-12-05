import Image from "next/image";
import React from "react";
import {
  Calendar,
  Users,
  Trophy,
  Gamepad2,
  MessageSquare,
  Music,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Årlig Fotballturnering",
    description:
      "En inkluderende fotballturnering for alle aldre og ferdighetsnivåer. Dette er vårt flaggskip-arrangement som samler hele fellesskapet.",
    category: "Sport",
    icon: Trophy,
    date: "25. Mai 2024",
    time: "10:00 - 16:00",
    location: "Østfold Stadion",
    participants: 120,
    color: "bg-gradient-to-br from-blue-900 to-blue-800",
    featured: true,
  },
  {
    id: 2,
    title: "EA Sports FIFA Gaming Turnering",
    description:
      "E-sport event for gaming-entusiaster. Årlig arrangement som samler unge og voksne for konkurranse og fellesskap.",
    category: "Gaming",
    icon: Gamepad2,
    date: "15. Juni 2024",
    time: "14:00 - 20:00",
    location: "Kulturhuset, Sarpsborg",
    participants: 45,
    color: "bg-gradient-to-br from-red-600 to-red-500",
    featured: true,
  },
  {
    id: 3,
    title: "Dialogmøter om Integrering",
    description:
      "Åpne diskusjoner og workshops om integrering, arbeidsliv og sosiale muligheter i Østfold.",
    category: "Dialog",
    icon: MessageSquare,
    date: "Ukentlig",
    time: "18:00 - 20:00",
    location: "Innvandrerforum lokaler",
    participants: 30,
    color: "bg-gradient-to-br from-blue-900/80 to-blue-800/80",
    featured: false,
  },
  {
    id: 4,
    title: "Kulturell Aften med Mat og Musikk",
    description:
      "En hyggelig kveld med tradisjonsmat, musikk og dans fra forskjellige kulturer.",
    category: "Kultur",
    icon: Music,
    date: "7. September 2024",
    time: "17:00 - 22:00",
    location: "Felleshuset Fredrikstad",
    participants: 80,
    color: "bg-gradient-to-br from-red-600/80 to-red-500/80",
    featured: false,
  },
];

const galleryImages = [
  { id: 1, src: "/work1.png", alt: "Fotballturnering 2024", category: "Sport" },
  { id: 2, src: "/work1.png", alt: "Gaming event", category: "Gaming" },
  { id: 3, src: "/work1.png", alt: "Kulturfest", category: "Kultur" },
  { id: 4, src: "/work1.png", alt: "Dialogmøte", category: "Dialog" },
  { id: 5, src: "/work1.png", alt: "Familiedag", category: "Fellesskap" },
  { id: 6, src: "/work1.png", alt: "Ungdomsarrangement", category: "Ungdom" },
];

const ArrangementerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-red-600/5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-48" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-48" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900/10 to-red-600/10 rounded-full mb-8">
              <Calendar className="w-5 h-5 text-blue-900" />
              <span className="text-blue-900 font-semibold">
                Aktiviteter & Arrangementer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Skape minner,{" "}
              <span className="relative">
                <span className="relative z-10">bygge</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-red-600/20 -rotate-1 z-0" />
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
                fellesskap
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vi arrangerer over 40 aktiviteter årlig — fra sport og gaming til
              kultur og dialog. Alle er velkommen til å delta og skape minner
              sammen.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">40+</div>
                <div className="text-gray-600">Årlige arrangementer</div>
              </div>
              <div className="h-12 w-px bg-gray-300 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-gray-600">Årlige deltakere</div>
              </div>
              <div className="h-12 w-px bg-gray-300 hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">100%</div>
                <div className="text-gray-600">Gratis deltakelse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-900">Kommende</span>{" "}
              <span className="text-red-600">hovedarrangementer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Blant våre mest populære årlige arrangementer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {events
              .filter((e) => e.featured)
              .map((event) => (
                <div
                  key={event.id}
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 ${event.color}`}
                  />

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${event.color}`}>
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                            {event.category}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 mt-2">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-900" />
                        <div>
                          <div className="text-sm text-gray-500">Dato</div>
                          <div className="font-semibold text-gray-900">
                            {event.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-red-600" />
                        <div>
                          <div className="text-sm text-gray-500">Tid</div>
                          <div className="font-semibold text-gray-900">
                            {event.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-900" />
                        <div>
                          <div className="text-sm text-gray-500">Sted</div>
                          <div className="font-semibold text-gray-900">
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-red-600" />
                        <div>
                          <div className="text-sm text-gray-500">Deltakere</div>
                          <div className="font-semibold text-gray-900">
                            {event.participants}+
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                      Meld deg på
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Event Categories Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Våre <span className="text-blue-900">aktivitetstyper</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Vi tilbyr et bredt spekter av arrangementer for alle interesser og
              aldre
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: "Sport",
                icon: Trophy,
                count: "12+",
                color: "from-blue-900 to-blue-800",
              },
              {
                title: "Gaming",
                icon: Gamepad2,
                count: "8+",
                color: "from-red-600 to-red-500",
              },
              {
                title: "Dialog",
                icon: MessageSquare,
                count: "15+",
                color: "from-blue-900/80 to-blue-800/80",
              },
              {
                title: "Kultur",
                icon: Music,
                count: "10+",
                color: "from-red-600/80 to-red-500/80",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.count} arrangementer årlig
                </p>
                <div className="flex items-center text-blue-900 font-medium text-sm">
                  Se arrangementer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Galleri fra{" "}
              <span className="text-red-600">tidligere arrangementer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Se bilder fra våre minneverdige sammenkomster
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <span className="inline-block px-3 py-1 bg-blue-900/10 text-blue-900 rounded-full text-sm font-medium mb-2">
                        {image.category}
                      </span>
                      <h4 className="font-bold text-gray-900">{image.alt}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-900 to-red-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Se flere bilder
              <ArrowRight className="w-5 h-5" />
            </button>
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
                <span className="font-semibold">Neste arrangement</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bli med på vårt neste arrangement!
              </h2>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Alle er velkommen! Enten du er ny i området eller har bodd her
                lenge — våre arrangementer er gratis og åpne for alle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-900 rounded-2xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  Se kalender
                  <Calendar className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                  Meld interesse
                  <Users className="w-5 h-5" />
                </button>
              </div>

              <p className="mt-8 text-blue-200 text-sm">
                ✨ Alle arrangementer er gratis • Ingen påmelding nødvendig •
                Tolk tilgjengelig ved behov
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArrangementerPage;
