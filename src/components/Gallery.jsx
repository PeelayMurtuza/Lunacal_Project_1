import React, { useState } from 'react';

export default function GalleryAdder() {
  const [images, setImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const addImage = () => {
    const newImage =` /placeholder.svg?height=200&width=200&text=Image ${images.length + 1}`;
    setImages([...images, newImage]);
  };

  const navigate = (direction) => {
    if (direction === 'left' && startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else if (direction === 'right' && startIndex < images.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white bg-black p-2 px-7 rounded-xl text-xl font-bold">Gallery</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={addImage}
            variant="secondary"
            className="  bg-black p-2 px-4 rounded-3xl  text-white hover:bg-gray-600 "
          >
            
           <span>+</span> ADD IMAGE
          </button>
          <button
            onClick={() => navigate('left')}
            variant="secondary"
            size="icon"
            className="bg-black shadow-2xl text-white hover:bg-gray-600 rounded-full"
            disabled={startIndex === 0}
          >
            <div className="p-2 px-4 shadow-2xl border border-black rounded-full ">  {"<"}  </div>
          </button>
          <button
            onClick={() => navigate('right')}
            variant="secondary"
            size="icon"
            className="  text-white hover:bg-gray-600 rounded-full bg-black"
            disabled={startIndex >= images.length - 3}
          >
             <div className="p-2 px-4 ">  {">"}  </div>
          </button>
        </div>
      </div>
      <div className="flex space-x-4 overflow-hidden ">
        {images.slice(startIndex, startIndex + 3).map((src, index) => (
          <img
            key={startIndex + index}
            src={src}
            alt={`Gallery image ${startIndex + index + 1}`}
            className="w-full h-32 object-cover rounded-md  border border-gray-950 "
          />
        ))}
        {images.length === 0 && (
          <div className="w-full h-32 flex items-center justify-center text-gray-400">
            No images added yet
          </div>
        )}
      </div>
    </div>
  );
}