import React from 'react';
import OrientationImage from "../images/orientation.jpg"

const Orientation = () => {

    return(
        <section className="flex flex-col text-center items-center bg-gray-100 py-4">
            <div>
                <img  src={OrientationImage} alt="" className="w-[350px] h-[350px] rounded-full items-center text-center py-4"/>
            </div>
            <div className="px-74">
                <p className="">Don't know where to start ? Think about taking an orientation test <br/>to know in which field of study you could succeed</p>
            </div>
            <a className="space-x-5  rounded-md bg-transparent text-white  hover:text-white transition-all" href="">
                <button className="rounded-full mt-4 py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Take the test</button>
            </a>

        </section>
    )
}

export default Orientation