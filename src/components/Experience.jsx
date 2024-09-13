import React from 'react'
import java from '../../public/java.png';
import html from '../../public/html.png';
import css from '../../public/css.jpg';
import javascript from '../../public/javascript.png';
import oracle from '../../public/oracle.png';
import spring from '../../public/spring.png';
import springboot from '../../public/springBoot.jpg';

const Experience = () => 
{
    const cardItems=
    [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:4,
            logo:java,
            name:"Java"
        },
        {
            id:5,
            logo:spring,
            name:"Spring"
        },
        {
            id:6,
            logo:springboot,
            name:"SpringBoot"
        },
        {
            id:7,
            logo:oracle,
            name:"Oracle"
        },
    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, doloremque!</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                {
                    cardItems.map(({id,logo,name})=>(
                        <div key={id} className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md cursor-pointer p-1 hover:scale-105 duration-300'>
                            <img src={logo} className='w-[150px] rounded-full'/>
                            <div>
                                <div className=''>{name}</div>
                            </div>        
                    </div>
                ))
            }
            </div>
        </div>      
    </div>
  )
}

export default Experience;
