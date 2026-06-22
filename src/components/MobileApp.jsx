import React from 'react'
import Screen01 from '../assets/images/tm-622-screen-01.jpg'
import Screen02 from '../assets/images/tm-622-screen-02.jpg'
import Screen03 from '../assets/images/tm-622-screen-03.jpg'
import Screen04 from '../assets/images/tm-622-screen-04.jpg'
import Screen05 from '../assets/images/tm-622-screen-05.jpg'

const MobileApp = () => {
  const MobilePhone = ({ children, rotation, color, isActive, image }) => (
    <div
      className={`relative flex-shrink-0 transition-all duration-500 ${isActive ? 'z-20 scale-105' : 'z-10 opacity-80'}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className={`relative w-44 md:w-52 h-[420px] md:h-[500px] rounded-[36px] border-4 ${color === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} shadow-2xl overflow-hidden`}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-inherit rounded-b-2xl z-10"></div>
        <div className="w-full h-full flex flex-col pt-6">
          {image && <img src={image} alt="App screen" className="w-full h-full object-cover" />}
          {children}
        </div>
      </div>
    </div>
  );

  const screens = [Screen01,
     Screen02, 
     Screen03, 
     Screen04, 
     Screen05];

  return (
    <section className="py-20 bg-white">
      
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700/10 text-teal-700 text-xs font-semibold mb-6">
            <div className="w-1.5 h-1.5 bg-teal-700 rounded-full"></div>
            MOBILE APP
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your workspace,
            <span className="playfair text-teal-700 block italic">
              in your pocket
            </span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            The Clearwave mobile app brings every dashboard, task, and notification to you — beautifully adapted for any screen.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 overflow-hidden">
          {screens.map((screen, index) => (
            <MobilePhone
              key={index}
              image={screen}
              rotation={(index - 4) * 8}
              isActive={index === 2}
            />
          ))}
        </div>
  
    </section>
  );
}

export default MobileApp;
