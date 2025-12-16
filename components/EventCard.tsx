"use client";

import React from "react";
import { Event } from "@/constants/event";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col rounded-xl overflow-hidden w-72 bg-white shadow-lg border border-gray-100">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

        {/* Keep preview text equal */}
        <p className="text-gray-600 mb-8 line-clamp-4">{event.description}</p>

        {/* Button ALWAYS bottom */}
        <Button
          onClick={() => router.push("/arrangementer")}
          className="mt-auto w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Les mer
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
