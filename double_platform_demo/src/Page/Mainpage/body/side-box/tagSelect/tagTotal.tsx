import { Tag } from "antd";
import React, { FC} from "react";

interface Iprops{
    tagList:string[]
}

const Tagtotal:FC<Iprops> = ({tagList}) => {
    return (
        <div>
            {
                tagList && tagList.map((tag:string) => {
                    return (
                        <Tag color="#91d5ff" style={{marginTop:8}}>{tag}</Tag>
                    )
                })
            }
        </div>
    )
}

export default Tagtotal;


