import CTitle from '@/app/components/common/CTitle'
import React from 'react'
import TeamCard from './TeamCard'
import teamMembers from '@/app/data/team'


const Team = () => {
  return (
    <div className='mt-[100px] lg:mt-[130px] text-center'>
      <CTitle title='Meet the Team' />
      <div className="grid h-full container mx-auto px-6 md:px-10 grid-cols-2 md:grid-cols-4 gap-[30px]">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            position={member.position}
            photo={member.photo}
          />
        ))}
      </div>
    </div>
  )
}

export default Team;
