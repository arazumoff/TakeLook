import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Input, Tag, Tooltip} from "antd/lib/index";


class Tags extends Component{

    onEnter=(e)=>{
        const tag = e.target.value;
        const {tags, onAdd} = this.props;
        if(tags.indexOf(tag) === -1){
            onAdd(tag);
        }
        e.target.value = "";
    };

    render(){
        const {tags} = this.props;
        const tagsHtml = tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
                <Tag key={tag} closable={true} afterClose={() => this.props.onDelete(tag)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </Tag>
            );
            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
        });
        return(
            <div>
                <Input placeholder="Умный поиск" onPressEnter={this.onEnter}/>
                {tagsHtml}
            </div>
        )
    }
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
export default Tags;
