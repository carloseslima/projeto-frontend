import React, { useState } from 'react';

const images = [
  '/home-slide-1.jpeg',
  '/home-slide-2.jpeg',
  '/home-slide-3.jpeg',
  '/home-slide-4.jpeg',
];

const  Galery= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '100%', height: '681px', objectFit: 'cover' }}
        />
        
        <button 
          onClick={handlePrev}
          style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
        >
          ❮
        </button>
        
        <button 
          onClick={handleNext}
          style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
        >
          ❯
        </button>
      </div>

      <div style={{ marginTop: '10px',display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              backgroundColor: currentIndex === index ? '#C92071' : '#ccc',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}



export default Galery;