import { useState } from "react";
import { auth } from "../../Firebase";
import {signInWithEmailAndPassword} from 'firebase/auth'



function Login({setRegister, setLogin, login, register, setUserSlide, setUserProfile}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  function showregister(){
    setIsAnimating(true);
    setTimeout(() => {
      setRegister(true);
      setLogin(false);
      setIsAnimating(false);
    }, 1000); // The duration matches the animation time
  }
function closeLogin(){
  setIsAnimating(true);
  setTimeout(() => {
    setLogin(false);
    setIsAnimating(false);
  }, 1000); // The duration matches the animation time
}

async function handleLogin(e) {
  e.preventDefault();
  setLoading(true)
  try {
  await signInWithEmailAndPassword(auth, email, password);
  console.log('Login successful')
  setUserSlide(true);
  setUserProfile(true);
  setLogin(false);
  } catch (error) {
    // console.error("Error during sign up:", error);
    if(error.message == "Firebase: Error (auth/network-request-failed)."){
      // alert('Network failed: Check your Internet Connection');
      setMessage('Network failed: Check your Internet Connection🚩')
      return;
    } 
  }
  finally{
    setLoading(false)
  }
}

  return (
     login && (
        <div
          className={`md:w-[407px] h-[500px] bg-transparent bg-white m-auto my-auto rounded-xl relative flex flex-col justify-center items-center ${
            isAnimating || register ? 'animate-slideOut' : 'animate-slideInCenter'
          }`}
        >
      <div className="w-[35px] h-[35px] bg-[#000] rounded-tr-xl rounded-bl-xl absolute right-1 top-1 grid place-items-center cursor-pointer" onClick={closeLogin}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.28023 0.539961L11 8.25941L18.6798 0.579958C18.8494 0.399406 19.0538 0.254971 19.2806 0.155313C19.5074 0.0556557 19.752 0.00282849 19.9997 0C20.5302 0 21.0388 0.210698 21.4139 0.585744C21.789 0.96079 21.9997 1.46946 21.9997 1.99986C22.0043 2.24504 21.9588 2.4886 21.866 2.71557C21.7731 2.94254 21.6349 3.14814 21.4597 3.31976L13.6799 10.9992L21.4597 18.7787C21.7893 19.1011 21.9826 19.5378 21.9997 19.9986C21.9997 20.529 21.789 21.0376 21.4139 21.4127C21.0388 21.7877 20.5302 21.9984 19.9997 21.9984C19.7448 22.009 19.4906 21.9665 19.253 21.8735C19.0154 21.7805 18.7998 21.6392 18.6198 21.4585L11 13.739L3.30023 21.4385C3.13124 21.613 2.92937 21.7523 2.70625 21.8484C2.48313 21.9445 2.24319 21.9955 2.00027 21.9984C1.46985 21.9984 0.961156 21.7877 0.586094 21.4127C0.211033 21.0376 0.000325404 20.529 0.000325404 19.9986C-0.00433745 19.7534 0.041155 19.5098 0.134011 19.2829C0.226868 19.0559 0.365129 18.8503 0.540309 18.6787L8.32008 10.9992L0.540309 3.21977C0.210689 2.89731 0.0174041 2.46065 0.000325404 1.99986C0.000325404 1.46946 0.211033 0.96079 0.586094 0.585744C0.961156 0.210698 1.46985 0 2.00027 0C2.48025 0.00599957 2.94024 0.199986 3.28023 0.539961Z" fill="white"/>
</svg>
      </div>
      <h1 className="mb-24 text-black font-semibold text-2xl">Login</h1>
      <form action="" className="w-[320px] px-3">
        <div className="relative w-[100%]  my-4">
          <label htmlFor="" className="text-[#000]"></label>
          <input
  type="email"
  name=""
  id=""
  onChange={(e) => setEmail(e.target.value)}
  className="bg-transparent outline-none border-b-2 border-b-[#000] w-[100%] p-1 text-[#000] text-indent-custom font-semibold placeholder:font-normal"
  placeholder="Email"
/>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute left-0 top-1" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="black"/>
        </svg>
        </div>
        <div className="relative w-[100%]  my-4">
        <input
  type="password"
  name=""
  id=""
  onChange={(e) => setPassword(e.target.value)}
  className="bg-transparent outline-none border-b-2 border-b-[#000] w-[100%] p-1 text-[#000] text-indent-custom font-semibold placeholder:font-normal"
  placeholder="Password"
/>

          <svg width="24" height="24" viewBox="0 0 24 24" className="absolute left-0 top-1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 20 12.2044 20 13V19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2ZM12 14C11.4954 13.9998 11.0094 14.1904 10.6395 14.5335C10.2695 14.8766 10.0428 15.3468 10.005 15.85L10 16C10 16.3956 10.1173 16.7822 10.3371 17.1111C10.5568 17.44 10.8692 17.6964 11.2346 17.8478C11.6001 17.9991 12.0022 18.0387 12.3902 17.9616C12.7781 17.8844 13.1345 17.6939 13.4142 17.4142C13.6939 17.1345 13.8844 16.7781 13.9616 16.3902C14.0387 16.0022 13.9991 15.6001 13.8478 15.2346C13.6964 14.8692 13.44 14.5568 13.1111 14.3371C12.7822 14.1173 12.3956 14 12 14ZM12 4C11.2044 4 10.4413 4.31607 9.87868 4.87868C9.31607 5.44129 9 6.20435 9 7V10H15V7C15 6.20435 14.6839 5.44129 14.1213 4.87868C13.5587 4.31607 12.7956 4 12 4Z" fill="black"/>
      </svg>
        </div>
        <p className="text-red-600 text-xs pb-1">{message}</p>
        <div className="flex flex-row justify-around items-center text-sm">
          <div className="">
          <input type="checkbox" name="" id=""  className="border-black mx-1 cursor-pointer"/>
          <label htmlFor="" className="text-[#000]">Remember me</label>
          </div>
          <span className="text-[#000] cursor-pointer">Foget password?</span>
        </div>
        <button className="bg-custom-gradient w-[100%] rounded-full p-2 mt-3 text-white text-lg" onClick={handleLogin}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        <div className="flex flex-row justify-center items-center space-x-2 text-sm mt-3">
          <label htmlFor="" className="text-[#000]">Dont have an account</label>
          <span className="text-[#000] cursor-pointer font-bold" onClick={ showregister}>Register</span>
        </div>
      </form>
    </div>)
  )
}

export default Login