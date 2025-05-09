'use client'

import { TextGenerateEffect } from "@/app/Engine/TextGrow"


const cards=[{img:"https://images.unsplash.com/photo-1618477388954-7852f32655ec?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",vid:'https://videos.pexels.com/video-files/7989667/7989667-sd_360_640_25fps.mp4',role:'Website Development'},
    {img:"https://images.unsplash.com/photo-1633250391894-397930e3f5f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",vid:'https://videos.pexels.com/video-files/5925286/5925286-sd_360_640_24fps.mp4',role:"Application Development"}
  ,  {img:"https://images.unsplash.com/photo-1633250391894-397930e3f5f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",vid:'https://videos.pexels.com/video-files/5925286/5925286-sd_360_640_24fps.mp4',role:"Application Development"}
  ]
const words = `WHAT WE CAN DO`
export default function WorkArea(){
    return(
        <div className="min-h-full  bg-transparent">
            <div className="container mx-auto">
               <div className="flex flex-wrap items-start justify-between">
               <div className="p-4 xl:p-0">
               <h1 className="family text-lg md:text-3xl lg:text-4xl xl:text-5xl text-gray-400">WHAT WE CAN DO </h1>
                <h2 className="family text-lg md:text-3xl lg:text-4xl xl:text-5xl mt-1">YOUR IDEOLOGY OUR CREATION</h2>
                <h3 className="family text-lg md:text-3xl lg:text-4xl xl:text-5xl mt-1">RESULT ORENTED DYNAMIC DELIVERED </h3>
                {/* <TextGenerateEffect words={words} /> */}
               </div>

               <div className="text-sm md:text-md family font-light px-4 xl:p-0">
                  <p>we are specialized in creating dynaic intractivity all over </p>
                  <p>we are the power sector of the whole induary globally</p>
               </div>

               </div>


               {/* services section */}
               <section className="flex  gap-10 mt-20 mb-12 overflow-x-scroll overflow-y-hidden scrollbar-hide px-5 md:px-0 ">
                     {cards.map((item,index)=>(
                        <div key={index} className="flex flex-wrap justify-start gap-4 relative group">
                          <div className="px-3 xl:p-0 w-85 md:w-90 lg:h-full lg:w-80">
                          <img src={item.img} alt="" className=" h-100 md:h-100 group-hover:h-0 w-full md:w-80 group-hover:w-0 bg-cover opacity-100 hover:opacity-0 rounded-3xl " />
                     <div className="relative">
                     <video
                    src={item.vid}
                    className=" h-0 w-0 group-hover:h-100 group-hover:w-80 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-3xl "
                     autoPlay
                     loop
                    muted
                    playsInline
                  />
                   <div className="bg-black/70 inset-0 transform transilate-x-2 ease-in-out absolute "></div>
                     </div>

 <div className="group relative h-0 group-hover:h-20 overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-0  group-hover:h-15 bg-white/10 rounded-3xl
      opacity-0 transform -translate-y-full 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 ease-in-out 
      flex items-center justify-center">
    <div className="flex items-center justify-between gap-x-7">
      <h1 className="family">Get free counsltation</h1>
      <button className="rounded-full h-12 w-12 border border-white"></button>
    </div>
  </div>
</div>


                          <h1 className="text-center family mt-5 group-hover:mt-0 h-full group-hover:h-0 opacity-100 group-hover:opacity-0">{item.role}</h1>
                          </div>


                          {/* hover effect */}

                          <div className="opacity-0 hover:opacity-100 absolute z-50 inset-0 max-w-xs">
                          <h1 className="family absolute top-4 left-6 
                 transform translate-y-[-100%] opacity-0 
                 group-hover:translate-y-0 group-hover:opacity-100 
                 transition-all duration-500 ease-in-out">
                  WEBDEVELOPMENT
                  </h1>

                  <h2 className="absolute top-10 left-12 opacity-20">
                  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  
  <rect x="40" y="120" width="120" height="20" rx="5" fill="#ffffff"/>
  <rect x="50" y="60" width="100" height="60" rx="5" fill="#ffffff" stroke="#ffffff" stroke-width="2"/>


  <rect x="60" y="70" width="40" height="6" rx="2" fill="#000000">
    <animate attributeName="width" values="40;70;40" dur="2s" repeatCount="indefinite" />
  </rect>
  <rect x="60" y="82" width="60" height="6" rx="2" fill="#000000">
    <animate attributeName="width" values="60;90;60" dur="2.5s" repeatCount="indefinite" />
  </rect>
  <rect x="60" y="94" width="50" height="6" rx="2" fill="#000000">
    <animate attributeName="width" values="50;80;50" dur="1.8s" repeatCount="indefinite" />
  </rect>
</svg>

                  </h2>

                  <p className="family absolute top-65 left-6 text-sm font-light
   transform translate-x-[-100%] opacity-0
   group-hover:translate-x-0 group-hover:opacity-100
   transition-all duration-500 ease-in-out">
  Professional web development
</p>



<p className=" absolute bottom-24 left-6 text-xs font-light 
   transform translate-x-[100%] opacity-0
   group-hover:translate-x-0 group-hover:opacity-100
   transition-all duration-500 ease-in-out">
  Professional web developmentProfessional web development
  Professional web development Professional web development
  Professional web development Professional web development
  Professional web development Professional web development
</p>

                          </div>
                        </div>
                        
                     ))}
               </section>
            </div>  
        </div>
    )
}