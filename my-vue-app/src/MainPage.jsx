import React from "react";

function MainPage() {
    return (
        <div className="relative h-[700px]">
            {/* Background Video */}
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
