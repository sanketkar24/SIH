import React from 'react'
import img1 from '../../../../images/img1.jpeg';
import img2 from '../../../../images/img2.jpeg';
import img3 from '../../../../images/img3.jpeg';
import img4 from '../../../../images/img4.jpeg';
import img5 from '../../../../images/img5.jpeg';
import img6 from '../../../../images/img6.jpeg';
import Image from 'next/image';

function cards() {
  return (
    <>
  <main className='flex flex-col justify-center items-center h-[100%]'>
  <div className="text-4xl pt-20 pb-5">Our <span className="font-semibold bg-amber-300 ">Offerings</span></div>
    <div className='font-light tablet:text-base text-sm '>Discover Mental Peace</div>
    <div className='flex tablet:flex-row flex-col mt-8 mb-8 items-center text-center'>
        <div className='flex flex-col h-44 w-44 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '> 
        <Image src={img1} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <div className='pb-2 px-4'>Personalized Self Assessment</div>
        </div>
        <div className='flex flex-col h-44 w-44 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '> 
        <Image src={img2} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <div className='pb-2 px-4'>AI Driven Conversations</div>
        </div>
        <div className='flex flex-col h-44 w-44 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '> 
        <Image src={img3} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <div className='pb-2 px-4'>Emotion Analysis</div>
        </div>
        <div className='flex flex-col h-44 w-44 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '> 
        <Image src={img4} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <div className='pb-2 px-4'>Peer Support and Community Engagement</div>
        </div>
        <div className='flex flex-col h-44 w-44 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '> 
        <Image src={img5} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <div className='pb-2 px-4'>Recomendation</div>
        </div>
        <div className='flex flex-col h-44 w-44 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '> 
        <Image src={img6} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <div className='pb-2 px-4'>Professional Guidance</div>
        </div>
    </div>
  </main>
    </>
  )
}

export default cards