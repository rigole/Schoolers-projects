import React from "react";
import ImageBanner from "../images/banner.jpg";
import OrientationImage from "../images/orientation.jpg";
import Button from "../components/Button/Button";
const HomePage = () => {

    return (
        <>
            
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
                                        <Button text="Get started" paddingX={14} paddingY={2} marginTop={4}/>
                                    </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 w-full ">
                <div className="choices flex flex-row items-center justify-center py-4 px-2">
                    <div className="items-start">
                        <img  src={OrientationImage} alt="" className="w-[350px] h-[350px] rounded-full items-center text-center py-4"/>
                    </div>
                    <div className="flex flex-col items-center justify-evenly">
                        <div className="">
                            <p className="text-center">You can also get all the informations about all examination entrance<br/>  of some schools either privates or publics schools</p>
                        </div>
                        <a className="space-x-5  rounded-md bg-transparent text-white  hover:text-white transition-all" href="">
                            <Button text="Get informations" paddingX={14} paddingY={2} marginTop={4}/>
                        </a>
                    </div>        
                </div>
            </section>


           
            <section className=" min-h-full w-full py-10">
                <p className="text-center py-4 text-3xl">Thinking about study Abroad?  we also have resources for you</p>
                <div className="choices flex justify-center ">
                    <div className="text-center py-4 px-4">
                        <p className="text-center">I just want to check countries according to my criteria</p>
                        <a className="space-x-5  rounded-md bg-transparent text-white  hover:text-white transition-all" href="#">
                            <Button text="Explore" paddingX={14} paddingY={2} marginTop={0}/>
                        </a>
                    </div>

                    <div className="text-center py-4 px-4">
                        <p className="text-center">I want to  check some of the financial resources for me</p>
                        <a className="space-x-5   rounded-md bg-transparent text-white  hover:text-white transition-all" href="#">
                            <Button text="Explore" paddingX={14} paddingY={2} marginTop={0}/>
                        </a>
                    </div>

                    <div className="text-center py-4 px-4">
                        <p className="text-center">I want to explore procedures for some countries</p>
                        <a className="space-x-5  rounded-md bg-transparent text-white hover:text-white transition-all" href="#">
                            <Button text="Explore" paddingX={14} paddingY={2} marginTop={0}/>
                        </a>
                    </div>
                </div>

            </section>



        </>
    )
   
}

export default HomePage