
function User() {
  return (
    <div className="w-60 h-auto fixed top-0 right-0  bg-[transparent] p-2 shadow-custom animate-slideInCenter flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between w-[100%] my-2">

            <i className="bi bi-person-circle text-white text-[2rem]"></i>
            <button className=" p-2 rounded-full text-[#ffffff] font-semibold animate-slideInCenter">
        <i className="bi bi-box-arrow-right text-2xl"></i>
        </button>
        </div>
            
            <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#05061E]  dark:border-white dark:hover:border-[white] dark:hover:bg-[#3A095B]">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-white dark:text-white"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-white dark:text-white">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div> 
            </div>
  )
}

export default User