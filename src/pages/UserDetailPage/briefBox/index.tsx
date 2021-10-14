import { HeartOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Space, Tag, Input, Modal } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import React, { useState } from "react";

const { TextArea } = Input;

const BriefBox = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
      
    return (
        <div>
            <Row>
                <Col span={24}>
                    <div className="bg-test bg-shadow flex_all bg-padding" style={{marginTop:2}}>
                        <div className="height-full briefbox-inner-box bg-padding">
                            <div>
                                <Tag color="#40a9ff">科技</Tag>
                                <Tag color="#40a9ff">创新</Tag>
                                <Tag color="#40a9ff">国家发展</Tag>
                            </div>
                            <h1 className="data-title" style={{marginTop:12}}>大学生双创平台开发</h1>
                            <span>近年来，大学生创业越来越火热，但对于学生而言，常常能拥有好的想法却受限于资金实力等因素而无法实现；同样，对于企业来说，新的想法可能就是企业新的业务增长点，企业迫切需要各种idea来开拓新业务，本平台便是为了打通信息交流渠道，解决大学生与企业间的信息互通问题，促进大学生参与工程实训、社会实践，转变学习方式、增强实践能力、发挥个性潜质，提高大学生的综合素养，同时解决大学生的创业启动难题和企业业务增长的迫切需求。</span>
                            <div style={{marginTop:8}} className="">
                                <div style={{width:300,float:'left'}} >
                                    <Space size={12}>
                                        <Button type="primary"  onClick={showModal}  size="large" icon={<MessageOutlined />}>留言</Button>
                                        <Button size="middle" shape="circle" icon={<LikeOutlined />}></Button>
                                        <Button size="middle" shape="circle" icon={<HeartOutlined />}></Button>
                                    </Space>
                                </div>
                                <div style={{float:'right'}} className="flex_all">
                                    <Breadcrumb>
                                        <BreadcrumbItem>浏览量</BreadcrumbItem>
                                        <BreadcrumbItem>4396</BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <Modal title="留言板" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                                    <TextArea showCount maxLength={100} style={{width:'100%'}}/>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BriefBox;