import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface CardProject {
  img: string | StaticImageData;
  headline: string;
  description: string;
  btnTxt: string;
  tags?: string[]; // Optional tags for categorization
  link?: string; // Optional link for the card
  variant?: "default" | "featured" | "minimal"; // Different card styles
}

const Card: React.FC<CardProject> = ({
  img,
  headline,
  description,
  btnTxt,
  tags = [],
  link,
  variant = "default",
}) => {
  const CardContent = () => (
    <>
      {/* Image Container with Overlay */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl group-hover:rounded-b-2xl transition-all duration-500">
        <Image
          src={img}
          alt={headline}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-110"
          priority={variant === "featured"}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tags */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Hover Indicator */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-t-2xl transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Headline */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
          {headline}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Button with Icon */}
        <Button
          variant="outline"
          className="w-full group/btn justify-between mt-auto"
          asChild={!!link}
        >
          {link ? (
            <a href={link} className="flex items-center justify-between w-full">
              <span>{btnTxt}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </a>
          ) : (
            <>
              <span>{btnTxt}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </>
          )}
        </Button>
      </div>
    </>
  );

  // Featured variant
  if (variant === "featured") {
    return (
      <article
        className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden w-full max-w-sm md:max-w-md"
        role="article"
        aria-label={`Project: ${headline}`}
      >
        {/* Featured badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold rounded-full shadow-md">
            Featured
          </span>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent />
      </article>
    );
  }

  // Default/Minimal variant
  return (
    <article
      className="group relative bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden w-full max-w-sm"
      role="article"
      aria-label={`Project: ${headline}`}
    >
      {/* Subtle shine effect on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent />
    </article>
  );
};

// Loading skeleton for better UX
export const CardSkeleton: React.FC = () => (
  <div className="animate-pulse bg-white border border-gray-100 rounded-2xl shadow-md w-full max-w-sm">
    <div className="h-48 bg-gray-200 rounded-t-2xl" />
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
      </div>
      <div className="h-10 bg-gray-200 rounded w-full mt-4" />
    </div>
  </div>
);

export default Card;
