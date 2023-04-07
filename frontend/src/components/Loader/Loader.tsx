import React from "react";
//import "./Loader.css";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {

    return(
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
        />
    )
}

export default Loader