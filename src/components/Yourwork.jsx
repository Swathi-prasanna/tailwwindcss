import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuZap } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";



const Yourwork = () => {
  return (
    <section className="container-custom py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-sm mb-8">
                <div className="w-4 h-4 bg-teal-700 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"> </div>
                 </div>
                       Rated #1 Productivity Saas of 2024
                    </div>
                    <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                        Your workflow
                    
                    <span className="playfair text-teal-700 block italic">
                        finally clear.
                    </span>
                    </h2>
                    <p className="mt-8 text-lg text-gray-600 leading-8">
                        Clearwave unifies your team's projects data, and communication into one calm, facused surface.Less noise more done.
                    </p>
                    <div className="flex flex-wrap gap-5 mt-10">
                        <button className="btn-primary flex items-center gap-2">
                            Start Free -No Card <FaLongArrowAltRight  size={22}/>
                        </button>
                        <button className="btn-secondary flex items-center gap-2">
                            <FaPlay  height="16" width="16" /> See it in action
                        </button>
                        <div className="flex items-center gap-8 mt-10 text-gray-500 text-sm">
                          
                          <div className="flex items-center gap-2">
                            <IoShieldCheckmarkOutline size={26} /> SOC 2 certified
                            </div> 
                        
                        <div className="flex items-center gap-2">
                           <LuZap  size={22}/> 99.9% Uptime SLA
                        </div>
                        <div className="flex items-center gap-2">
                           <HiOutlineUserGroup size={22} /> 50k+ Teams
                        </div>
                     </div>
                    </div>

                </div>
     
    </section>
  )
}

export default Yourwork;