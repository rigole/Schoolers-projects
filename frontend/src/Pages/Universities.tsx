import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { schoolList } from "../actions/schoolActions";
import OrientationImage from "../images/orientation.jpg"
import IucImage from "../images/iuc.png"

function Universities() {

   /* const dispatch = useDispatch()*/

    return(
        <section className="z-20 pt-20">
                    <div className="text-center pt-4">
                        <p className="text-4xl capitalize font-bold mb-4 font-comf">Search Universities</p>
                    </div>
                    <div className="text-center" >
                        <form className="px-0 py-0">
                            <input className="nosubmit w-1/2 h-9 rounded-xl" type="search" placeholder="Search University" required/>
                        </form>
                    </div>

                <div className="filters flex w-full py-4 justify-around px-4">
                    Filter
                    <div className="criteria flex">
                        <span className="px-8">
                            <label htmlFor="">IPES
                                <input className="ml-1" type="checkbox"/>
                            </label>
                        </span>
                        <span className="px-8">
                            <label htmlFor="" >Universities
                                <input className="ml-1" type="checkbox"/>
                            </label>
                        </span>
                        <span className="px-8">
                            <label htmlFor="">files study admission
                                <input className="ml-1" type="checkbox"/>
                            </label>
                        </span>
                        <span className="px-8">
                            <label htmlFor="">admission on competition
                                <input className="ml-1" type="checkbox"/>
                            </label>
                        </span>
                    </div>
                </div>
            <div className="flex school_list">
                <div className="relative university_singe_card w-[350px] h-[590px] shadow-[0_30px_30px_0_rgba(0,0,0,0.5)] rounded-2xl my-9 ml-4">
                    <div className="h-[40%] w-full">
                        <img src={OrientationImage} className="rounded-t-2xl" alt="" />

                            <div className="pp_university bg-white h-[75px] w-[75px] shadow-[0_5px_5px_0_rgba(0,0,0,0.5)]  rounded-2xl">
                                <img src={IucImage} className="rounded-full h-full w-full" alt="" />
                            </div>
                            <div className="photo_university">
                                <i className="fa-regular fa-thumbs-up"></i>
                            </div>




                    <div className="school_description">
                        <h1 className="text-center text-2xl font-bold ">Institut universitaire de la côte</h1>

                        <div className="location">
                            <span> <i className="fa-sharp fa-solid fa-location-pin"></i>  Douala</span>
                            <span><i className="fa-solid fa-school"></i> private</span>
                        </div>
                        <p className="text-center m-4">
                            Lorem ipsum dolor sit amet,  fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli
                            anim id est laborum
                        </p>
                    </div>
                    <a className="flex justify-center m-4 rounded-md bg-transparent text-white  hover:text-white transition-all" href="">
                        <button className=" rounded-full  py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Read more</button>
                    </a>
                </div>
                </div>

                <div className="relative w-[350px] h-[590px] shadow-[0_30px_30px_0_rgba(0,0,0,0.5)] rounded-2xl my-9 ml-4">
                    <div className="h-[40%] w-full">
                        <img src={OrientationImage} className="rounded-t-2xl" alt="" />
                        <div className="pp_university bg-white h-[75px] w-[75px] shadow-[0_5px_5px_0_rgba(0,0,0,0.5)]  rounded-2xl">
                            <img src={IucImage} className="rounded-full h-full w-full" alt="" />
                        </div>


                        <div className="school_description">
                            <h1 className="text-center text-2xl font-bold ">Institut universitaire de la côte</h1>

                            <div className="location">
                                <span> <i className="fa-sharp fa-solid fa-location-pin"></i>  Douala</span>
                                <span><i className="fa-solid fa-school"></i> private</span>
                            </div>
                            <p className="text-center m-4">
                                Lorem ipsum dolor sit amet,  fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli
                                anim id est laborum
                            </p>
                        </div>
                        <a className="flex justify-center m-4 rounded-md bg-transparent text-white  hover:text-white transition-all" href="">
                            <button className=" rounded-full  py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Read more</button>
                        </a>
                    </div>
                </div>

            </div>

                
        </section>
    )
}

export default Universities