import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  image: string;
}

const originalSlides: SlideData[] = [
  { id: 1, title: "Celebrating Our Girls' Success in the 12th HSE Examination - 2024-2025!", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200" },
  { id: 2, title: "CCT Home Coimbatore - Providing a Safe Haven", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200" },
  { id: 3, title: "DIWALI CELEBRATION 2025", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200" }
];

// We add the first slide to the end to create the loop anchor
const slides = [...originalSlides, originalSlides[0]];

const SeamlessCharitySlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (current >= slides.length - 1) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current <= 0) {
        // Jump to the end "clone" instantly, then slide to actual last
        setIsTransitioning(false);
        setCurrent(slides.length - 1);
        setTimeout(() => {
            setIsTransitioning(true);
            setCurrent(slides.length - 2);
        }, 10);
        return;
    };
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  // Handle the "Instant Jump" back to start after the animation ends
  useEffect(() => {
    if (current === slides.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false); // Disable animation
        setCurrent(0); // Jump back to real first slide
      }, 700); // Match this with the duration-700 below
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative w-full py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-4 md:px-12">
        
        <div className="overflow-hidden">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={`${slide.id}-${index}`} className="w-full shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-4">
                  <div className="order-2 md:order-1">
                    <h2 className="text-[#339B95] text-3xl md:text-5xl font-bold leading-tight">
                      {slide.title}
                    </h2>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-white p-2 md:p-4 rounded-[2rem] shadow-xl">
                      <div className="relative overflow-hidden rounded-[1.5rem] h-[300px] md:h-[450px]">
                        <img src={slide.image} alt="" className="w-full h-full object-cover" />
                        <div className="absolute bottom-[-1px] left-0 w-full h-8 bg-white" 
                             style={{ clipPath: "polygon(0% 100%, 5% 20%, 10% 100%, 15% 20%, 20% 100%, 25% 20%, 30% 100%, 35% 20%, 40% 100%, 45% 20%, 50% 100%, 55% 20%, 60% 100%, 65% 20%, 70% 100%, 75% 20%, 80% 100%, 85% 20%, 90% 100%, 95% 20%, 100% 100%)" }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Arrows */}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 text-gray-400 hover:text-[#339B95] p-2">
          <ChevronLeft size={48} strokeWidth={1.5} />
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 text-gray-400 hover:text-[#339B95] p-2">
          <ChevronRight size={48} strokeWidth={1.5} />
        </button>

      </div>
    </div>
  );
};

export default SeamlessCharitySlider;