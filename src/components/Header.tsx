import { Col, Row, Avatar, Badge, Popover, List, Empty } from "antd";
import React from "react";
import { BellOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {

    const data = [
        {
          title: '李宁'
        },
        {
          title: '杨伟'
        },
      ];

    const content1 = (
    <div>
        <Empty />
    </div>
    );

    const content2 = (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="/">{item.title}</a>}
                    />
                </List.Item>
                )}
            />
        </div>
    );

    return(
        <div>
            <Row>
                <Col span={24} className="Header_box_test flex_all bg-shadow">
                    <div className="flex_all header_inner_box">
                        <Popover content={content1} title="通知" style={{width:500}}>
                            <BellOutlined className="big-icon icon-blue icon-cursor"/>
                        </Popover>
                        <Avatar size={48} icon={<UserOutlined />} className="bg-shadow" />      
                        <Popover content={content2} title="回复">            
                            <Badge dot={true} size="small">
                                <MessageOutlined className="big-icon icon-blue icon-cursor" />
                            </Badge>
                        </Popover>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header;