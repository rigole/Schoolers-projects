import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldOfStudyList } from "../actions/fiedOfStudyActions";

import {Link} from "react-router-dom";
import Loader from "../components/Loader/Loader"



const FieldStudy = () => {

    const dispatch = useDispatch()
    const field_of_study = useSelector((state:any) => state.fieldOfStudyList);
    const { fieldsOfStudy, loading, error } = field_of_study;
    const [input, setInput] = useState('');

    const [fieldFiltered, setfieldFiltered] = useState<any>([fieldsOfStudy])

    const filteredFieldStudy = async (input) => {
        const filtered = fieldsOfStudy.filter(field => {
            return field.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setfieldFiltered(filtered);
    }


    useEffect(() => {
        dispatch<any>(fieldOfStudyList())
    },[dispatch])

    return (
        <section className="fieldstudy_section pt-20">
            <div className="text-center ">
                <p className="text-4xl capitalize font-bold mb-4 font-comf">Search For a Specific Field of study</p>
            </div>
            <div className="text-center" >
                <form className="px-0 py-0">
                    <input value={input} onChange={(e) => filteredFieldStudy(e.target.value)} className="nosubmit w-1/2 h-9 rounded-xl" type="search" placeholder="Search field of study" required/>
                </form>
            </div>



                <div className="fieldstudy_card_group">
                    { loading ? < Loader/>
                        : error
                            ? <h1>Error</h1>
                        :
                            (
                                fieldsOfStudy.map(field => (
                                    <div className="fieldstudy_card">
                                        <div className="imgbox">
                                            <img className="field_image w-full h-full object-cover" src={`http://127.0.0.1:8000${field.image}`} alt=""/>
                                        </div>
                                        <div className="fieldstudy_content">
                                            <h3 className="text-xl uppercase font-bold m-2">{field.name}</h3>
                                            <p className="fieldstudy_description text-black">
                                                {field.description}
                                            </p>
                                            <Link to={`fields/${field.field_id}`} className="readmore_field flex justify-center rounded-md bg-transparent text-white  hover:text-white transition-all">
                                                <button className=" rounded-full  py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Read more</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))

                            )
                    }


            </div>


        </section>
    )
}

export default FieldStudy