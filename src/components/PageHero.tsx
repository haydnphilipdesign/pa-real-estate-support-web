import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlay?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage, overlay = false }) => {
  return (
    <section className="relative h-80 flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{backgroundImage: `url(${backgroundImage})`}}
      ></div>
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-50"></div>}
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl font-bold mb-4 shadow-text">{title}</h1>
        {subtitle && <p className="text-2xl shadow-text">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;