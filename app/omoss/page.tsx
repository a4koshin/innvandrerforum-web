import Image from "next/image";
import { Users, Target, Eye, Heart, Globe, Shield } from "lucide-react";
import { administration, boards, volunteers } from "@/constants/boards";
import BoardCard from "@/components/Board";
const OmossPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative overflow-hidden mb-12">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-48" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-48" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Om{" "}
                <span className="relative">
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-red-600/20 -rotate-1 z-0" />
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
                  Innvandrerforum i Østfold
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Vi bygger broer mellom kulturer og skaper et inkluderende
                fellesskap
              </p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Vår historie
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Velkommen til vårt fellesskap
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Innvandrerforum i Østfold er en frivillig organisasjon som
                  representerer innvandrermiljøet i Østfold fylke. Vi jobber for
                  å støtte og inkludere minoritetsungdom og familier, med særlig
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
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/10 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-900/10 rounded-2xl -rotate-12 group-hover:rotate-0 transition-transform duration-500" />

                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="relative w-full aspect-[4/3] min-h-[220px] sm:min-h-0">
                    <Image
                      src="/infoimg.png"
                      alt="Innvandrerforum i Østfold - fellesskap og kultur"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="group bg-white rounded-2xl p-8 transition-all duration-300 border border-blue-200 hover:border-blue-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vår misjon</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vår misjon er å fremme inkludering, fellesskap og tilhørighet
                for innvandrere — spesielt ungdom og familier — i Østfold. Vi
                ønsker å bygge bro mellom kulturer, motvirke utenforskap, og gi
                alle mulighet til sosial integrering, deltakelse og et aktivt
                liv.
              </p>
              <div className="mt-8 pt-6 border-t border-blue-200">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Inkludering
                  </span>
                  <span className="px-4 py-2 bg-purple-50 text-red-600 rounded-full text-sm font-medium">
                    Fellesskap
                  </span>
                  <span className="px-4 py-2 bg-green-50 text-green-500 rounded-full text-sm font-medium">
                    Integrering
                  </span>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl p-8 transition-all duration-300 border border-blue-200 hover:border-blue-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-600 rounded-xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vår visjon</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vår visjon er et samfunn hvor innvandrermiljøer er en naturlig
                del av det lokale fellesskapet, med like rettigheter, muligheter
                og verdighet for alle. Vi drømmer om et Østfold hvor hver enkelt
                føler seg sett, hørt og verdsatt.
              </p>
              <div className="mt-8 pt-6 border-t border-blue-200">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-50 text-green-500 rounded-full text-sm font-medium">
                    Likestilling
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Verdighet
                  </span>
                  <span className="px-4 py-2 bg-purple-50 text-red-600 rounded-full text-sm font-medium">
                    Muligheter
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-r from-blue-800 to-red-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">
              Våre verdier
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Fellesskap</h4>
                <p className="text-blue-100">
                  Bygger broer mellom ulike kulturer
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Omsorg</h4>
                <p className="text-blue-100">Støtter og inkluderer alle</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Trygghet</h4>
                <p className="text-blue-100">Skape trygge møteplasser</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Åpenhet</h4>
                <p className="text-blue-100">For alle kulturer og bakgrunner</p>
              </div>
            </div>
          </div>

          {/* Boards */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
            {/* Header  */}
            {/* Section header - compact */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Organisasjon – Styre og administrasjon
                </span>
                <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
              </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Board Members Section */}
              <div className="flex flex-col items-center justify-center min-h-[280px] mb-16 mt-12">
                <div className="w-full max-w-7xl">
                  <div className="mb-10 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-white mb-3 tracking-tight">
                      Boards
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                      Leadership team guiding our organization's vision and
                      strategy
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                    {boards.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-center transform transition-all duration-300 hover:scale-[1.02]"
                      >
                        <BoardCard
                          id={item.id}
                          img={item.img}
                          name={item.name}
                          title={item.title}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Administrators Section */}
              <div className="flex flex-col items-center justify-center min-h-[280px] mb-16">
                <div className="w-full max-w-7xl">
                  <div className="mb-10 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-white mb-3 tracking-tight">
                      Administrasjon
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                      Operational leaders managing day-to-day activities and
                      execution
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 justify-items-center">
                    {administration.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-center transform transition-all duration-300 hover:scale-[1.02]"
                      >
                        <BoardCard
                          id={item.id}
                          img={item.img}
                          name={item.name}
                          title={item.title}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Volunteers Section */}
              <div className="flex flex-col items-center justify-center min-h-[280px] mb-16">
                <div className="w-full max-w-7xl">
                  <div className="mb-10 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-white mb-3 tracking-tight">
                      Ressurspersoner og frivillige
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                      Dedicated individuals contributing their time and
                      expertise
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                    {volunteers.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-center transform transition-all duration-300 hover:scale-[1.02]"
                      >
                        <BoardCard
                          id={item.id}
                          img={item.img}
                          name={item.name}
                          title={item.title}
                        />
                      </div>
                    ))}
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

export default OmossPage;
