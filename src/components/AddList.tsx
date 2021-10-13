import React, { Component } from 'react';
import { Divider, Layout,Button ,Modal,Input,notification} from 'antd';
import Pubsub from 'pubsub-js'

export default class AddList extends Component {
    state = {
        isModal: false,
        value1: '',
        value2: ''
    }
    addOrganz = () => {
        this.setState({ isModal: true });
    }
    getNameValue = (event: any) => {
        if (event && event.target && event.target.value) {
            let value = event.target.value;
            this.setState(() => ({ value1: value }))
        }
    }
    getDescValue = (event: any) => {
        if (event && event.target && event.target.value) {
            let value = event.target.value;
            this.setState(() => ({ value2: value }))
        }
    }
    handleOk = () => {
        Pubsub.publish('inputValues',[this.state.value1,this.state.value2])
        notification.open({
            message: "添加成功",
        })
        this.setState({ isModal: false })
    }
    handleCancle = () => {
        notification.open({
            message: "已取消",
        })
        this.setState({ isModal: false })
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.addOrganz} style={{borderRadius: '5px'}}>创建新组织</Button>
                <Modal title="新建" visible={this.state.isModal} onOk={this.handleOk} onCancel={this.handleCancle}>
                    <h3>创建组织</h3>
                    <Input placeholder="请输入组织名称" onChange={e => this.getNameValue(e)}></Input>
                    <Divider></Divider>
                    <Input placeholder="请输入组织描述" onChange={e => this.getDescValue(e)}></Input>
                </Modal>
            </div>
        )
    }
}
