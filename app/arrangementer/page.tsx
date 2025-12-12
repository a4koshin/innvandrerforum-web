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
              Velkommen til vårt fellesskap
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Innvandrerforum i Østfold er en frivillig organisasjon som
                representerer innvandrermiljøet i Østfold fylke. Vi jobber for å
                støtte og inkludere minoritetsungdom og familier, med særlig
                fokus på å motvirke sosial ekskludering, ensomhet og
                utenforskap.
              </p>
              <p>
                Gjennom organisasjon og nettverksbygging ønsker vi å skape
                møteplasser på tvers av kulturer, fremme integrering, og bidra
                til aktiv deltagelse i lokalsamfunnet.
              </p>
            </div>
          </div>
          {/* Enhanced Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group px-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/infoimg.png"
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
                    src="/infoimg.png"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Velkommen til vårt fellesskap
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Innvandrerforum i Østfold er en frivillig organisasjon som
                representerer innvandrermiljøet i Østfold fylke. Vi jobber for å
                støtte og inkludere minoritetsungdom og familier, med særlig
                fokus på å motvirke sosial ekskludering, ensomhet og
                utenforskap.
              </p>
              <p>
                Gjennom organisasjon og nettverksbygging ønsker vi å skape
                møteplasser på tvers av kulturer, fremme integrering, og bidra
                til aktiv deltagelse i lokalsamfunnet.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Velkommen til vårt fellesskap
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Innvandrerforum i Østfold er en frivillig organisasjon som
                representerer innvandrermiljøet i Østfold fylke. Vi jobber for å
                støtte og inkludere minoritetsungdom og familier, med særlig
                fokus på å motvirke sosial ekskludering, ensomhet og
                utenforskap.
              </p>
              <p>
                Gjennom organisasjon og nettverksbygging ønsker vi å skape
                møteplasser på tvers av kulturer, fremme integrering, og bidra
                til aktiv deltagelse i lokalsamfunnet.
              </p>
            </div>
          </div>
          {/* Enhanced Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group px-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/infoimg.png"
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
                    src="/infoimg.png"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Velkommen til vårt fellesskap
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Innvandrerforum i Østfold er en frivillig organisasjon som
                representerer innvandrermiljøet i Østfold fylke. Vi jobber for å
                støtte og inkludere minoritetsungdom og familier, med særlig
                fokus på å motvirke sosial ekskludering, ensomhet og
                utenforskap.
              </p>
              <p>
                Gjennom organisasjon og nettverksbygging ønsker vi å skape
                møteplasser på tvers av kulturer, fremme integrering, og bidra
                til aktiv deltagelse i lokalsamfunnet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <Image
              src="/fotbal1.JPG"
              alt="Fotball"
              width={60}
              height={60}
              className="rounded"
            />
            <div>
              <h3 className="font-medium text-gray-900">Fotballturnering</h3>
              <p className="text-sm text-gray-500">Årlig sommercup</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="font-medium text-gray-900">Sommerfest</h3>
              <p className="text-sm text-gray-500">Mat og musikk</p>
            </div>
            <Image
              src="/fotbal1.JPG"
              alt="Sommerfest"
              width={60}
              height={60}
              className="rounded"
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <Image
              src="/fotbal1.JPG"
              alt="Julemarked"
              width={60}
              height={60}
              className="rounded"
            />
            <div>
              <h3 className="font-medium text-gray-900">Julemarked</h3>
              <p className="text-sm text-gray-500">Håndverk og mat</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="font-medium text-gray-900">Kulturfestival</h3>
              <p className="text-sm text-gray-500">Lokal kultur og kunst</p>
            </div>
            <Image
              src="/fotbal1.JPG"
              alt="Kultur"
              width={60}
              height={60}
              className="rounded"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ArrangementerPage;
