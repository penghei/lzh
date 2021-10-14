import { HeartOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Divider, Tag } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Datamember } from "./index"

interface Iprops{
    dataitem:Datamember[]
}

const Dataitem:FC<Iprops> = ({dataitem}) => {
    return (
        <div>
            {
                dataitem && dataitem.map((item:Datamember) => {
                    return (
                        <div className="data-show">
                            <div className="card-padding">
                                <h1 className="data-title"><Link to="/user/detail" className="data-title-words">{item.title}</Link></h1>
                                <span className="text-hide">{item.brief}</span>
                            </div>
                            <div className="data-tag-padding">
                                {
                                    item.tagList.map((tag:string) => {
                                        return(
                                            <Tag color="#40a9ff">{tag}</Tag>
                                        )
                                    })
                                }
                                <div style={{float:'right',width:100,padding:2,marginBottom:8}} className="flex_space">
                                    <Button size="middle" shape="circle" icon={<LikeOutlined />}></Button>
                                    <Button size="middle" shape="circle" icon={<HeartOutlined />}></Button>
                                </div>
                            </div>
                            <Divider/>
                        </div>   
                    )               
                })
            }
        </div>
    )
}

export default Dataitem;