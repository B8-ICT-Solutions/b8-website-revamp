import React from 'react';

import { CLOUDSERVICES } from '@/app/utils/mock';
import CloudComputingCard from './CloudComputingCard';

const CloudComputing = () => {
  return (
    <div className='mt-[80px] xl:mt-[140px] p-5 flex flex-col gap-[20px] lg:gap-y-[30px] lg:gap-0 md:grid grid-cols-3 container mx-auto'>
      {CLOUDSERVICES.map((service) => (
        <CloudComputingCard
          key={service.id}
          title={service.title}
          description={service.description}
          innerCrystals={service.innerCrystals}
        />
      ))}
    </div>
  );
};

export default CloudComputing;
