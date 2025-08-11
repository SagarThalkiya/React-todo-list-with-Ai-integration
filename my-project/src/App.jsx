import React from "react";
import cameraIcon from "./assets/icons8-photo-80.png";
import Hero from "./components/hero.jsx"; 
import Footer from "./components/footer.jsx";


function App() {

  return (
    <div className="min-h-screen bg-gray-100 style.
    background pb-[500px]">
      <nav className="bg-fuchsia-400 shadow-lg p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
           <img src={cameraIcon} alt="camera" className="w-10 h-10" />
          </div>
          {/* Nav Links */}
          <ul className="flex justify-end items-center space-x-6">
            <li className="cursor-pointer hover:underline">
              <a
                href="https://www.google.com/search?q=google.come&rlz=1C1GCEA_enIN1146IN1147&oq=google.come&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhBMgYIAhBFGDzSAQg0MTMxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                Contact us
              </a>
            </li>
            <li className="cursor-pointer hover:underline">Login</li>
          </ul>
            
        </div>
        {/* Search Bar */}

      </nav>
      
      <div className=" flex justify-center items-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome
        to My Project</h1>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-lg text-gray-600">This is a simple React application with a navbar.</p>
      </div>
    
      
      <Hero/>
      <Footer/>
    </div>
    
    



  );
}

export default App;
