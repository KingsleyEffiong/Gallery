import { useState, useEffect } from 'react';
import { getUserImages } from '../../firebaseFun';
import { auth } from '../../../Firebase';

function Slders({ userSlide }) {
  const [images, setImages] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const userId = auth.currentUser.uid;
      const userImages = await getUserImages(userId);
      setImages(userImages);
    };
    fetchImages();
  }, []);

  const handleRight = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setCurrentId((prevId) => (prevId + 1) % images.length);
      setIsAnimatingOut(false);
    }, 500);
  };

  const handleLeft = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setCurrentId((prevId) => (prevId === 0 ? images.length - 1 : prevId - 1));
      setIsAnimatingOut(false);
    }, 500);
  };

  return (
    userSlide && images.length > 0 && (
      <div className="w-[100%] h-[100%] justify-center items-center flex p-1">
        <div className="bg-[transparent] p-2 h-auto shadow-custom animate-slideInLeft mt-10">
          <div className="md:w-[45rem] md:h-96 overflow-hidden relative">
            <i className="bi bi-arrow-right-circle-fill absolute z-50 text-white top-[48%] right-2 text-3xl cursor-pointer" onClick={handleRight}></i>
            <i className="bi bi-arrow-left-circle-fill absolute z-50 text-white top-[48%] left-2 text-3xl cursor-pointer" onClick={handleLeft}></i>
            <div className="flex flex-row">
              <img src={images[currentId]} alt={`image${currentId}`} className={`${isAnimatingOut ? 'animate-slideOutBackCenter' : 'animate-slideInLeftImage'}`} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Slders;
