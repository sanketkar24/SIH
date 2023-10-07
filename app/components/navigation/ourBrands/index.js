import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from '../../../../images/paradyes_logo.webp';
import img2 from '../../../../images/img2.jpeg';
import img3 from '../../../../images/img3.jpeg';
import img4 from '../../../../images/img4.jpeg';
import img5 from '../../../../images/img5.jpeg';
import img6 from '../../../../images/pepper_marquee.jpeg';
import Image from 'next/image';
import { Space } from 'antd';
function brands() {
  return (
    <>
      <main className='flex flex-col justify-center items-center h-[100%] bg-[#bad7de]'>
        <div className="text-4xl pt-20 pb-5">Our <span className="font-semibold bg-blue-400 ">Testimonials</span></div>
        <div className='font-light tablet:text-base text-sm '>Here's what people had to say about us.</div>
        <div className='flex tablet:flex-row flex-col mt-8 mb-8 items-center text-center'>
          <div className="my-10">
            <Marquee speed={"80"} pauseOnHover={true} style={{fontFamily: 'General Sans Regular', fontSize: '1.25rem', backgroundColor: 'yellow'}}>
              <Space style={{paddingRight: '2rem'}}>
                "WeCare app transformed my mental health journey, providing the support I needed at every step."
              </Space>
              <Space style={{paddingRight: '2rem'}}>
                "Finding WeCare was a game-changer - it guided me to a place of peace and resilience."
              </Space>
              <Space style={{paddingRight: '2rem'}}>
                "Thanks to WeCare, I learned to navigate through my struggles and embrace healing with open arms."
              </Space>
              {/* <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image> */}
            </Marquee>
          </div>
        </div>
      </main>
    </>
  )
}

export default brands