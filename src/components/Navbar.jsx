import React from 'react'
import { GoArrowUp } from "react-icons/go";

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
                                    </div>
                <div className="flex flex-col item-start">
                <div className="flex items-center gap-2 bg-white border border-[var(--border)]rounded-full px-3 py-2 shadow-sm mb-8">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center text-white">
                       <GoArrowUp />
                    </div> 
                    <span className="text-sm text-[var(--text-2)]">Rated 
                    <span className="font-semibold text-[var(--accent)]">{" "}#1 Productivity SaaS</span>{" "}of 2024
                    </span>
                                   </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Navbar;