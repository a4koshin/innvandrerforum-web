"use client";
import Image from "next/image";

const ArrangementerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-red-600/5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-48" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-48" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Årlige{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-red-600 animate-gradient bg-300%">
                Arrangementer
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Gøyale aktiviteter som samler alle for uforglemmelige opplevelser.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        {/* First section - Fotballturnering */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-2 lg:order-none">
            <div className="relative">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-900 to-red-600 bg-clip-text text-transparent">
                  Fotballturnering
                </span>
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 to-red-500 rounded-full"></span>
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Fotballturneringen er et årlig arrangement som samler ungdom og
                familier i Østfold fylke. Gjennom idrett ønsker vi å skape
                engasjement, fellesskap og inkludering, med særlig fokus på
                samarbeid, fair play og sosial tilhørighet.
              </p>
              <p>
                Turneringen fungerer som en møteplass der mennesker fra ulike
                kulturer kan møtes, bygge relasjoner og styrke integrering,
                samtidig som den bidrar til aktiv deltakelse og positivt
                samspill i lokalsamfunnet.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-none group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/10 hover:shadow-blue-900/20 transition-all duration-500">
              <div className="relative aspect-[4/3] min-h-[300px] sm:min-h-[260px] md:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/football.jpg"
                  alt="Kino"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second section - Bowling */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-1 lg:order-none group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-500">
              <div className="relative aspect-[4/3] min-h-[300px] sm:min-h-[260px] md:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/bowling.jpeg"
                  alt="Bowling"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-2 lg:order-none">
            <div className="relative">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                  Bowling
                </span>
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-900 to-blue-500 rounded-full"></span>
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Bowlingkvelden er et sosialt arrangement som samler ungdom og
                familier i Østfold fylke. Gjennom lek og vennlig konkurranse
                ønsker vi å skape glede, fellesskap og inkludering, med særlig
                fokus på samvær, mestring og sosial tilhørighet.
              </p>
              <p>
                Aktiviteten fungerer som en møteplass der mennesker fra ulike
                kulturer kan møtes, bygge relasjoner og styrke integrering,
                samtidig som den bidrar til aktiv deltakelse og positive
                opplevelser i lokalsamfunnet.
              </p>
            </div>
          </div>
        </div>

        {/* Third section - Hyttetur */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-2 lg:order-none">
            <div className="relative">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-900 to-green-600 bg-clip-text text-transparent">
                  Hyttetur
                </span>
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full"></span>
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Hytteturen er et sosialt arrangement som samler ungdom og
                familier i Østfold fylke. Gjennom felles opplevelser i naturen
                ønsker vi å skape trygghet, fellesskap og inkludering, med
                særlig fokus på samhold, ro og sosial tilhørighet.
              </p>
              <p>
                Turen gir deltakerne mulighet til å møtes på tvers av kulturer,
                bygge relasjoner og styrke integrering, samtidig som den bidrar
                til aktiv deltakelse og positive opplevelser i fellesskapet.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-none group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all duration-500">
              <div className="relative aspect-[4/3] min-h-[300px] sm:min-h-[260px] md:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/cabin.jpg"
                  alt="Hyttetur"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth section - Kino */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-1 lg:order-none group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-amber-900/10 hover:shadow-amber-900/20 transition-all duration-500">
              <div className="relative aspect-[4/3] min-h-[300px] sm:min-h-[260px] md:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/cinema.jpeg"
                  alt="Kino"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-2 lg:order-none">
            <div className="relative">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-amber-900 to-orange-600 bg-clip-text text-transparent">
                  Kino
                </span>
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full"></span>
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Kinokvelden er et sosialt arrangement som samler ungdom og
                familier i Østfold fylke. Gjennom felles filmopplevelser ønsker
                vi å skape glede, fellesskap og inkludering, med særlig fokus på
                samvær, tilhørighet og kulturell forståelse.
              </p>
              <p>
                Aktiviteten fungerer som en møteplass der mennesker fra ulike
                kulturer kan møtes, dele opplevelser og styrke integrering,
                samtidig som den bidrar til aktiv deltakelse og positive
                øyeblikk i lokalsamfunnet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default ArrangementerPage;
