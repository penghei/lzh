import { SearchOutlined } from "@ant-design/icons";
import { Divider} from "antd";
import React from "react";

const Searchbox = () => {
    return(
        <div>
            <div className="Search-out-box flex_all">
                <div className="flex_all height-full">
                    <div className="Search-in-select-box"> 
                        <select>
                            <option value="forHuman">找人才</option>
                            <option value="forNeed">找需求</option>
                        </select>
                    </div>
                    <Divider type="vertical" className="height-full"/>
                    <div className="Search-in-input-box">
                        <input type="text" className="Search-input" placeholder="双赢静候你的发现"/>
                    </div>
                </div>
                <div className="Search-button">
                    <SearchOutlined className="big-icon icon-grey"/>
                </div>
            </div>
        </div>
    )
}

export default Searchbox;