import React, { Component } from 'react';
import { Divider, Layout, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import DataList from '@/components/DataList';
import axios from 'axios';
import { history } from 'umi';
import '../styles/RequestList.css'

const { Header, Footer, Sider, Content } = Layout;
interface dataListObj {
  name: string;
  inner: string;
  id: string;
}
export default class RequestList extends Component {
  state = {
    nameList: ['需求1','需求2'],
    innerList: ['需求描述1','需求描述2'],
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
    history.replace('/');
  };
  render() {
    return (
      <div>
        <Layout className="main">
          <Header>
            <Breadcrumb>
              <Breadcrumb.Item>
                <HomeOutlined />
                <a href="" onClick={this.routeChange}>
                  首页
                </a>
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
