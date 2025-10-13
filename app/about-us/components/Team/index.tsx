import CTitle from '@/app/components/common/CTitle'
import React from 'react'
import TeamCard from './TeamCard'


const Team = () => {
  return (
    <div className='mt-[100px] lg:mt-[130px] text-center'>
        <CTitle title='Mee the Team'/>
        <div>
        <div className="grid  h-full container mx-auto px-6 md:px-10 grid-cols-2 md:grid-cols-4 gap-[30px] ">
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>

        </div>
        </div>
    </div>
  )
}

export default Team