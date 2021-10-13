import { Col, Menu, Row } from "antd";
import { MenuItem } from "rc-menu";
import React from "react";
import Datapage from "./Datapage";
import Searchbox from "./search-box/Search_box";
import Sidebox from "./side-box";

const Body = () => {
    return(
        <div style={{marginTop:16}}>
            <Row>
                <Col span={12} offset={6} className="Search-box">
                    <Searchbox></Searchbox>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={4}>
                    <div className="bg-test right-gutter bg-shadow">
                        <Menu mode="horizontal">
                            <MenuItem>找人才</MenuItem>
                            <MenuItem>找需求</MenuItem>
                        </Menu>
                        <Datapage></Datapage>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="bg-test bg-shadow bg-padding" >
                        <Sidebox></Sidebox>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Body;