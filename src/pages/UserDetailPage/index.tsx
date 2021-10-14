import React from "react";
import Header from "@/components/Header";
import BriefBox from "./briefBox";
import Detailbody from "./Detailbody";

const Deatailpage = () => {
    return (
        <div className="UserPage">
            <Header></Header>
            <BriefBox></BriefBox>
            <Detailbody></Detailbody>
        </div>
    )
}

export default Deatailpage;