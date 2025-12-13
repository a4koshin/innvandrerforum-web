"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type ActivityCardProps = {
  image: string;
  title: string;
  description: string;
  location: string;
  time: string;
  day?: string;
  buttonText: string;
  accent: "blue" | "red";
  icon?: LucideIcon;
};

const ActivityCard = ({
  image,
  title,
  description,
  location,
  time,
  day,
  buttonText,
  accent,

  icon: Icon,
}: ActivityCardProps) => {
  const router = useRouter();

  const accentIcon = accent === "blue" ? "text-blue-900" : "text-red-600";
  const accentButton =
    accent === "blue" ? "from-blue-900 to-blue-800" : "from-red-600 to-red-500";

  return (
    <div className="w-full max-w-[600px] sm:max-w-[700px] lg:max-w-[900px] bg-white rounded-2xl shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="md:flex">
        {/* Image Section - ONLY CHANGED THIS PART */}
        <div className="group md:w-3/5 relative overflow-hidden">
          <div className="aspect-square md:aspect-auto md:h-full relative">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Content Section - NO CHANGES HERE */}
        <div className="md:w-3/5 p-6">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              {Icon && <Icon className={`w-6 h-6 ${accentIcon}`} />}
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{description}</p>

          <div className="space-y-4">
            {/* Time */}
            <div className="flex items-center gap-3">
              <Clock className={`w-5 h-5 ${accentIcon}`} />
              <div>
                <div className="text-sm text-gray-500">
                  {day ? "Tid" : "Når"}
                </div>
                <div className="font-medium text-gray-900">{time}</div>
              </div>
            </div>

            {/* Day (weekly only) */}
            {day && (
              <div className="flex items-center gap-3">
                <Calendar className={`w-5 h-5 ${accentIcon}`} />
                <div>
                  <div className="text-sm text-gray-500">Dag</div>
                  <div className="font-medium text-gray-900">{day}</div>
                </div>
              </div>
            )}

            {/* Button */}
            <div className="pt-4 border-t border-gray-100">
              <Button
                onClick={() => router.push("/kontakt")}
                className={`w-full py-2.5 bg-gradient-to-r ${accentButton} text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 cursor-pointer`}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
