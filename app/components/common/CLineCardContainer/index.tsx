import React from "react";
import CLineCard from "../CLineCard";
import { CLineCardContainerProps } from "@/types/types";
import CLineMobileCard from "../CLineMobileCard";


const CLineCardContainer: React.FC<CLineCardContainerProps> = ({ cardsData }) => {
  return (
    <div className="relative md:h-[564px] overflow-hidden">
      {/* Top line overlay */}
      <div className="h-[111px] w-[100svw] absolute top-0 z-10 border-t border-b border-white/50 hidden md:block"></div>

      {/* Bottom line overlay */}
      <div className="h-[1px] w-[100svw] absolute bottom-0 z-10 mt-[453px]  border-b border-white/50 hidden md:block"></div>

      {/* Cards grid */}
      <div className="md:grid hidden h-full container mx-auto px-6 md:px-10 grid-cols-1 md:grid-cols-3">
        {cardsData?.map((card, index) => (
          <CLineCard key={index} {...card} />
        ))}
      </div>
      <div>
        <div>
          <CLineMobileCard cardsData={cardsData}   />
        </div>
      </div>
    </div>
  );
};

export default CLineCardContainer;
