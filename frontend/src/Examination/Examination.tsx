import React from "react";
import OrientationImage from "../images/orientation.jpg";

const Examination = () => {

    return (
        <section className="flex flex-row  items-end bg-gray-200 ">
            <div>
                <img  src={OrientationImage} alt="" className="w-[350px] h-[350px] rounded-full items-center text-center py-4"/>
            </div>
            <div className="">
                <div className="">
                    <p className="text-center">Don't know where to start? Think about taking an orientation test <br/>to know in which field of study you could succeed</p>
                </div>
                <a className="space-x-5  rounded-md bg-transparent text-white  hover:text-white transition-all" href="">
                    <button className="rounded-full mt-4 py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Take the test</button>
                </a>
            </div>
         
        </section>
    )
}

export default Examination