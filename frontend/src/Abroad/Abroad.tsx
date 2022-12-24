import React from "react";


const Abroad = () => {

    return (
        <section className=" min-h-full w-full py-10">
            <p className="text-center py-4 text-3xl">Thinking about study Abroad?  we also have resources for you</p>
            <div className="choices flex justify-center ">
                <div className="text-center py-4 px-4">
                    <p className="text-center">I just want to check countries according to my criteria</p>
                    <a className="space-x-5  rounded-md bg-transparent text-white  hover:text-white transition-all" href="#">
                        <button className="rounded-full  py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Explore</button>
                    </a>
                </div>

                <div className="text-center py-4 px-4">
                    <p className="text-center">I want to  check some of the financial resources for me</p>
                    <a className="space-x-5   rounded-md bg-transparent text-white  hover:text-white transition-all" href="#">
                        <button className="rounded-full text-center py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Explore</button>
                    </a>
                </div>

                <div className="text-center py-4 px-4">
                    <p className="text-center">I want to explore procedures for some countries</p>
                    <a className="space-x-5  rounded-md bg-transparent text-white hover:text-white transition-all" href="#">
                        <button className="rounded-full py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300 ">Explore</button>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Abroad