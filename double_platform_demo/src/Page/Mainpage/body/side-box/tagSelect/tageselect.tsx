import React, { useReducer } from "react";
import Tagline from "./tagLine";
import Tagtotal from "./tagTotal";
import { ACTION_TYPE, IState, tagReducer } from './tagSelectRedux'
import { Button } from "antd";
import { DeploymentUnitOutlined, SearchOutlined } from "@ant-design/icons";
 
const Tagselect = () => {

    const initState:IState = {tagList:[]};
    const [state,dispatch] = useReducer(tagReducer,initState);

    //事件处理函数
    const addTag = (tag:string) => {
        dispatch({
            type:ACTION_TYPE.ADD_TAG,
            payload:tag
        })
    }

    const removeTag = (tag:string) => {
        dispatch({
            type:ACTION_TYPE.REMOVE_TAG,
            payload:tag
        })
    }

    return (
        <div>
            <div className="tagSelect-title">
                <DeploymentUnitOutlined className="md-icon" />          
                <div className="title-font">沙里Tag金</div>  
            </div>
            <div style={{marginTop:16}} className=""> 
                <Tagtotal 
                    tagList={state.tagList}
                />
                <Tagline  
                    tagsName={'类别'} 
                    tagsData={['科技','人文','艺术','创新']}
                    addTag={addTag}
                    removeTag={removeTag}
                />
                <Tagline  
                    tagsName={'方向'} 
                    tagsData={['自媒体','网站运维','应用开发']}
                    addTag={addTag}
                    removeTag={removeTag}
                />
                <Tagline  
                    tagsName={'人数'} 
                    tagsData={['<5人','<15人','<30人']}
                    addTag={addTag}
                    removeTag={removeTag}
                />
                <div style={{marginTop:16}} className="flex_space">
                    <Button type="primary" shape="circle" size="large" icon={<SearchOutlined/>}></Button>
                </div>
            </div>
        </div>
    )
}

export default Tagselect;