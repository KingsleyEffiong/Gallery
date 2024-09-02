
function Nav() {
  return (
    <div className="w-[100%] h-20 fixed top-0 flex flex-row justify-around items-center">
        <div className="text-white text-2xl font-mono font-bold animate-textAnimate">PHOTOGALLERY</div>
        <button className=" p-2 rounded-full text-[#ffffff] font-semibold animate-slideInCenter">
        <i className="bi bi-box-arrow-right text-2xl"></i>
        </button>
    </div>
  )
}

export default Nav