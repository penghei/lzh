import { ContainerOutlined } from "@ant-design/icons";
import React from "react";

const Detailsidebox = () => {
    return (
        <div className="detail-sidebox">
            <div className="tagSelect-title">
                <ContainerOutlined style={{fontSize:24}} />          
                <div className="title-font">基本信息</div>  
            </div>
            <div className="detail-sidebox-flex">
                <div style={{fontSize:16}}>
                    <b>项目名称: </b>智慧双创平台
                </div>
                <div style={{fontSize:16}}>
                    <b>项目负责人: </b>李宁
                </div>
                <div style={{fontSize:16}}>
                    <b>联系电话: </b>12345678910
                </div>
                <div style={{fontSize:16}}>
                    <b>联系邮箱: </b>Lining@uestc.cn
                </div>
                <div style={{fontSize:16}}>
                    <b>开发地址: </b><br />电子科技大学创新工坊
                </div>
            </div>
        </div>
    )
}

export default Detailsidebox;