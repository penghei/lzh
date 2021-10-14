import React, { Component } from 'react';
import { Divider, Layout, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import DataList from '@/components/DataList';
import axios from 'axios';
import { history } from 'umi';
import '@/styles/RequestList.css'

const { Header, Footer, Sider, Content } = Layout;
interface dataListObj {
  name: string;
  inner: string;
  id: string;
}
export default class RequestList extends Component {
  state = {
    nameList: [
      '大学生双创平台开发',
      '四轴飞行器的动力学原理改良方案研发',
      '基于Unity的动作捕捉自研系统开发',
      '大学生双创平台开发',
      '四轴飞行器的动力学原理改良方案研发',
    ],
    innerList: [
      '近年来，大学生创业越来越火热，但对于学生而言，常常能拥有好的想法却受限于资金实力等因素而无法实现……',
      '四轴飞行器又称四旋翼飞行器、四旋翼直升机，简称四轴、四旋翼。这四轴飞行器(Quadrotor)是一种多旋翼飞行器……',
      '在运动物体的关键部位设置跟踪器，由Motion capture系统捕捉跟踪器位置，再经过计算机处理后得到三维空间坐标的数据……',
      '近年来，大学生创业越来越火热，但对于学生而言，常常能拥有好的想法却受限于资金实力等因素而无法实现……',
      '四轴飞行器又称四旋翼飞行器、四旋翼直升机，简称四轴、四旋翼。这四轴飞行器(Quadrotor)是一种多旋翼飞行器……',
    ],
  };
  // componentDidMount() {
  //   //删除后更新页面的list
  //   let sub = PubSub.subscribe('dataList', (_: any, data: any[]) => {
  //     if (data.length !== 0) {
  //       data.forEach((obj: dataListObj) => {
  //         let names: string[] = [];
  //         let inners: string[] = [];
  //         names.push(obj.name);
  //         inners.push(obj.inner);
  //         this.setState({
  //           nameList: names,
  //           innerList: inners,
  //         });
  //       });
  //     } else {
  //       return;
  //     }
  //   });
  // }
  getDataList = (data: any[]) => {
    if (data.length !== 0) {
      data.forEach((obj: dataListObj) => {
        let names: string[] = [];
        let inners: string[] = [];
        names.push(obj.name);
        inners.push(obj.inner);
        console.log(names, inners);
        this.setState({
          nameList: names,
          innerList: inners,
        });
      });
    } else {
      return;
    }
  };
  routeChange = () => {
    history.replace('/admin');
  };
  render() {
    return (
      <div>
        <Layout className="main">
          <Header>
            <Breadcrumb>
              <Breadcrumb.Item>
                <HomeOutlined />
                <span onClick={this.routeChange}>
                  首页
                </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <UserOutlined />
                需求中心
              </Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Divider></Divider>
          <Content className="content">
            <DataList
              nameList={this.state.nameList}
              innerList={this.state.innerList}
              getDataList={this.getDataList}
            ></DataList>
          </Content>
         
        </Layout>
      </div>
    );
  }
}
