import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ServicesMarquee = () => {
  const images = [
    "/marquee/aws.png",
    "/marquee/docker.png",
    "/marquee/azura.png",
    "/marquee/github.png",
    "/marquee/kubernetes.png",
    "/marquee/googleCloud.png",
    "/marquee/terraform.png",
    "/marquee/grafana.png"
  ];

  // Repeat images to make seamless infinite loop
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div  className="w-screen  overflow-hidden md:mt-[200px] mt-[20px] ">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        loop={0} // infinite loop
      >
        {repeatedImages.map((src, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "40px", // equal spacing
            }}
          >
            <Image src={src} width={66} height={71} alt={`service-${index}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ServicesMarquee;
