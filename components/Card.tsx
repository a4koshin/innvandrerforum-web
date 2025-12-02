import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  img: string | StaticImageData;
  headline: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  headline,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={img}
          alt={headline}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        {/* Headline */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {headline}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Button */}
        <Button
          variant="outline"
          className="w-full group/btn justify-between border-gray-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
          onClick={onClick}
          aria-label={`View ${headline} project`}
        >
          <span>{buttonText}</span>
          <ArrowRight
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
