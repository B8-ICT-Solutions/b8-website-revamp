'use client'
import React from "react";
import Image from "next/image";
import CGradientBackground from "../CGradientBackground";
import { motion } from "framer-motion";

const CFooter = () => {
  return (
    <div className="mt-[133px] relative md:h-[458px] w-full overflow-hidden">
      
      {/* Gradient Background */}
      <CGradientBackground />

      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cfooter.png"
          alt="footer background"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.9 }}
        />

        {/* Color Overlay with multiply blend */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#3D0A8B",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-[107px] md:gap-0 items-center justify-around h-full text-white px-6 py-10">
        
        {/* Animated Title */}
        <motion.h1
          className="text-[50px] md:text-[40px] text-transparent font-medium font-tektur leading-tight bg-clip-text bg-gradient-to-b from-[#7B747E] to-[#7B747E] animate-led"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Managed and <br />
          Professional <br />
          ICT Services <br /> Provider
        </motion.h1>

        {/* Links Grid */}
        <div className="grid grid-cols-3 gap-[37px] text-white text-[16px] font-inter">
          <h3 className="hover:underline cursor-pointer">Home</h3>
          <h3 className="hover:underline cursor-pointer">About Us</h3>
          <h3 className="hover:underline cursor-pointer">News</h3>
          <h3 className="hover:underline cursor-pointer">Teams</h3>
          <h3 className="hover:underline cursor-pointer">Events</h3>
          <h3 className="hover:underline cursor-pointer">Media</h3>
        </div>

        {/* Contact Form */}
        <div className="w-[350px]  bg-opacity-10 p-4 rounded-lg ">
          <h3 className="text-[20px] font-inter font-semibold mb-3">Contact Us</h3>

          <div className="flex flex-col  mt-[20px]">
            <input
              className="h-[55px] border border-white bg-transparent px-3 outline-none text-white placeholder-white"
              placeholder="Reason"
            />
            <textarea
              className="h-[119px] border border-t-none border-white bg-transparent px-3 outline-none text-white placeholder-white"
              placeholder="Details"
            />
            <div className="flex justify-between items-center bg-black h-[42px] border border-white   pl-3">
              <h3 className="text-[16px] font-inter">Submit</h3>
              <button className="w-[42px] h-[41px] bg-[#6817E5] rounded flex items-center justify-center">
              <Image src='/rightArrow.svg'  alt='arrow' height={22} width={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFooter;
