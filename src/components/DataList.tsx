import React, { Component } from 'react';
import UUID from 'uuidjs';
import { List, Button, Skeleton, Divider, Modal,Popconfirm } from 'antd';
import Pubsub from 'pubsub-js';
import '../styles/DataList.css';

interface IProps {
  nameList: string[];
  innerList: string[];
  getDataList: any;
}
interface listObj {
  name: string;
  inner: string;
  id: string;
}

export default class DataList extends Component<IProps> {
  state = {
    list: [],
    mouse: false,
    isModal: false,
  };
  componentDidMount() {
    //接受新增项目并添加
    Pubsub.subscribe('inputValues', (_: any, data: any) => {
      this.addItem(data);
    });
    this.setListState();
  }
  setListState = () => {
    //根据props添加预设list
    let list: listObj[] = this.state.list;
    for (let i = 0; i < this.props.nameList.length; i++) {
      let listObj = {
        name: this.props.nameList[i],
        inner: this.props.innerList[i],
        id: UUID.generate(),
      };
      list.push(listObj);
    }
    this.setState({ list: list });
  };

  deletItem = (id: any): any => {
    //删除项目
    let newList = this.state.list.filter((item: listObj) => {
      return item.id !== id;
    });
    this.setState({ list: newList });
    this.props.getDataList(this.state.list);
    // Pubsub.publish('dataList',newList)//给页面传递删除后新数组
  };

  addItem = (data: string[]) => {
    //添加项目
    if (data.length !== 0) {
      let listObj: any = {
        name: data[0],
        inner: data[1],
        id: UUID.generate(),
      };
      let list: listObj[] = this.state.list;
      list.push(listObj);
      this.setState({ list: list });
      Pubsub.publish('dataList', this.state.list);
    }
  };
  getDetails = (id: string) => {
    this.setState({ isModal: true });
  };
  handleOk = () => {
    this.setState({ isModal: false });
  };
  render() {
    let list = this.state.list;
    const loadMore = (
      <div
        style={{
          textAlign: 'center',
          margin: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button type="primary">加载更多</Button>
      </div>
    );
    return (
      <div>
        <List
          className="list"
          size="large"
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          bordered={true}
          renderItem={(item: listObj) => (
            <>
              <List.Item>
                <List.Item.Meta title={item.name} description={item.inner} />
                <div>
                  <Button
                    type="primary"
                    onClick={() => this.getDetails(item.id)}
                  >
                    查看详情
                  </Button>
                  <Modal
                    title="详情"
                    visible={this.state.isModal}
                    onOk={this.handleOk}
                    onCancel={this.handleOk}
                    footer={[]}
                  >
                    <h4>{item.name}</h4>
                    <p>{item.inner}</p>
                    <Button type="primary" block>
                      查看更多
                    </Button>
                  </Modal>
                  &emsp;&emsp;
                  <Popconfirm
                    title="确定删除？"
                    onConfirm={()=>this.deletItem(item.id)}
                    onCancel={()=>{}}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button
                      type="primary"
                      danger
                     
                    >
                      删除
                    </Button>
                  </Popconfirm>
                </div>
              </List.Item>
              <Divider></Divider>
            </>
          )}
        />
      </div>
    );
  }
}
