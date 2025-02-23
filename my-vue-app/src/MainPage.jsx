import React from "react";

function MainPage() {
    const [showLocations, setShowLocations] = React.useState(false);
    return (
        <div className="relative  h-[700px] overflow-hidden">
            {/* Background Video */}
            <div className="black  fixed  z-20 w-full h-full bg-[#0000003d]"></div>
            <div className="slider  overflow-y-auto font-mulish absolute scroll-auto  z-30 w-[45%] h-full bg-[white] pb-[62px] px-4 pt-3 pl-[36px] pr-[32px]">
                        <div className="flex mt-[30px] align-middle justify-between items-center  ">
                        <img src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=128&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75 2x" alt="" />
                        <button 
                        className="bg-[white] mr-3.5 rounded-full h-[25px] border-gray-400 cursor-pointer border-[1px] w-[25px] flex align-middle justify-center"
                        onClick={()=>{
                            document.querySelector(".slider").classList.add("slide-right");
                            document.querySelector(".slider").classList.remove("slide");
                            document.querySelector(".black").style.visibility="hidden";
                            document.body.style.overflow = "auto";
                        }}> &#x2715; </button>
                        </div>
                        <div className="mt-[50px] flex relative  cursor-pointer">
                            <div className="size-7  mt-[10px]">
                                <img className="h-full w-full object-contain"  src="https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75" alt="" />
                            </div>
                            <div className="flex parent overflow-hidden  ml-[10px]  flex-col gap-1">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Parks</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Explore your favourite Wonderla Park</p>
                                <div className={`grid locations grid-cols-2 gap-6  `}>
                                    <div className="c capitalize w-[199px] h-[89px] flex flex-col items-center gap-3 rounded-[14px] border border-gray-200 p-2 ">
                                        <img className="size-9 rounded-full" src="https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_1_c46850a98c.png?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_1_c46850a98c.png?w=96&q=75 2x" alt="" />
                                        <h1>Mumbai</h1>
                                    </div>
                                    <div className="c capitalize w-[199px] h-[89px] flex flex-col items-center gap-3 rounded-[14px] border border-gray-200 p-2 ">
                                        <img className="size-9 rounded-full" src="https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_a5c3902ca6.png?w=96&q=75" alt="" />
                                        <h1>Pune</h1>
                                    </div>
                                    <div className="c capitalize w-[199px] h-[89px] flex flex-col items-center gap-3 rounded-[14px] border border-gray-200 p-2 ">
                                        <img className="size-9 rounded-full" src="https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_2_04e5b929ab.png?w=96&q=75" alt="" />
                                        <h1>Pune</h1>
                                    </div>
                                    <div className="c capitalize w-[199px] h-[89px] flex flex-col items-center gap-3 rounded-[14px] border border-gray-200 p-2 ">
                                        <img className="size-9 rounded-full" src="https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_1_f18a5c6566.png?w=96&q=75" alt="" />
                                        <h1>Pune</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="size-4 ml-[50px] mt-[20px]">
                                <img src="/down.png" className="w-full h-full" alt="" onClick={() => {
                                    if(!showLocations){
                                        setShowLocations(!showLocations);
                                        document.querySelector(".locations").classList.remove("removeLocations");
                                        document.querySelector(".locations").classList.add("showLocations");
                                    }
                                    else{
                                        setShowLocations(!showLocations);
                                        document.querySelector(".locations").classList.remove("showLocations");
                                        document.querySelector(".locations").classList.add("removeLocations");
                                    }
                                    
                                }} />
                            </div>
                        </div>
                        <hr className="mt-[10px] text-[#cacacac2]  mb-[10px]"/>
                        <div className="mt-[20px]  flex">
                        <div className="size-7">
                                <img className="h-full mt-[10px] w-full object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Resorts</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Get a rejuvenating experience at Wonderla Resort</p>
                            </div>

                        </div>
                        <hr className="mt-[10px] text-[#cacacac2]  mb-[10px]"/>
                        <div className="mt-[20px]  flex">
                            <div className="size-7">
                                <img className="h-full mt-[10px] w-full object-contain" src=" https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Offers & Combos</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Plan the perfect day with exciting offers</p>
                            </div>

                        </div>

                        <hr className="mt-[10px] text-[#cacacac2]  mb-[10px]"/>
                        <div className="mt-[20px]  flex">
                            <div className="size-7">
                                <img className="h-full mt-[10px] w-full object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Timings and Guidelines</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Know the timings and other guidelines</p>
                            </div>

                        </div>
            
                        <hr className="mt-[10px] text-[#cacacac2]  mb-[10px]"/>
                        <div className="mt-[20px]  flex bg-[#FAD500] p-[15px] rounded-xl">
                            <div className="size-10">
                                <img className="h-full mt-[10px] w-full object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Group Booking</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Reach out our team</p>
                            </div>

                        </div>
                        <div className="mt-[20px]  flex bg-[#5918df] text-white p-[15px] rounded-xl">
                            <div className="size-10">
                                <img className="h-full mt-[10px] w-full object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Tour Operational Portal</p>
                                <p className="text-xs text-white inline-block font-mulish font-normal !leading-[1.255] ">Reach out our team</p>
                            </div>

                        </div>
                        <div className="mt-[20px]  flex bg-[#FAD500] p-[15px] rounded-xl">
                            <div className="size-10">
                                <img className="h-full w-full object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Partner With Us</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Reach out our team</p>
                            </div>

                        </div>
                       

                        <div className="mt-[20px]  flex">
                            <div className="size-7">
                                <img className="h-full w-full object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">About Us</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Know About Us</p>
                            </div>

                        </div>

                        <hr className="mt-[10px] text-[#cacacac2]  mb-[10px]"/>
                        <div className="mt-[20px]  flex">
                            <div className="size-7">
                                <img className="h-full w-full object-contain" src=" https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Quick Links</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Explore all other relevant information here</p>
                            </div>

                        </div>
          
                        <hr className="mt-[10px] text-[#cacacac2]  mb-[10px]"/>
                        <div className="mt-[20px]  flex ">
                            <div className="size-7">
                                <img className="h-full w-full object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75" alt="" />
                            </div>
                            <div className="flex flex-col gap-1 ml-[20px]">
                                <p className="text-[1.2rem] font-mulish font-sans capitalize  ">Contact  Us</p>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-500">Know About Us</p>
                            </div>

                        </div>
                        <hr className="mt-[30px] mb-[140px] text-[#cacacac2]  "/>
        
      </div>
            <video className="absolute w-full h-full object-cover" loop muted autoPlay>
                <source src="https://d22pimhl2qmbj7.cloudfront.net/public/Desktop_WONDERLA_Signature_Video_16x9_53417e3f1d.mp4" type="video/mp4" />
            </video>

            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-[#3333335c] flex flex-col items-center  text-center   px-4">
                <div className="relative top-[200px]">
                <h1 className="font-black max-w-[822px] uppercase !leading-none transition duration-700 ease-in-out !bg-clip-text text-2xl max-lg:tracking-[0.01em] text-transparent opacity-90 [-webkit-text-stroke:1px_#FFDC0E] [background:linear-gradient(132deg,rgba(255,226,51,0.8)_18.51%,rgba(184,157,0,0.8)_117.06%)] [text-shadow:2px_2px_8px_rgba(250,214,0,0.64),2px_4px_6px_rgba(0,0,0,0.40)] sm:text-4xl md:text-5xl lg:text-6xl lg:[-webkit-text-stroke:2px_#FFDC0E]">
                    India's Largest Amusement Park Chain!
                </h1>
                <h2 className="text-xs font-mulish !leading-[1.255] max-w-[822px] font-black uppercase text-white sm:text-sm lg:text-base mt-[40px]">
                    Bringing joy to over 45 Million faces with one mission : Creating Mind Blowing Fun !!!
                </h2>
                <h4 className="md:text-base font-mulish  !leading-[1.255] text-white text-[10px] font-bold uppercase text-yellow mt-[60px]">
                    Select your Wonder Park
                </h4>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
