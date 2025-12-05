import Image from "next/image";
import React from "react";
import { Users, Target, Eye, Heart, Globe, Shield } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Om <span className="text-blue-600">Innvandrerforum</span> i
              Østfold
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi bygger broer mellom kulturer og skaper et inkluderende
              fellesskap
            </p>
          </div>

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

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="font-medium">Frivillig organisasjon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Østfold fylke</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">Støtte og inkludering</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-red-400 rounded-3xl blur-xl opacity-20" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/infoimg.png"
                    alt="Innvandrerforum i Østfold - fellesskap og kultur"
                    width={800}
                    height={800}
                    priority
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white text-lg font-semibold">
                      Bygger broer • Fremmer fellesskap • Skaper muligheter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
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
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Inkludering
                  </span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    Fellesskap
                  </span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    Integrering
                  </span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl">
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
                  <span className="px-4 py-2 bg-white/80 text-gray-800 rounded-full text-sm font-medium border border-blue-200">
                    Likestilling
                  </span>
                  <span className="px-4 py-2 bg-white/80 text-gray-800 rounded-full text-sm font-medium border border-blue-200">
                    Verdighet
                  </span>
                  <span className="px-4 py-2 bg-white/80 text-gray-800 rounded-full text-sm font-medium border border-blue-200">
                    Muligheter
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
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
        </div>
      </section>
    </div>
  );
};

export default page;
