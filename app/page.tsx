"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import EventCard from "@/components/EventCard";
import { events } from "@/constants/event";
export default function Home() {
  const [emailMessage, setEmailMessage] = useState<string>("");
  const router = useRouter();
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Foreground Content */}
        <div className="flex items-center justify-center h-full px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 backdrop-blur-sm bg-black/10 p-8 rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Innvandrerforum I Østfold
            </h1>

            <p className="text-xl md:text-md max-w-3xl mx-auto leading-relaxed">
              Et fellesskap som støtter, samler og inkluderer. Vi jobber hver
              dag for å motvirke utenforskap og skape positive møteplasser for
              barn, unge og familier i Østfold.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                variant="default"
                onClick={() => router.push("/omoss")}
                size="lg"
                className="bg-white text-black hover:bg-white/90 hover:scale-105 px-8 py-6 text-lg"
              >
                Les mer
              </Button>

              <Button
                variant="outline"
                onClick={() => router.push("/kontakt")}
                size="lg"
                className="bg-transparent border-white text-white hover:scale-105 hover:text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg border-2"
              >
                Kontakt oss
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Optimized spacing */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Stats grid - compact layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              value: "2,000+",
              label: "People Helped Annually",
              color: "text-blue-900 dark:text-blue-400",
            },
            {
              value: "15+",
              label: "Languages Spoken",
              color: "text-green-500 dark:text-emerald-400",
            },
            {
              value: "10+",
              label: "Years of Experience",
              color: "text-red-500 dark:text-red-400",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800/50 rounded-xl p-6  hover:bg-gray-50 transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Number - slightly smaller */}
                <div
                  className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color} leading-tight`}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <p className="text-base font-semibold text-gray-900 dark:text-white text-center">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information Section - Compact layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section header - compact */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Vårt informasjonsarbeid
              </span>
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
            </div>
          </div>

          {/* Content - tighter spacing */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            {/* Image - more compact */}
            <div className="lg:w-5/12">
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/infoimg.png"
                    width={600}
                    height={600}
                    alt="Information work helping immigrant communities in Østfold"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Floating stats overlay */}
                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Active Since 2013
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content - denser */}
            <div className="lg:w-7/12 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                  Styrking av innvandrerfellesskap gjennom viktig informasjon
                </h3>

                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p className="leading-rqelaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Immigrant Forum in Østfold
                    </span>{" "}
                    tilbyr kontinuerlig informasjon og veiledning til
                    innvandrergrupper i regionen.
                  </p>

                  <p className="leading-relaxed">
                    Vi arbeider for å sikre tilgang til rett informasjon om
                    helse, juridiske, arbeid, utdanning og integrering i det
                    norske samfunnet.
                  </p>
                </div>
              </div>
              {/* CTA - compact */}
              <div className="pt-4">
                <Button
                  onClick={() => {
                    router.push("/omoss");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Oppdag våre programmerer
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
            <div className="w-8 h-0.5 bg-blue-600" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Årlige Arrangementer
            </span>
            <div className="w-8 h-0.5 bg-blue-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Inspirerende årlige begivenheter
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Samler mennesker gjennom meningsfulle aktiviteter hele året.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-32">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* {"Office section"} */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section header - compact */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Kontoret vårt
              </span>
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
            </div>
          </div>

          {/* Content - tighter spacing */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            {/* Text content - denser */}
            <div className="lg:w-7/12 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                  Styrking av innvandrerfellesskap gjennom viktig informasjon
                </h3>

                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p className="leading-rqelaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Immigrant Forum in Østfold
                    </span>{" "}
                    tilbyr kontinuerlig informasjon og veiledning til
                    innvandrergrupper i regionen.
                  </p>

                  <p className="leading-relaxed">
                    Vi arbeider for å sikre tilgang til rett informasjon om
                    helse, juridiske, arbeid, utdanning og integrering i det
                    norske samfunnet.
                  </p>
                </div>
              </div>
              {/* CTA - compact */}
              <div className="pt-4">
                <Button
                  onClick={() => {
                    router.push("/omoss");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Oppdag våre programmerer
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            {/* Image - more compact */}
            <div className="lg:w-5/12">
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/office.jpg"
                    width={600}
                    height={600}
                    alt="Information work helping immigrant communities in Østfold"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Our Programs
            </span>
            <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Youth Empowerment
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide meaningful programs that help young people learn, grow,
            and become active contributors to their community.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            img="/work1.png"
            headline="Empowering Communities"
            description=" We are an organization dedicated to supporting and including
            immigrants in Østfold through targeted initiatives and community
            programs."
            buttonText="Les mer"
          />
          <Card
            img="/work2.png"
            headline="Empowering Communities"
            description=" We are an organization dedicated to supporting and including
            immigrants in Østfold through targeted initiatives and community
            programs."
            buttonText="Les mer"
          />
          <Card
            img="/work3.png"
            headline="Empowering Communities"
            description=" We are an organization dedicated to supporting and including
            immigrants in Østfold through targeted initiatives and community
            programs."
            buttonText="Les mer"
          />
        </div>
      </div>

      {/* Contact section */}
      <div className="px-4">
        <div className="mx-auto max-w-7xl md:w-[76rem]">
          <div className="text-center mb-24 bg-gradient-to-r from-blue-900 to-red-600 px-4 md:px-8  py-16 rounded-2xl">
            {/* Enhanced Header */}
            <div className="inline-flex items-center gap-2 text-gray-100 mb-4">
              <div className="w-8 h-0.5 bg-gray-100"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Join us
              </span>
              <div className="w-8 h-0.5 bg-gray-100"></div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-4">
              Join Our Community
            </h2>

            {/* Subtext */}
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our community and be part of a movement that empowers youth,
              builds connections, and creates positive change together.”
            </p>

            {/* Enhanced Input + Button Container */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 max-w-lg mx-auto">
              {/* Input Field */}
              <div className="flex-1">
                <input
                  type="text"
                  value={emailMessage}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmailMessage(e.target.value)
                  }
                  placeholder="Write your message"
                  className="w-full h-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-100 focus:outline-none focus:ring focus:ring-white focus:bg-white/20 transition-all duration-300 hover:bg-white/15"
                />
              </div>

              {/* Button */}
              <a
                href={`mailto:innvandrerforumiostfold@gmail.com?subject=Message%20to%20from%20–%20the%20Your%20Website&body=${encodeURIComponent(
                  emailMessage
                )}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap min-w-[140px]"
              >
                Join Us
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
