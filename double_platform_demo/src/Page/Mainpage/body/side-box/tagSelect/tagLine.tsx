import { Tag } from "antd";
import React, { FC, useState } from "react";

const { CheckableTag } = Tag;

interface Iprops{
    tagsName:string,
    tagsData:string[],
    addTag:(tag:string) => void,
    removeTag:(tag:string) => void
}

const Tagline:FC<Iprops> = ({tagsName,tagsData,addTag,removeTag}) => {

    const [selectedTags,setselectedeTags] = useState(['']);

    const handleChange = (tag:string,checked:boolean):void => {
        const nextSelectedTags = checked ? [...selectedTags,tag] : selectedTags.filter(t => t !== tag);
        setselectedeTags( nextSelectedTags );
        if(checked){
            addTag(tag);
        }else{
            removeTag(tag);
        }

    }

    return (
        <div style={{marginTop:8,marginLeft:12}}>
          <div style={{ marginRight: 8 }}>{tagsName}</div>
          {tagsData.map(tag => (
            <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>)
            )}
        </div>
      );
}

export default Tagline;