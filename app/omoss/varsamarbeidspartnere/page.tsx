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
              <span className="relative">
                <span className="absolute bottom-2 left-0 w-full h-3 bg-red-600/20 -rotate-1 z-0" />
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
                Våre samarbeidspartnere og støttespiller
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vi bygger broer mellom kulturer og skaper et inkluderende
              fellesskap
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        {/* Modern Stats Section with Company Names */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Modern Grid Layout */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent dark:via-blue-900/5 -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)] -z-10"></div>

            {/* Enhanced Grid with Names */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Status.map((stat, index) => (
                <div
                  key={stat.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Modern Card with Integrated Name */}
                  <div
                    className="relative h-full p-8 md:p-10
              bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
              rounded-3xl border border-gray-100 dark:border-gray-800
              shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20
              transition-all duration-500 ease-out
              group-hover:-translate-y-1
              overflow-hidden
              hover:border-blue-200 dark:hover:border-blue-900/30"
                  >
                    {/* Animated Background Glow */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-purple-50/0 
                group-hover:from-blue-100/30 group-hover:to-purple-100/30 
                dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10
                transition-all duration-700"
                    ></div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-bl-3xl"></div>

                    {/* Content Container */}
                    <div className="relative flex flex-col items-center text-center space-y-8">
                      {/* Logo Container with Enhanced Styling */}
                      <div
                        className={`relative ${
                          stat.width || "w-48"
                        } h-32 transition-all duration-500 ease-out
                  group-hover:scale-105 group-hover:drop-shadow-lg`}
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 
                    dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl 
                    transform transition-all duration-500 group-hover:scale-110"
                        ></div>

                        <div className="relative w-full h-full p-4">
                          <Image
                            src={stat.image}
                            alt={stat.name}
                            fill
                            className="object-contain opacity-90 group-hover:opacity-100 
                        transition-all duration-500 filter group-hover:brightness-110"
                            loading="lazy"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      {/* Company Name with Subtle Reveal */}
                      <div className="relative w-full">
                        {/* Company Name */}
                        <div className="relative">
                          <h3
                            className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 
                      transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white"
                          >
                            {stat.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsPage;
