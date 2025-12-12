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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
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
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fotballturnering
            </h2>
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
          {/* Enhanced Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group px-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/footballTournament.jpg"
                    alt="Innvandrerforum i Østfold - fellesskap og kultur"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          {/* Enhanced Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group px-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/bowling.jpeg"
                    alt="Innvandrerforum i Østfold - fellesskap og kultur"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bowling</h2>
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

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hyttetur</h2>
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
          {/* Enhanced Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group px-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/cabinTour.jpg"
                    alt="Innvandrerforum i Østfold - fellesskap og kultur"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          {/* Enhanced Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group px-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/cinema.jpeg"
                    alt="Innvandrerforum i Østfold - fellesskap og kultur"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kino</h2>
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
    </div>
  );
};

export default ArrangementerPage;
