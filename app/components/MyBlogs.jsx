import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const MyBlogs = () => {
  return (
    <div id = "myBlogs" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>blogs</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Blogs</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        以下博客纪录了一些个人在工作、学习、项目开发过程中的体会与技术探索，包括算法理解、技术理解、个人项目总结等等方面。
      </p>

      <div className='grid grid-cols-4 gap-3 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => (
          <div key = {index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500'>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more <Image src={assets.right_arrow} alt='' className='w-4' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBlogs
