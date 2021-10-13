import React from "react";
import Dataitem from "./dataItem";

export interface Datamember{
    title:string,
    brief:string,
    tagList:string[]
}

const Datapage = () => {

    const dataList:Datamember[] = [];
    const dataitem1:Datamember = {
        title:'大学生双创平台开发',
        brief:'近年来，大学生创业越来越火热，但对于学生而言，常常能拥有好的想法却受限于资金实力等因素而无法实现；同样，对于企业来说，新的想法可能就是企业新的业务增长点，企业迫切需要各种idea来开拓新业务，本平台便是为了打通信息交流渠道，解决大学生与企业间的信息互通问题，促进大学生参与工程实训、社会实践，转变学习方式、增强实践能力、发挥个性潜质，提高大学生的综合素养，同时解决大学生的创业启动难题和企业业务增长的迫切需求。',
        tagList:['科技','创新','国家发展']
    }
    const dataitem2:Datamember = {
        title:'基于Unity的动作捕捉自研系统开发',
        brief:'在运动物体的关键部位设置跟踪器，由Motion capture系统捕捉跟踪器位置，再经过计算机处理后得到三维空间坐标的数据。当数据被计算机识别后，可以应用在动画制作，步态分析，生物力学，人机工程等领域。',
        tagList:['应用','建模技术','虚拟现实']
    }

    const dataitem3:Datamember = {
        title:'四轴飞行器的动力学原理改良方案研发',
        brief:'四轴飞行器又称四旋翼飞行器、四旋翼直升机，简称四轴、四旋翼。这四轴飞行器（Quadrotor）是一种多旋翼飞行器。四轴飞行器的四个螺旋桨都是电机直连的简单机构，十字形的布局允许飞行器通过改变电机转速获得旋转机身的力，从而调整自身姿态。具体的技术细节在“基本运动原理”中讲述。',
        tagList:['应用物理','嵌入式开发','科技']
    }

    for(let i = 1; i < 10; i++){
        if( i%2 === 0){
            dataList.push(dataitem1);
        }else if( i%3 === 0){
            dataList.push(dataitem3);
        }else{
            dataList.push(dataitem2);
        }
    }

    return (
        <div>
            <Dataitem dataitem={dataList}></Dataitem>
        </div>
    )
}

export default Datapage;