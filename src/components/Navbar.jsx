import React from 'react'
import { GoArrowUp } from "react-icons/go";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbBolt } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";

const Navbar = () => {
  return (
    <section className="bg-[#EEF5F3] min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
            <nav  className="flex items-center justify-between py-8">
                <h2 className="text-3xl font-bold text-[var(--text-1)]">clear <span className="text-[var(--accent)]">wave</span></h2>
                <ul className="hidden md:flex items-center gap-20 text-[15px] text-[var(--text-2)]">
                    <li>App</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Reviews</li>
                    <li>FAQ</li>
                </ul>
                <div className="flex items-center gap-8">
                    <button className="text-[var(--text-1)]">
                        Sign in
                    </button>
                    <button className="bg-[var(--accent)] text-white px-4 py-3 rounded-full shadow-lg">
                        Start Free Trial
                    </button>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                <div className="inline-flex items-center gap-2 bg-white border border-[var(--border)] px-3 py-2 rounded-full shadow mb-8">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center text-white">
                       <GoArrowUp />
                    </div> 
                    <span className="text-sm text-[var(--text-2)]">Rated 
                    <span className="font-semibold text-[var(--accent)]">{" "}#1 Productivity SaaS</span>{" "}of 2024
                    </span>
                 </div>
                 <h1 className="text-7xl font-bold text-gray-500">
                    Your workflow,
                 </h1>
                 <h2 className="text-7xl italic mb-8 text-[var(--accent)]" style={{fontfamily:"Playfair Display, serif"}}>
                    finally clear.
                    </h2>   
                    <h5 className="text-xl leading-10 max-w-xl text-[var(--text-2)]">Clearwave unifies your team's projects, data, and communication into one calm,  focused surface.Less noise, more done.</h5>
                <div className="flex items-center gap-4">
                    <button className="bg-[var(--accent)] text-white px-10 py-4 rounded-full shadow-lg hover:bg-[var(--accent-mid)]transition flex items-center justify-center gap-2 whitespace-nowrap">
                    StartFree -No Card <MdOutlineArrowRightAlt size={20}/>
                    </button>
                    <button className="border border-[var(--border)] text-[var(--accent)] px-8 py-4 rounded-full flex items-center justify-center gap-2 whitespace-nowrap">
                 <IoIosPlay size={18}/> See it in action</button>
                 </div>
                 <div className="flex gap-8 mt-12 text-sm text-[var(--text-3)]">
                    <p><IoShieldCheckmarkOutline /> Soc 2 Certified</p>
                    <p><TbBolt /> 99.9% Uptime SLA</p>
                    <p><HiUserGroup /> 50K+ Teams</p>
                </div>
              </div>
            </div>   
        </div>
    </section>
  )
}

export default Navbar;