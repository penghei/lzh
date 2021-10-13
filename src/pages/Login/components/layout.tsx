import { Row, Col } from 'antd'

function LoginPageLayout(props) {
    return (
        <div 
            id="LoginPageContainer" 
            style={{    
             alignContent: 'center',
             height: '100vh'
             }}>
            <Row align="middle">
                <Col span={8}><div style={{height: '20vh'}}></div></Col>
                <Col span={2}><div style={{height: '15vh'}}></div></Col>
            </Row>

            <Row align="middle" justify="end">
                <Col span={8}><div style={{height: '20vh'}}></div></Col>
                <Col span={8}><div 
                    style={{
                        height: '40vh',
                        border: 'solid 1px #a0b1c4',
                        borderRadius: '6px 6px 6px 6px'
                    }}>{props.content}</div></Col>
                <Col span={8}><div style={{height: '20vh'}}></div></Col>
            </Row>

            <Row align="middle">
                <Col span={8}><div style={{height: '20vh'}}></div></Col>
                <Col span={2}><div style={{height: '20vh'}}></div></Col>
            </Row>
        </div>
    )
}

export default LoginPageLayout