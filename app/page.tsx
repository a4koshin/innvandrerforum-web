"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

export default function Home() {
  const [emailMessage, setEmailMessage] = useState<string>("");
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Background */}
        <div className="absolute inset-0 z-0">
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

          {/* Content centered vertically & horizontally */}
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="space-y-6 backdrop-blur-sm bg-black/10 p-8 rounded-2xl">
                {/* Heading, paragraph, buttons etc */}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Text Content */}
            <div className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-2xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Innvandrerforum I Østfold
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Vi arbeider for å støtte og inkludere minoritetsungdom og
                familier, med særlig fokus på å motvirke sosial ekskludering,
                ensomhet og utenforskap.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 hover:scale-105 px-8 py-6 text-lg"
                >
                  Les mer
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:scale-105 hover:text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg border-2"
                >
                  Kontakt oss
                </Button>
              </div>
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
        <div className="max-w-6xl mx-auto">
          {/* Section header - compact */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Our Information Work
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
                  Empowering Immigrant Communities Through Essential Information
                </h3>

                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p className="leading-rqelaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Immigrant Forum in Østfold
                    </span>{" "}
                    provides continuous information and awareness activities for
                    immigrant communities across the region.
                  </p>

                  <p className="leading-relaxed">
                    We ensure communities receive essential guidance on health
                    matters, legal rights, employment opportunities, education
                    pathways, and integration processes.
                  </p>
                </div>
              </div>
              {/* CTA - compact */}
              <div className="pt-4">
                <Button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  Discover Our Programs
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
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Our Mission
            </span>
            <div className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Empowering Communities
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are an organization dedicated to supporting and including
            immigrants in Østfold through targeted initiatives and community
            programs.
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Youth Empowerment */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-transparent dark:from-blue-900/10 rounded-full -translate-y-16 translate-x-16"></div>

            {/* Icon */}
            <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-900 text-white mb-6">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 3.75v-3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.375m0 0h4.5m-4.5 0v-6m0 6h4.5"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
              Youth Empowerment
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Equipping young immigrants with skills, education, and
              opportunities to become leaders in their communities and active
              participants in Norwegian society.
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-8">
              {[
                "Leadership Programs",
                "Educational Support",
                "Career Guidance",
                "Cultural Exchange",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <svg
                    className="w-4 h-4 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Link */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-900 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Learn more about our youth programs
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
              </a>
            </div>
          </div>

          {/* Card 2: Cultural Development */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100/30 to-transparent dark:from-emerald-900/10 rounded-full -translate-y-16 translate-x-16"></div>

            {/* Icon */}
            <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-600 text-white mb-6">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Cultural Development
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Fostering cultural understanding and preserving heritage while
              promoting integration and mutual respect between diverse
              communities in Østfold.
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-8">
              {[
                "Cultural Events",
                "Language Programs",
                "Heritage Preservation",
                "Cross-cultural Dialogues",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Link */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-green-600 dark:text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Explore cultural initiatives
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
              </a>
            </div>
          </div>

          {/* Card 3: Community Engagement */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100/30 to-transparent dark:from-violet-900/10 rounded-full -translate-y-16 translate-x-16"></div>

            {/* Icon */}
            <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-400 text-white mb-6">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-violet-400 transition-colors">
              Community Engagement
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Building strong, inclusive communities through active
              participation, volunteer opportunities, and collaborative projects
              that bring people together.
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-8">
              {[
                "Volunteer Programs",
                "Community Projects",
                "Social Integration",
                "Network Building",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Link */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-red-600 dark:text--400 font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Get involved today
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
              </a>
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
      <div className="mx-auto max-w-7xl text-center mb-24 bg-gray-100 px-4 sm:px-6 md:px-8 py-16 rounded-2xl">
        <div className="">
          {/* Enhanced Header */}
          <div className="inline-flex items-center gap-2 text-blue-900 mb-4">
            <div className="w-8 h-0.5 bg-blue-900"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Join us
            </span>
            <div className="w-8 h-0.5 bg-blue-900"></div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
            Join Our Community
          </h2>

          {/* Subtext */}
          <p className="text-lg text-blue-900/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            oin our community and be part of a movement that empowers youth,
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
                className="w-full h-full px-4 py-3 bg-white border border-blue-900 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring focus:ring-blue-900 focus:border-blue-900 transition-all duration-300 hover:border-blue-300"
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
    </>
  );
}
