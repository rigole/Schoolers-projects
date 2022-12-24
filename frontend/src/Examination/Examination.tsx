import React from "react";
import OrientationImage from "../images/orientation.jpg"

const Examination = () => {

    return (
        <section className="bg-gray-200 w-full ">
            <div className="choices flex flex-row items-center justify-center py-4 px-2">
                <div className="items-start">
                    <img  src={OrientationImage} alt="" className="w-[350px] h-[350px] rounded-full items-center text-center py-4"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="">
                        <p className="text-center">You can also get all the informations about all examination entrance<br/>  of some schools either privates or publics schools</p>
                    </div>
                    <a className="space-x-5  rounded-md bg-transparent text-white  hover:text-white transition-all" href="">
                        <button className="rounded-full mt-4 py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Get informations</button>
                    </a>
                </div>        
            </div>
        </section>
    )
}

export default Examination