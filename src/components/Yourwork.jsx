import React from 'react'
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
                        Clearwave   unifies    your   team's projects, data, and                                                                
                        communication into one calm, facused surface.Less noise more done.
                    </p>
                    <div className="flex flex-wrap gap-5 mt-10">
                        <button className="btn-primary flex items-center gap-2">
                            Start Free -No Card <FaLongArrowAltRight  size={22}/>
                        </button>
                        <button className="btn-secondary flex items-center gap-2">
                            <FaPlay size={16} /> See it in action
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
                    <div className="relative max-w-2xl mx-auto">
                        <div className="card p-8 relative">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-700">Team Performance</h3>
                            <div className="grid grid-cols-8 gap-3 items-end h-48">
                                    <div className="bg-gray-100 h-8 rounded-lg"></div>
                                    <div className="bg-gray-100 h-12 rounded-lg"></div>
                                    <div className="bg-gray-100 h-10 rounded-lg"></div>
                                    <div className="bg-teal-700 h-16 rounded-lg"></div>
                                    <div className="bg-gray-100 h-14 rounded-lg"></div>
                                    <div className="bg-teal-700 h-20 rounded-lg"></div>
                                    <div className="bg-gray-100 h-10 rounded-lg"></div>
                                    <div className="bg-teal-600 h-20 rounded-lg"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                <div className="p-4 bg-gray-50 rounded-2xl">
                                    <p className="text-3xl font-bold">94%</p>
                                    <p className="text-3xl font-bold">94%</p>
                                    <p className="text-sm text-gray-600">Task Rate</p>
                                    <p className="text-xs text-teal-700">+17%</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl">
                                    <p className="text-3xl font-bold">2.4k</p>
                                    <p className="text-sm text-gray-600">Active Users</p>
                                    <p className="text-xs text-teal-700">+8%</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl">
                                    <p className="text-sm text-gray-600">Saved/week</p>
                                    <p className="text-xs text-teal-700">+24%</p>
                                </div>
                            </div>
                        </div>
                        <div className="adsolute top-4 right-4 bg-teal-700 text white px-5 py-3 rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold">34%</h3>
                            <p className="text-xs">Output this week</p></div>
                    </div>
                    <div className="absolut bottom-4-left-8 bg-white p-4 rounded-2xl shadow-lg border">
                        <div className="w-8 h-8nbg-teal-700 rounded-lg flex items-center justify-center text-white">
                             <div className="w-2 h-2 bg-white rounded-full"> </div>
                             <div>
                                <p className="text-sm font-semibold">New integration</p>
                                <p className="text-sm text-gray-500">Slack connected just now</p>
                             </div>
                        </div>
                    </div>

                </div>
     
    </section>
  );
}

export default Yourwork;