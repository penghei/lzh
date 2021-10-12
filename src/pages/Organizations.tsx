import React, { Component } from 'react';
import { Divider, Layout, Button, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import DataList from '@/components/DataList';
import axios from 'axios';
import { history } from 'umi';
import AddList from '@/components/AddList';
import '../styles/Organizations.css';

const { Header, Footer, Sider, Content } = Layout;

interface dataListObj {
  name: string;
  inner: string;
  id: string;
}
export default class RequestList extends Component {
  state = {
    nameList: [],
    innerList: [],
  };
  // componentDidMount() {
  //   //删除后更新页面的list
  //   PubSub.subscribe('dataList', (_: any, data: any[]) => {
  //     if (data.length !== 0) {
  //       data.forEach((obj: dataListObj) => {
  //         let names: string[] = [];
  //         let inners: string[] = [];
  //         names.push(obj.name);
  //         inners.push(obj.inner);
  //         console.log(names, inners);
  //         this.setState({
  //           nameList: names,
  //           innerList: inners,
  //         });
  //       });
  //     }else{
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

        this.setState({
          nameList: names,
          innerList: inners,
        });
        console.log(this.state.nameList);
      });
    } else {
      return;
    }
  };
  routeChange = () => {
    history.replace('/');
  };

  render() {
    let datas = {
      nameList: this.state.nameList,
      innerList: this.state.innerList,
      getDataList: this.getDataList,
    };
    return (
      <div>
        <Layout className="main">
          <Header className="header">
            <Breadcrumb>
              <Breadcrumb.Item>
                <HomeOutlined />
                <a href="" onClick={this.routeChange}>
                  首页
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <UserOutlined />
                组织中心
              </Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Divider></Divider>
          <Content className="content">
            <AddList></AddList>
            <Divider></Divider>
            <DataList {...datas}></DataList>
          </Content>
          
        </Layout>
      </div>
    );
  }
}
