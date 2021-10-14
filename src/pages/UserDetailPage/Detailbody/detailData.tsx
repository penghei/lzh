import { UserOutlined } from "@ant-design/icons";
import { Divider, Empty, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import React from "react";

const Detaildata = () => {
    return (
        <div style={{marginBottom:16}}>
            <Menu mode="horizontal" className="flex_all">
                <MenuItem>主要介绍</MenuItem>
                <MenuItem>核心成员</MenuItem>
                <MenuItem>资金情况</MenuItem>
            </Menu>
            <div className="Detail-data-box">
                <div className="Detail-data-item bg-padding">
                    <h1 style={{fontWeight:500}}>主要介绍</h1>
                    <span>
                    1、本系统采用了传统的前后端分离架构，再加上用来处理数据的算法。 
前端通过接收后端返回的 json 数据，将页面需要展示的数据动态渲染出来， 通过 React.js处理业务逻辑部分的问题，利用antD实现页面的 UI 设计与美化，通过Umi内置的路由实现单页应用内的页面跳转，通过 Redux控制前端组件的状态信息。
                    </span>
                    <br/>
                    <br/>
                    <span>
                    2、后端分为业务处理层和数据层，在业务处理层主要采用了当今盛行的 Springboot，SpringMVC 使其用于对前端发送请求的处理，并将有效可用的 json 字符串返回给前端，实现前端与后端之间的通信；而数据层分为数据数据访问层（Data Access）以及数据存储层（Data Storage），由Redis数据库与MySQL数据库并辅以Mybatis中间件组成的数据访问层（Data Access）使得算法处理后的数据可以筛选后从数据库中取出，作为数据存储层（Data Storage）和后端的桥梁，是系统中不可缺少的重要模块。
                    </span>
                </div>
            </div>


            <div className="Detail-data-box">
                <div className="Detail-data-item bg-padding">
                    <h1 style={{fontWeight:500}}>核心成员</h1>
                    <div className="Detail-data-item-member" style={{marginTop:16}}>
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

                    <div className="Detail-data-item-member" style={{marginTop:16}}>
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

                    <div className="Detail-data-item-member" style={{marginTop:16}}>
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
                </div>
            </div>


            <div className="Detail-data-box">
                <div className="Detail-data-item bg-padding">
                    <h1 style={{fontWeight:500}}>资金情况</h1>
                    <Empty />
                </div>
            </div>
        </div>
    )
}

export default Detaildata;