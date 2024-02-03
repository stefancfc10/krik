// components/ImageScroll.tsx
import React from 'react';

const ImageScroll: React.FC = () => {
  return (
    <div className="flex overflow-x-scroll space-x-4 p-4 scrollbar">
      <img src="/icons/Component 1.png" alt="Image 1" className="w-82 h-64" />
      <img src="/icons/Frame 280.png" alt="Image 2" className="w-82 h-64" />
      <img src="/icons/Frame 281.png" alt="Image 3" className="w-82 h-64" />
      <img src="/icons/Component 1.png" alt="Image 4" className="w-82 h-64" />
      <img src="/icons/Frame 281.png" alt="Image 3" className="w-82 h-64" />
    </div>
  );
};

export default ImageScroll;
