// components/Carousel.tsx
import { OurTeam } from '@/types';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: OurTeam[];
  autoSwitchInterval?: number; // Optional auto switch interval in milliseconds
}

const rotateArrayElements = (arr: any[], reverse: boolean) => {
  const newArray = [...arr]; // Create a copy of the original array to avoid modifying it directly
  const length = newArray.length;

  // Calculate the effective shift based on the array length
  const effectiveShift = 1 % length;

  if (reverse) {
    // Rotate in reverse order
    return newArray.slice(length - effectiveShift).concat(newArray.slice(0, length - effectiveShift));
  } else {
    // Rotate in regular order
    return newArray.slice(effectiveShift).concat(newArray.slice(0, effectiveShift));
  }
}

const Carousel: React.FC<CarouselProps> = ({ images, autoSwitchInterval = 5000 }) => {
  const [imagesState, setImagesState] = useState<OurTeam[]>(images)
  const router = useRouter();

  
  const handlePrev = () => {
    setImagesState((oldImages) => {
      return rotateArrayElements(oldImages, true)
    })
  };

  const handleNext = () => {
    setImagesState(oldImages => {
      return rotateArrayElements(oldImages, false)
    })
  };

  const handleImageClick = (id: string) => {
    router.push(`/our-team/${id}`) 
  };

  const calculateSize = () => {
    return 400; // Adjust the size as needed
  };

 
  useEffect(() => {
    setImagesState(images)
  }, [images]);

  return (
    <div className="relative">
      <div className="flex flex-col items-center mb-4">
        <div className="flex space-x-8 mt-4">
          {imagesState.map((person, index) => (
            <img
              key={person.id}
              src={person.image}
              alt={`carousel-image-${person.id}`}
              className="rounded-3xl transform transition-transform duration-300 cursor-pointer"
              style={{
                width: `${calculateSize()}px`,
                height: `${calculateSize()}px`,
                transform: `scale(${index === 1 ? 1.2 : 0.8})`,
              }}
              onClick={() => handleImageClick(person.id)}
            />
          ))}
        </div>
        <div className="flex mt-[75px]">
          <button
            className="focus:outline-none text-3xl"
            onClick={handlePrev}
          >
            &#8592; {/* Left Arrow */}
          </button>
          <button
            className="focus:outline-none text-3xl ml-4"
            onClick={handleNext}
          >
            &#8594; {/* Right Arrow */}
          </button>
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-xl'>
          {imagesState[1].name}
          </h1>
          <p className='font-bold text-l'>
          {imagesState[1].title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
