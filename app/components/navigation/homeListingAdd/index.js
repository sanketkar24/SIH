import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import animation from "../../../../public/animation.json"; // Replace with the path to your Lottie animation JSON file

function Advert() {
  // Define Lottie options
  return (
    <>
      <main className="flex flex-row justify-between items-start h-80 rounded-xl bg-gray-800 w-[80%] my-10 px-8 pt-20 text-white text-2xl font-bold h-auto">
        <div className="flex flex-col px-10 items-start justify-center" style={{alignSelf: 'center'}}>
          <div>"Find Your Zen, Take a Mental Spin!"</div>
          <Link href={"/doctors"} style={{alignSelf: 'center'}} className="bg-sky-500 text-lg rounded-lg px-4 hover:bg-blue-500 ease-in duration-300 h-auto text-white my-10 py-3">
            Join Us
          </Link>
        </div>
        
        {/* Display the Lottie animation */}
        <div style={{ width: "50%", height: "100%" }}>
          <Lottie animationData={animation} loop={true}/>
        </div>
      </main>
    </>
  );
}

export default Advert;
