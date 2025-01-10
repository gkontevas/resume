"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { TAB_DATA } from '@/data/Data'



const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending , startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        }) ;
    };
  return (
    <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about-image.png" alt="code-workspace" width={600} height={500} />
      <div className="mt-10 md:mt-0 text-left flex flex-col h-full">
        <h2 className='text-5xl font-bold text-[#8a00c4] mb-4'>About Me</h2>
        <p className='text-base lg:text-xl'>
         I'm a 20 year old beginner developer with a big passion about coding and the world of technology. Trying to improve everyday and get the better out of myself! Below you can check my education and skills.
        </p>
        <div className='flex flex-row justify-start mt-9'>
           <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills{""} </TabButton>
           <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education{""} </TabButton>
           <TabButton selectTab={() => handleTabChange("Certificates")} active={tab === "Certificates"}> Certificates{""} </TabButton>
        </div>
        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
      </div>
    </section>
  )
}

export default AboutSection
