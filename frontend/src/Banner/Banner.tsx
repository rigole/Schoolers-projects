import React from "react";
import ImageBanner from "../images/banner.jpg";

const Banner = () => {
    return(
        <section className="relative h-screen">
            <img src={ImageBanner} alt="" className="h-full w-full object-cover md:w-full md:object-cover md:h-full"/>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 h0full w-full">
                <div className="flex flex-col min-h-full w-full items-center justify-center">
                    <div className="space-y-6">
                        <div className="text-white text-center">
                            <p className="text-4xl capitalize font-bold mb-4 font-comf">Find the school, Find the Program, Find the Field</p>
                            <p>Search schools according to your criteria, and where you fits according to your ambitions</p>

                                <a className="space-x-5  rounded-md bg-transparent text-white  hover:text-white transition-all" href="">
                                    <button className="rounded-full mt-4 py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Get started</button>
                                </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner