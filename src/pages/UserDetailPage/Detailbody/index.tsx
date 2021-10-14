import { Col, Row } from "antd";
import React from "react";
import Detaildata from "./detailData";
import Detailsidebox from "./detailSideBox";

const Detailbody = () => {
    return (
        <div>
            <Row>
                <Col span={12} offset={4} className="right-gutter">
                    <div style={{marginTop:16}} className="bg-test bg-shadow" >
                        <Detaildata></Detaildata>
                    </div>
                </Col>
                <Col span={4}>
                    <div style={{marginTop:16}} className="bg-test bg-shadow" >
                        <Detailsidebox></Detailsidebox>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Detailbody;