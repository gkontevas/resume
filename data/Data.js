import React from 'react'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc text-xl pl-2'>
                <li>React</li>
                <li>Next.js</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>Javascript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2 text-xl'>
                <li>On-going Studies at IEK EUROPROODOS.</li>
                <li>On-going workshops, seminars and online courses.</li>
            </ul>
        )
    },
    {
        title: "Certificates",
        id: "Certificates",
        content: (
            <ul className='list-disc pl-2 text-xl'>
                <li>E.C.D.L. Certificate</li>
                <li>Senior High School Lykeio Lehaiou Certificate</li>
            </ul>
        )
    }
]

export { TAB_DATA }