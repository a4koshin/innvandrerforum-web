// app/annual-event/components/EventCard.tsx
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
    <div className="group relative rounded-xl overflow-hidden w-[310px] h-[430px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-3">{event.description}</p>

        {/* Button */}
        <Button
          onClick={() => {
            router.push("/arrangementer");
          }}
          className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Les mer
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
