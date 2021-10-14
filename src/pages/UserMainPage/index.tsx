import React from "react";
import Body from "./body/index";
import Header from "@/components/Header";
import '@/styles/User.css'

const Mainpage = () => {
    return(
        <div className="UserPage">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

export default Mainpage;