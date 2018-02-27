import React, { Component } from "react";
import { connect } from "react-redux";
import {Col, Row} from "antd/lib/index";

import Item from "./Item";
import {startLoadAction} from "../actions";
import {getFilteredItems, isLoading} from "../selectors";

class ItemList extends Component{

    componentDidMount() {
        this.props.startLoad();
    }

    render(){
        const {items, isLoading} = this.props;
        let itemsHtml = 'Loading';
        if(!isLoading){
            itemsHtml = items.map(item=><Col span={6} key={item.id}><Item item={item}/></Col>);
            itemsHtml = <Row gutter={16}>{itemsHtml}</Row>;
        }

        return(
            <Col span={18} style={{'padding':'0px 10px'}}>{itemsHtml}</Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: getFilteredItems(state),
        isLoading: isLoading(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLoad: () => {dispatch(startLoadAction())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
