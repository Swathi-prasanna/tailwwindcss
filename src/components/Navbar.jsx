import React from 'react'
import { GoArrowUp } from "react-icons/go";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbBolt } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="container-custom py-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold">
            clear<span className="text-teal-700">wave</span>
                    </h2>
                    <ul className="hidden md:flex gap-20 text-gray-700">
                        <li>App</li>
                        <li>Features</li>
                        <li> Pricing</li>
                        <li>FAQ</li>
                        </ul>
                        <div className="flex items-center gap-10">
                            <span className="text-gray-700 font-medium">Sign in</span>
                            <button className="btn-primary">
                                Start Free Trial
                            </button>

                        </div>

                    
    </nav>
  );
}

export default Navbar;