import { useState } from 'react';
import image1 from  './images/11281512.jpg';
import image2 from  './images/11281513.jpg';
import image3 from  './images/11281594.jpg';
import image4 from  './images/sis.jpg';
import image5 from  './images/sis2.jpg';
import image6 from  './images/sis3.jpg';


const images = [
  {
    id:1,
    image: image1,
  },
  {
    id:2,
    image: image2,
  },
  {
    id:3,
    image: image3,
  },
  {
    id:4,
    image: image4,
  },
  {
    id:5,
    image: image5,
  },
  {
    id:6,
    image: image6,
  },
]

function Slders() {
  const [currentId, setCurrentId]  = useState(images[0].id);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);


  let currentIndex;
function handleRight(){
  setIsAnimatingOut(true);
  setTimeout(() => {
    currentIndex = images.findIndex((img) => img.id === currentId);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentId(images[nextIndex].id);
    setIsAnimatingOut(false); 
  }, 500);
}
function handleLeft() {
  setIsAnimatingOut(true);
  setTimeout(() => {
   currentIndex = images.findIndex((img) => img.id === currentId);
    if (currentIndex === 0) {
      // Stay on the first image or handle as needed
      setIsAnimatingOut(false);
      return;
    }
    const backIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentId(images[backIndex].id);
    setIsAnimatingOut(false);
  }, 500); // Adjust timing to match your slide-out animation duration
}


  const currentImage = images.find((img) => img.id === currentId);

  return (
    <div className="w-[100%] h-[100%] justify-center items-center flex p-1">
      <div className="bg-[transparent] p-2 h-auto shadow-custom animate-slideInLeft">
        <div className="md:w-[45rem] md:h-96 overflow-hidden relative">
        <i className="bi bi-arrow-right-circle-fill absolute z-50 text-white top-[48%] right-2 text-3xl cursor-pointer" onClick={handleRight}></i>
        <i className="bi bi-arrow-left-circle-fill absolute z-50 text-white top-[48%] left-2 text-3xl cursor-pointer" onClick={handleLeft}></i>
        <div className="flex flex-row">
        <img src={currentImage.image} alt={`image${currentId}`}  
        className={
          `${ isAnimatingOut ? 'animate-slideOutBackCenter' :'animate-slideInLeftImage' }`
          }/>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Slders