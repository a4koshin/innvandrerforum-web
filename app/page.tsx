"use client";
import React, { act, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import EventCard from "@/components/EventCard";
import { events } from "@/constants/event";
import ActivityCard from "@/components/ActivityCard";
import { Status } from "@/constants/status";
// import { weeklyActivities, monthlyActivities } from "@/constants/activities";
import {
  weeklyActivities,
  monthlyActivities,
} from "@/constants/HeroActivities";
import HeroActivityCard from "@/components/HeroActivityCard";

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
      {/* Enhanced Stats Section - Social Proof with Visual Context */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16 lg:mb-20 relative">
          {/* Section header - compact */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Våre samarbeidspartnere og støttespiller
              </span>
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
            </div>
          </div>
        </div>

        {/* Enhanced logos grid with hover effects and improved name display */}
        <div className="relative">
          <div className="relative mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 lg:gap-4">
            {Status.map((stat, index) => (
              <div
                key={stat.id}
                className="group relative flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background card - Now includes name area */}
                <div
                  className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
            shadow-gray-200/50 dark:shadow-gray-900/20 
            group-hover:shadow-xl group-hover:shadow-blue-200/30 dark:group-hover:shadow-blue-900/20
            group-hover:scale-[1.02] transition-all duration-500 ease-out
            opacity-0 group-hover:opacity-100 -z-10"
                ></div>

                {/* Logo container with integrated name display */}
                <div
                  className="relative w-full p-4 md:p-5 
            rounded-xl border border-gray-100 dark:border-gray-800
            group-hover:border-transparent
            transition-all duration-500
            flex flex-col items-center gap-6"
                >
                  {/* Logo with enhanced hover effects */}
                  <div className="relative h-16 w-full md:h-20">
                    <Image
                      src={stat.image}
                      alt={`"${stat.name}" logo`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                      className={`object-contain group-hover:opacity-100 
                  transition-all duration-500 ease-out
                  group-hover:scale-110`}
                      loading="lazy"
                    />
                  </div>

                  {/* Enhanced name display with better typography and positioning */}
                  <div className="w-full text-center">
                    <h3
                      className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base 
              transition-all duration-300
              group-hover:text-blue-600 dark:group-hover:text-blue-400
              line-clamp-2"
                    >
                      {stat.name}
                    </h3>

                    {/* Optional: Add subtle description or tagline if available */}
                    {stat.description && (
                      <p
                        className="text-xs text-gray-500 dark:text-gray-400 mt-1 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        {stat.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* arrangementer Section */}

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
            Våre aktiviteter og arrangementer.
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Samler mennesker gjennom meningsfulle aktiviteter hele året.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 place-items-center sm:place-items-stretch sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
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
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
              <div className="w-8 h-0.5 bg-blue-600" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Kontoret vårt
              </span>
              <div className="w-8 h-0.5 bg-blue-600" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Et knutepunkt for tilknytning og inkludering
            </h2>

            {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Samler mennesker gjennom meningsfulle aktiviteter hele året.
            </p> */}
          </div>

          {/* Content - tighter spacing */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            {/* Text content - denser */}
            <div className="lg:w-7/12 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                  Et tilgjengelig møtested for innvandrermiljøet
                </h3>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Immigrant Forum in Østfold
                    </span>{" "}
                    operates an open, welcoming, and accessible office where
                    members of the immigrant community can receive guidance,
                    support, and reliable information.
                  </p>

                  <p className="leading-relaxed">
                    The office serves as a physical meeting point for
                    consultations, dialogue, and community activities,
                    contributing to stronger inclusion, meaningful engagement,
                    and active participation in society.
                  </p>

                  <div className="pt-2">
                    <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      Åpningstider
                    </h2>

                    <p className="font-medium">
                      Tirsdag og onsdag:{" "}
                      <span className="font-semibold">18:00 – 22:30</span>
                    </p>
                    <p className="font-medium">
                      Fredag:{" "}
                      <span className="font-semibold">17:00 – 21:00</span>
                    </p>
                    <p className="font-medium">
                      Lørdag og søndag:{" "}
                      <span className="font-semibold">15:00 – 23:00</span>
                    </p>
                  </div>
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
                  besøk oss
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
                    src="/ourOffice.jpg"
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
            <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Vårt aktivitetsprogram
            </span>
            <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ungdomsstyrking
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Vi tilbyr meningsfulle programmer som hjelper unge mennesker med å
            lære, vokse og bli aktive bidragsytere i lokalsamfunnet sitt.
          </p>
        </div>

        {/* FLEX CONTENT */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Weekly Activities */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 justify-items-center">
              {weeklyActivities.map((activity) => (
                <HeroActivityCard
                  key={activity.id}
                  image={activity.image}
                  title={activity.name}
                  description={activity.description}
                  location={activity.location}
                  time={activity.time}
                  day={activity.day}
                  buttonText="Meld interesse"
                  accent="red"
                  icon={activity.icon}
                />
              ))}
            </div>
          </div>

          {/* Monthly Activities */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 justify-items-center">
              {monthlyActivities.map((activity) => (
                <HeroActivityCard
                  key={activity.id}
                  image={activity.image}
                  title={activity.name}
                  description={activity.description}
                  location={activity.location}
                  time={activity.schedule}
                  buttonText="Meld deg på"
                  accent="blue"
                  icon={activity.icon}
                />
              ))}
            </div>
          </div>
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
                Bli med oss
              </span>
              <div className="w-8 h-0.5 bg-gray-100"></div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-4">
              Bli med i fellesskapet vårt
            </h2>

            {/* Subtext */}
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Bli med i fellesskapet vårt og bli en del av en bevegelse som
              styrker ungdom, bygger forbindelser og skaper positiv endring
              sammen.»
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
                  placeholder="skriv meldingen din"
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
                Bli med oss
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
