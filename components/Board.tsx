import React from "react";
import Image from "next/image";

export interface TeamCardProps {
  id: number;
  img: string;
  name: string;
  title: string;
  delay?: number;
  className?: string;
}

const BoardCard: React.FC<TeamCardProps> = ({
  id,
  img,
  name,
  title,
  delay = 0,
  className = "",
}) => {
  return (
    <div
      key={id}
      className={`group relative ${className}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div
        className="relative bg-white rounded-2xl border border-gray-200 
        p-4 lg:p-5 transition-all duration-500 ease-out 
        group-hover:shadow-xl group-hover:shadow-blue-100/30
        group-hover:border-blue-200
        group-hover:translate-y-[-4px] h-full"
      >
        <div className="relative mb-5">
          <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto">
            <div
              className="relative w-full h-full rounded-full overflow-hidden 
              border-2 border-gray-300/50
              group-hover:border-transparent
              transition-all duration-500"
            >
              <Image
                src={img}
                alt={name}
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover object-center 
                group-hover:scale-110 transition-transform duration-700 ease-out"
                loading={id < 6 ? "eager" : "lazy"}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h4
            className="text-base lg:text-lg font-bold text-gray-900 
            group-hover:text-blue-800 transition-colors duration-300"
          >
            {name}
          </h4>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
