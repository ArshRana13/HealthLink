import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const AboutUsCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className="group relative border-4 border-gray-200 rounded-lg shadow-lg w-full sm:w-2/5 md:w-1/4 lg:w-1/5 overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <img
        src={image}
        alt={`${title} Image`}
        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* Hover Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-white flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm lg:text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
