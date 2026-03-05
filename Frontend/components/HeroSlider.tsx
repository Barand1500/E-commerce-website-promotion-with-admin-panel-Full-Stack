import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
  baslik: string;
  altBaslik: string;
  aciklama: string;
  resim: string;
  butonMetin: string;
  butonLink: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [aktifSlide, setAktifSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAktifSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slideGec = (index: number) => {
    setAktifSlide(index);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-gri-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === aktifSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Arka Plan Resmi */}
          <div className="absolute inset-0">
            <img
              src={slide.resim}
              alt={slide.baslik}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-siyah/80 via-siyah/50 to-transparent"></div>
          </div>

          {/* İçerik */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <p className="text-vurgu-400 font-vurgu font-semibold text-sm md:text-base mb-4 uppercase tracking-widest">
                  {slide.altBaslik}
                </p>
                <h1 className="baslik-1 text-beyaz mb-6">
                  {slide.baslik}
                </h1>
                <p className="text-xl md:text-2xl text-gri-200 mb-8 font-sans leading-relaxed">
                  {slide.aciklama}
                </p>
                <Link
                  to={slide.butonLink}
                  className="inline-block px-10 py-4 bg-beyaz text-siyah buton-vurgu gecis-yumu hover:bg-vurgu-600 hover:text-beyaz hover:scale-105 shadow-2xl"
                >
                  {slide.butonMetin}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigasyon Noktaları */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => slideGec(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === aktifSlide
                ? 'bg-beyaz w-8'
                : 'bg-beyaz/50 hover:bg-beyaz/75'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Ok Butonları */}
      <button
        onClick={() => slideGec((aktifSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-beyaz/10 hover:bg-beyaz/20 text-beyaz p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Önceki"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => slideGec((aktifSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-beyaz/10 hover:bg-beyaz/20 text-beyaz p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Sonraki"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;
