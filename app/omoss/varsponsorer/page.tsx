import React from "react";
import Image from "next/image";
import { Status } from "@/constants/status";

const page = () => {
  return (
    <div>
      {/* Enhanced Stats Section - Social Proof with Visual Context */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16 lg:mb-20 relative">
          {/* Section header - compact */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Våre sponsorer
              </span>
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
            </div>
          </div>
        </div>

        {/* Enhanced logos grid with hover effects */}
        <div className="relative">
          <div className="relative mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-8 lg:gap-8">
            {Status.map((stat, index) => (
              <div
                key={stat.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background card */}
                <div
                  className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                shadow-gray-200/50 dark:shadow-gray-900/20 
                group-hover:shadow-xl group-hover:shadow-blue-200/30 dark:group-hover:shadow-blue-900/20
                group-hover:scale-105 transition-all duration-500 ease-out
                opacity-0 group-hover:opacity-100 -z-10"
                ></div>

                {/* Logo container with gradient border */}
                <div
                  className="relative h-20 md:h-24 p-4 md:p-6 
                rounded-xl border border-gray-100 dark:border-gray-800
                group-hover:border-transparent
                transition-all duration-500"
                >
                  {/* Logo with enhanced hover effects */}
                  <div className="relative h-full w-full">
                    <Image
                      src={stat.image}
                      alt={`"Partner"} logo`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                      className={`object-contain group-hover:opacity-100 
                      transition-all duration-500 ease-out
                      group-hover:scale-110`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
