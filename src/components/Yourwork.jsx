import React from 'react'
import { IoIosAddCircle } from "react-icons/io";

const Yourwork = () => {
  return (
    <section className="container-custom py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-sm mb-8">
                <div className="w-4 h-4 bg-teal-700 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full">
                        <IoIosAddCircle />Rated #1 Productivity Saas of 2024
                    </div>
                    <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                        Your workflow
                    
                    <span className="playfair text-teal-700 block italic">
                        finally clear.
                    </span>
                    </h2>
                    <p className="mt-8 text-lg text-gray-6-- leading-8">
                        Clearwave unifies your team's projects data, and communication into one calm, facused surface.Less noise more done.
                    </p>
                    
                </div>
            </div>
        </div>
     
    </section>
  )
}

export default Yourwork