import { useState, useEffect } from 'react';
import { getUserImages } from '../../firebaseFun';
import { auth } from '../../../Firebase';

function Slders({ userSlide }) {
  const [images, setImages] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // State to track if the current image is loaded

  useEffect(() => {
    const fetchImages = async () => {
      setLoadingImage(true);
      const userId = auth.currentUser.uid;
      try {
        const userImages = await getUserImages(userId);
        setImages(userImages);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingImage(false);
      }
    };
    fetchImages();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleRight = () => {
    if (!imageLoaded) return; // Prevent navigating before the image is loaded
    setIsAnimatingOut(true);
    setImageLoaded(false); // Reset imageLoaded for the next image
    setTimeout(() => {
      setCurrentId((prevId) => (prevId + 1) % images.length);
      setIsAnimatingOut(false);
    }, 500);
  };

  const handleLeft = () => {
    if (!imageLoaded) return; // Prevent navigating before the image is loaded
    setIsAnimatingOut(true);
    setImageLoaded(false); // Reset imageLoaded for the previous image
    setTimeout(() => {
      setCurrentId((prevId) => (prevId === 0 ? images.length - 1 : prevId - 1));
      setIsAnimatingOut(false);
    }, 500);
  };

  return (
    userSlide && (
      <div className="w-[100%] h-[100%] justify-center items-center flex p-1">
        <div className="bg-[transparent] p-2 h-auto shadow-custom animate-slideInLeft mt-10">
          <div className="md:w-[45rem] overflow-hidden relative">
            {loadingImage ? (
              <p className="text-white text-center">Please wait..............</p>
            ) : images.length === 0 ? (
              <p className="text-white text-center">No uploaded images found. Please upload an image.</p>
            ) : (
              <>
                <i
                  className={`bi bi-arrow-right-circle-fill absolute z-50 text-white top-[48%] right-2 text-3xl cursor-pointer ${!imageLoaded && 'cursor-not-allowed'}`}
                  onClick={handleRight}
                ></i>
                <i
                  className={`bi bi-arrow-left-circle-fill absolute z-50 text-white top-[48%] left-2 text-3xl cursor-pointer ${!imageLoaded && 'cursor-not-allowed'}`}
                  onClick={handleLeft}
                ></i>
                <div className="flex flex-row">
                  <img
                    src={images[currentId]}
                    alt={`image${currentId}`}
                    onLoad={handleImageLoad} // Set imageLoaded to true when the image is fully loaded
                    className={`${isAnimatingOut ? 'animate-slideOutBackCenter' : 'animate-slideInLeftImage'}`}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default Slders;
