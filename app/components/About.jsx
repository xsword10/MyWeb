import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'


const About = () => {
  return (
    <div id = "about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>
      <div className='w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div className='w-64 sm:w-40 rounded-3xl max-w-none'>
            <Image src = {assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                心态良好、乐观上进，有很强的抗压能力和自我调整能力。积极主动、善于学习、热衷团队协作、责任心强。身体健康、
热爱运动，曾获电子科技大学新生杯羽毛球赛男子双打第五名，且曾作为队长带队参加东北大学竞“计”杯羽毛球团体
赛获得银牌。此外还热爱篮球、长跑、健身等。
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                    key={index}>
                        <Image src={icon} alt = {title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>

            <h4 className='my-6 text-gray-700 font-Ovo text-center'>Tools I use</h4>

            <ul className='flex items-center gap-3 sm:gap-5 justify-center'>
                {toolsData.map((tool, index) => (
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                    key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About