import React, { useEffect } from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import TabComponent from "../Tabs/TabComponent";
import TabPanelComponent from "../Tabs/TabPanelComponent";
import Rating from "../Rating/Rating";
import { schoolDetails } from "../../actions/schoolActions";
import OrientationImage from "../../images/orientation.jpg";
import IucImage from "../../images/iuc.png";



const SchoolDetails = () => {
    const { school_id }  = useParams();

    //const  new_schoolID = parseInt(school_id!)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const school_details = useSelector((state:any) => state.school_details)
    const { school, loading, error } = school_details

    useEffect(() => {
        dispatch<any>(schoolDetails(school_id))
    }, [dispatch, school_id])


    const isUserSigned = localStorage.getItem("userInfo")


    return (
        <section className="pb-20 mb-35 pt-20">
            {loading ? <Loader/>
                : error
                    ? <h1>Error</h1>
                : 
                    <div className="">
                      <div className="pb-20 university_info w-full h-[790px]">
                          <img className="w-full h-2/4 mt-14 object-cover" src={OrientationImage} alt=""/>
                        <div className="pp_university_details h-[75px] w-[75px] shadow-[0_5px_5px_0_rgba(0,0,0,0.5)] rounded-2xl">
                          <img src={IucImage} className="rounded-full h-full w-full" alt="" />
                        </div>
                        <div className="m-10">
                          <div className="university_details_name flex justify-evenly my-5">
                            <h1 className="text-center text-4xl font-bold mt-2">{school.name}</h1>
                            <span className=" py-4">
                                  <Rating value={school.rating} text={`${school.rating}`} color={'#f8e825'}/>
                            </span>
                            <span className="py-4">
                                <i className="fa-sharp fa-solid fa-location-pin px-2"></i>{school.location}
                            </span>
                            { isUserSigned ?
                                <Link to="#" className="flex justify-center  rounded-md bg-transparent text-white  hover:text-white transition-all">
                                    <button className=" rounded-full  py-2 px-4 border-1 bg-amber-500 hover:bg-amber-300"><i className="fa-solid fa-heart px-2"></i>add to favourite</button>
                                </Link>  
                            :  
                                <Link to="/signin" className="flex justify-center  rounded-md bg-transparent text-white  hover:text-white transition-all">
                                    <button className=" rounded-full  py-2 px-4 border-1 bg-amber-500 hover:bg-amber-300">Login to Add this your Favourites</button>
                                </Link>  
                            } 
                              
                            
                          </div>
                          <div className="tabulation">
                            <TabComponent>
                                <TabPanelComponent  title="Overview">
                                    <div className="tabcontent">
                                        <h3 className="text-justify py-2">{school.description}</h3>
                                    </div>
                                </TabPanelComponent>
                                <TabPanelComponent  title="admissions">
                                    <div className="tabcontent">
                                        <h3>This Admissions Tab</h3>
                                    </div>
                                </TabPanelComponent>
                                <TabPanelComponent  title="Programs">
                                    <div className="tabcontent">
                                        <h3>This programs Tab</h3>
                                    </div>
                                </TabPanelComponent>
                                <TabPanelComponent  title="Majors">
                                    <div className="tabcontent">
                                        <h3>This Majors Tab</h3>
                                    </div>
                                </TabPanelComponent>
                                <TabPanelComponent  title="Others">
                                    <div className="tabcontent">
                                        <h3>This Others Tab</h3>
                                    </div>
                                </TabPanelComponent>
                            </TabComponent>

                        </div>
                        </div>
                      </div>
                    </div>

                

            }
        </section>
    )
}

export default SchoolDetails