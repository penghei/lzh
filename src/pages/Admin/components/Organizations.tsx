import React, { Component } from 'react';
import { Divider, Layout, Button, Breadcrumb, Steps } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import DataList from '@/components/DataList';
import { history } from 'umi';
import AddList from '@/components/AddList';
import '@/styles/Organizations.css';
const {Step} = Steps
const { Header, Footer, Sider, Content } = Layout;

interface dataListObj {
  name: string;
  inner: string;
  id: string;
}
export default class RequestList extends Component {
  state = {
    nameList: ['组织1', '组织2'],
    innerList: ['组织描述1', '组织描述2'],
  };

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
            <Steps current={4} size="small">
              <Step title="创建组织" description="点击“创建新组织”按钮" />
              <Step
                title="输入组织设置"
                description="在新页面中输入组织设置"
              />
              <Step title="提交并上传" description="稍等片刻" />
              <Step title="创建成功"/>
            </Steps>
            <Divider></Divider>
            <DataList {...datas}></DataList>
          </Content>
        </Layout>
      </div>
    );
  }
}
