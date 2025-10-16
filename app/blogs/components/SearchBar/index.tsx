import React from 'react';
import Image from 'next/image';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="container mx-auto flex justify-center mt-6">
      <div className="w-full max-w-[332px] lg:max-w-[500px] h-[50px] lg:h-[60px] rounded-[25px] lg:rounded-full flex items-center gap-2 px-3 lg:px-5 border border-white/20 bg-white/5 backdrop-blur-sm glass-bg">
        <Image
          src="/search.svg"
          alt="search"
          width={17}
          height={17}
          className="lg:w-6 lg:h-6"
          priority
        />

        <input
          type="text"
          placeholder="Search by name and keywords"
          className="flex-1 bg-transparent outline-none text-white placeholder-white/60 text-[14px] lg:text-[16px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          className="bg-[#39048A] font-inter text-white text-[12px] lg:text-[14px] rounded-[20px] h-[30px] lg:h-[40px] px-[20px] lg:px-[25px] hover:bg-[#4B0ABF] transition-colors duration-300 cursor-pointer"
          onClick={() => {}}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
