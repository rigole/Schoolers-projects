import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { schoolList } from "../actions/schoolActions";
import OrientationImage from "../images/orientation.jpg";
import Loader from "../components/Loader/Loader";
import IucImage from "../images/iuc.png";
import Button from "../components/Button/Button";

function Universities() {

    const dispatch = useDispatch();
    const school_list = useSelector((state:any) => state.schoolList);
    const { schools, loading, error } = school_list;

    useEffect(() => {
        dispatch<any>(schoolList())
    }, [dispatch])

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
            <div className="school_list">
                { loading ? <Loader/>
                    : error ? <h1>Error</h1>
                        :
                        schools.map(school => (
                            <div className="relative university_single_card  shadow-[0_30px_30px_0_rgba(0,0,0,0.5)] rounded-2xl my-9 ml-4">
                                <div className="h-[40%] w-full">
                                    <img src={OrientationImage} className="rounded-t-2xl" alt="" />
            
                                        <div className="pp_university bg-white h-[75px] w-[75px] shadow-[0_5px_5px_0_rgba(0,0,0,0.5)]  rounded-2xl">
                                            <img src={IucImage} className="rounded-full h-full w-full" alt="" />
                                        </div>
                                        <div className="like_university h-[45px] w-[45px] px-1 py-1 shadow-[0_5px_5px_0_rgba(0,0,0,0.5)]">
                                            <i className="fa-regular fa-thumbs-up fa-2x"></i>
                                        </div>
                                <div className="school_description">
                                    <h1 className="text-center text-2xl font-bold mt-2">{school.name}</h1>
            
                                    <div className="location">
                                        <span> <i className="fa-sharp fa-solid fa-location-pin"></i>Douala</span>
                                        <span><i className="fa-solid fa-school"></i> private</span>
                                    </div>
                                    <p className="text-center m-4">
                                    {school.description}
                                    </p>
                                </div>
                                <Link to="/universities" className="flex justify-center m-4 rounded-md bg-transparent text-white  hover:text-white transition-all">
                                    <Button text="Read More" paddingX={14} paddingY={2} marginTop={0}/>
                                </Link>
                            </div>
                </div>
                        ))} 
            </div>

              
        </section>

    )

}
export default Universities