import React from "react";
import Image from "next/image";
import { Status } from "@/constants/status";

const SponsorsPage = () => {
  return (
    <>
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
                Våre sponsorer
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vi bygger broer mellom kulturer og skaper et inkluderende
              fellesskap
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        {/* Enhanced Stats Section - Social Proof with Visual Context */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Section header with enhanced decorative elements */}
          <div className="text-center mb-20 lg:mb-24 relative">
            {/* Animated background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Enhanced logos grid with sophisticated hover effects */}
          <div className="relative">
            {/* Grid background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10 rounded-3xl -z-10"></div>

            <div className="relative mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
              {Status.map((stat, index) => (
                <div
                  key={stat.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Enhanced card with glass morphism */}
                  <div
                    className="relative h-28 sm:h-32 md:h-36 p-5 md:p-6 
                  bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                  rounded-2xl border border-gray-200/50 dark:border-gray-700/50
                  group-hover:border-transparent
                  shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30
                  group-hover:shadow-2xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-900/20
                  transition-all duration-500 ease-out
                  group-hover:-translate-y-2
                  overflow-hidden"
                  >
                    {/* Hover gradient overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-purple-50/0 
                    group-hover:from-blue-50/30 group-hover:to-purple-50/30 
                    dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10
                    transition-all duration-500 opacity-0 group-hover:opacity-100"
                    ></div>

                    {/* Logo container */}
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div
                        className="relative w-full h-full transform transition-all duration-700 ease-out
                      group-hover:scale-110 group-hover:rotate-[0.5deg]"
                      >
                        <Image
                          src={stat.image}
                          alt={`${stat.name || "Partner"} logo`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 200px"
                          className={`object-contain opacity-90 group-hover:opacity-100 
                            transition-all duration-500 ease-out
                            filter group-hover:brightness-110
                            drop-shadow-lg group-hover:drop-shadow-xl`}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 
                    w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-900 to-red-500
                    transition-all duration-500 rounded-full"
                    ></div>
                  </div>

                  {/* Company name on hover */}
                  {/* <div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2
                  opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                  transition-all duration-300 pointer-events-none"
                  >
                  <span
                  className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap px-3 py-1
                  bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg"
                  >
                  {stat.name || "Partner"}
                  </span>
                  </div> */}
                </div>
              ))}
            </div>

            {/* Call to action section */}
            <div className="mt-20 text-center">
              <div
                className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 
              bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900
              rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg"
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Bliv en del av vårt nettverk
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-lg">
                    Er du interessert i å bli sponsor? Kontakt oss for å
                    diskutere mulighetene.
                  </p>
                </div>
                <button
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                hover:from-blue-700 hover:to-purple-700
                text-white font-semibold rounded-full
                transition-all duration-300 transform hover:-translate-y-0.5
                shadow-lg hover:shadow-xl hover:shadow-blue-500/25
                active:scale-95 whitespace-nowrap"
                >
                  Kontakt oss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsPage;
