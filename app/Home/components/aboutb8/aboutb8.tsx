'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CTitle from "@/app/components/common/CTitle";

const Aboutb8: React.FC = () => {
  return (
  <>
    <div className="mt-20   md:h-[450px] relative">
      <div className="container mx-aut pt-[20px] md:pt-0 text-center relative">
        {/* Title */}
        <CTitle title="About B8" />

        {/* Left Image with overlay text */}
        <div className="md:absolute top-0 left-0 md:w-1/2 h-[290px] md:h-[450px] z-10">
          <Image
            src="/aboutb8alyer.png"
            alt="about overlay"
            fill
            priority
            className="md:object-cover border-2"
          />
          <div className="md:px-8 font-roboto-flex md:ml-16 sm:translate-y-[100px]  translate-y-[30%]  w-4/5 ml-5 md:translate-y-[260px] py-5 border md:w-[390px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            rhoncus volutpat ex sit amet interdum. Vestibulum ut ultricies ipsum.
            Maecenas tincidunt orci tempor lorem venenatis, lacinia ornare
          </div>
        </div>

        {/* Right Image with fade-in */}
        <motion.div
          className="md:absolute hidden md:block top-[60px] md:top-[140px] left-[40%] w-[61%] h-[300px] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/awspartner.png"
            alt="awspartner"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>

      {/* Fully fluid responsive awspartner image */}
      <div className="w-full md:hidden relative mt-10">
        <Image
          src="/mobileAwsPartner.png"
          alt="awspartner"
          width={1920} // original image width
          height={1080} // original image height
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          priority
        />
      </div>

      {/* Learn More button */}
      <div className="flex md:hidden justify-center mt-10 md:mt-20">
        <button className="w-[171px] border border-white h-[60px]">
          Learn more
        </button>
      </div>
    </div>
    <div className="md:flex hidden  justify-start mt-10 md:mt-20">
    <button className="w-[171px] border border-white h-[60px]">
      Learn more
    </button>
  </div>
  </>
  );
};

export default Aboutb8;
