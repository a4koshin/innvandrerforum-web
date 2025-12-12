// app/annual-event/components/EventCard.tsx
import React from "react";
import { Event } from "../types/event";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div
      className={`group relative h-full ${
        event.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Card Container */}
      <div
        className={`
        relative h-full rounded-2xl overflow-hidden
        bg-white border border-gray-200
        shadow-lg hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-2
        ${event.bgColor}
        group-hover:scale-[1.02]
      `}
      >
        {/* Featured Badge */}
        {event.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-white">
              ⭐ Most Popular
            </span>
          </div>
        )}

        {/* Icon/Header Section */}
        <div
          className={`p-6 bg-gradient-to-br ${event.color} relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white" />
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="text-4xl mb-2">{event.icon}</div>
              <h3 className="text-2xl font-bold text-white">{event.title}</h3>
            </div>
            {event.spotsLeft && event.spotsLeft < 10 && (
              <div className="text-right">
                <div className="text-sm text-white/90">Spots Left</div>
                <div className="text-2xl font-bold text-white">
                  {event.spotsLeft}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col h-[calc(100%-140px)]">
          <div className="flex-grow">
            {/* Date & Time */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 mr-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">{event.date}</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="text-sm text-gray-600">{event.time}</div>
            </div>

            {/* Location */}
            <div className="flex items-center mb-4 text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm font-medium">{event.location}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {event.description}
            </p>
          </div>

          {/* Button */}
          <button
            className={`
            w-full py-3 px-4 rounded-xl font-semibold
            transition-all duration-300
            transform hover:scale-[1.02] active:scale-[0.98]
            border-2
            bg-gradient-to-r ${event.color}
            text-white border-transparent
            hover:shadow-lg
            flex items-center justify-center gap-2
            group/button
          `}
          >
            {event.buttonText}
            <svg
              className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform"
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
          </button>

          {/* Limited Spots Warning */}
          {event.spotsLeft && event.spotsLeft < 5 && (
            <div className="mt-3 text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <svg
                  className="w-4 h-4 mr-1 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Kun {event.spotsLeft} plasser igjen!
              </span>
            </div>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
      </div>
    </div>
  );
};

export default EventCard;
