import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import {Link} from "react-router-dom";
import { programList } from "../actions/programsActions";

const Programs = () => {
    const [programInput, setProgramInput] = useState("")

    const dispatch = useDispatch()
    const programs_list = useSelector((state:any) => state.programState);

    const { programs, loading, error } = programs_list;

    console.log(programs)

    useEffect(() =>{
        dispatch<any>(programList())
    }, [dispatch])

    return (
        <section className="program_section  pt-20">
            <div className="text-center">
                <p className="text-4xl capitalize font-bold mb-4 font-comf">Search Programs</p>
            </div>
            <div className="text-center" >
                <form className="px-0 py-0">
                    <input value={programInput} onChange={(e => setProgramInput(e.target.value))} className="nosubmit w-1/2 h-9 rounded-xl" type="search" placeholder="Search Programs" required/>
                </form>
            </div>

            <div className="programs_card_group">
                { loading ? <Loader/>
                    : error
                        ? <h1>Error</h1>
                    :
                        (
                            programs.map(program => {
                                if(programInput == "" || program.name.toLowerCase().includes(programInput.toLowerCase()) ){
                                    return (
                                        <div className="program_card">
                                        <div className="imgbox">
                                            <img className="program_image w-full h-full object-cover" src={`http://127.0.0.1:8000${program.image}`} alt=""/>
                                        </div>
                                        <div className="program_content">
                                            <h3 className="text-xl uppercase font-bold m-2">{program.name}</h3>
                                            <p className="program_description text-black">
                                                {program.description}
                                            </p>
                                            <Link to={`/programs/${program.program_id}`} className="readmore_program flex justify-center rounded-md bg-transparent text-white  hover:text-white transition-all">
                                                <button className=" rounded-full  py-2 px-14 border-1 bg-amber-500 hover:bg-amber-300">Read more</button>
                                            </Link>
                                        </div>
                                    </div>
                                    )
                                }
                            }
                                
                                
                            )
                        )
                }
            </div>

        </section>
    )
}

export default Programs