import "./App.css";
import { useState } from "react";
import instaFont from "./assets/instaFont.png";
import instaLogo from "./assets/instaLogo.png";
function App() {
  const [signUp, setSignUp] = useState(false);

  const toggleLogin = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      <div className="bg-slate-500 w-full h-screen flex items-center justify-center">
        <div className="w-[350px] h-[500px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-5">
          <div className="w-[50px] h-[50px] ">
            <img src={instaLogo} alt="" />
          </div>
          <div className="w-[70%]">
            <img src={instaFont} alt="" />
          </div>
          <div>
            <input hidden={signUp}
              placeholder="Email,Phone number"
              className=" px-1 w-full h-[40px] outline-none rounded bg-gray-200"
              type="email"
            />
            <input hidden={signUp}
              placeholder="Full Name"
              className=" mt-1.5 px-1 w-full h-[40px] outline-none rounded bg-gray-200"
              type="text"
            />
            <input
              placeholder={signUp?"Email,Phone number, username":"Username"}              className=" mt-1.5 px-2 w-full h-[40px] outline-none rounded bg-gray-200"
              type="email"
            />
            <input
              placeholder="Password"
              className=" px-2 w-full h-[40px] outline-none rounded bg-gray-200 mt-1.5"
              type="password"
            />
            <input hidden={signUp} placeholder='Confirm Password' className=' px-1 w-full h-[40px] outline-none rounded bg-gray-200 mt-1.5'  type="password" />
            
            <button className="w-full h-[40px] bg-[#4cb5f9] text-white rounded-md mt-2">
              {signUp ? "Log in" : "Sign up"}
            </button>
            <p className="text-sm text-center my-1">
              {signUp ? "Don't have account?" : "Already have an account?"}{" "}
              <span
                onClick={toggleLogin}
                className="text-[#4cb5f9] cursor-pointer"
              >
                {signUp? "Sign up ":"Log in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
