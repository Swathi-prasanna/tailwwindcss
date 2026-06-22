import React from 'react'
import { FaThLarge } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbBriefcase2Filled } from "react-icons/tb";


const Trusted = () => {
    const companies = [
        {
            name:"Nexaflow",
            icon:<FaThLarge />
        },
        {
            name:"Meridian",
            icon:<FaRegClock />
        },
        {
            name: "Vanta Labs",
            icon:<FaPlay />
        },
        {
            name:"Pulsar HQ",
            icon:<FaSquare />
        },
        {
            name:"Arclight",
            icon:<FaUser />
        },
        {
            name: "Korova Co.",
            icon:<TbBriefcase2Filled />
        },
    ];
  return (
    <section className="py-16 border-y border-gray-200">
        <div className="container-custom">
            <p className="text-center text-sm tracking-[4px] text-gray-500 mb-12">
                TRUSTED BY FORWARD THINKING TEAMS
            </p>
            <div className="flex flex-wrap justify-between items-center gap-6">
                {companies.map((item,index)=>(<div key={index} className="flex items-center gap-3">
                    <div className="w-7 h-10 rounded-xl border border-gray-300 flex items-center justify-center text-teal-700 bg-white">
                        {item.icon}
                    </div>
                    <span className="text-1xl font-semibold text-gray-600">
                        {item.name}
                    </span>
                </div>
            ))}
            </div>
        </div>
    </section>

  );
};

export default Trusted;