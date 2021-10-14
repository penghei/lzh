import { UserOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";

const Detailmember = () => {
    return (
            <div className="Detail-data-item-member">
                <div  style={{width:84,float:'left',marginRight:12}} className="Detail-data-item-member-icon">
                    <UserOutlined style={{fontSize:64}}/>
                    <h3 className="flex_all" style={{marginTop:8}}>李宁</h3>
                </div>
                <div>
                    <h2>项目负责人</h2>
                    <span>李宁，电子科技大学在读本科生。电子科技大学创新工坊XX工作室负责人，曾任XX部门负责人</span>
                </div>
                <Divider />
            </div>
    )
}

export default Detailmember;