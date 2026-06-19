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
                <div className="inline-flex items-center gap-2 bg-white border border-[var(--border)] px-3 py-2 rounded-full shadow mb-8">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center text-white">
                       <GoArrowUp />
                    </div> 
                    <span className="text-sm text-[var(--text-2)]">Rated 
                    <span className="font-semibold text-[var(--accent)]">{" "}#1 Productivity SaaS</span>{" "}of 2024
                    </span>
                 </div>
                 <h1 className="text-7xl font-bold text-gray-900">
                    Your workflow,
                 </h1>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Navbar;