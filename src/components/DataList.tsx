import React, { Component } from 'react';
import UUID from 'uuidjs';
import { List, Button, Skeleton } from 'antd';
import Pubsub from 'pubsub-js';

interface IProps {
  nameList: string[];
  innerList: string[];
  getDataList: any;
}

export default class DataList extends Component<IProps> {
  state = {
    list: [
      {
        name: '项目1',
        inner: '项目内容',
        id: UUID.generate(),
      },
      {
        name: '项目2',
        inner: '项目内容',
        id: UUID.generate(),
      },
    ],
    mouse: false,
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
    let list = this.state.list;
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
    let newList = this.state.list.filter((item) => {
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
      let list = this.state.list;
      list.push(listObj);
      this.setState({ list: list });
      Pubsub.publish('dataList', this.state.list);
    }
  };

  render() {
    let list = this.state.list;
    return (
      <div>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={list}
          bordered={true}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.name} description={item.inner} />
              <div>
                <Button
                  type="primary"
                  danger
                  onClick={() => this.deletItem(item.id)}
                >
                  删除
                </Button>
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
