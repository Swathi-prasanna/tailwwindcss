import React from 'react'

 function MobileApp () {
    const MobilePhone =({children, rotation, color, isActive }) => (
   <div
      className={`relative flex-shrink-0 transition-all duration-500 ${
        isActive ? 'z-20 scale-105' : 'z-10 opacity-80'
      }`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
        <div className={`relative w-44 md:w-52 h-[420px] md:h-[500px] rounded-[36px] border-4 ${color === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} shadow-2xl overflow-hidden`}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-inherit rounded-b-2xl z-10"></div>
        <div className="w-full h-full flex flex-col pt-6">
          {children}
        </div>
      </div>
    </div>
  );
  return (
    <section className="py-20 bg-white">
        <div className="container-custaom">
            <p className="text-center text-xs tracking-[4px] text-gray-500 mb-10 uppercase">
                Trusted by forward-thinking teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-20">
                {["Nexaflow","Meridian", "vanta Labs","Pulsar HQ","Arclight","Korova Co."].map((item,index)=>(<div key={index} className="flex items-center justify-center gap-2 text-gray-500 font-medium">
                    <div className="w-6 h-6 bg-teal-700/10 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-teal-700 rounded-sm"></div>
                    </div>
                    {item}
                </div>))}
            </div>
        </div>
    </section>
    
  )
}

export default MobileApp