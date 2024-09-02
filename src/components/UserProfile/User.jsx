import { useState } from 'react';
import { uploadImage } from '../firebaseFun';
import { auth } from '../../Firebase';

function User({ userProfile }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const userId = auth.currentUser.uid;
    await uploadImage(file, userId);
    alert('Image uploaded successfully!');
    window.location.reload();
  };

  return (
    userProfile && <div className="w-60 h-auto fixed top-0 right-0 bg-[transparent] p-2 shadow-custom animate-slideInCenter flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between w-[100%]">
        <i className="bi bi-person-circle text-white text-[2rem]"></i>
        <button className="p-2 rounded-full text-[#ffffff] font-semibold animate-slideInCenter">
          <i className="bi bi-box-arrow-right text-2xl"></i>
        </button>
      </div>
      <label className="block mb-2 text-sm font-medium text-[#05061E] dark:text-white" htmlFor="file_input">Upload Image</label>
      <input
        className="block w-full text-sm text-[#05061E] border border-[#05061E] cursor-pointer bg-[#05061E] dark:text-gray-400 focus:outline-none dark:bg-[#05061E] dark:border-[#05061E] dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        onChange={handleFileChange}
      />
      <button className="bg-white p-1 rounded-full w-[100%] mt-2" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default User;
