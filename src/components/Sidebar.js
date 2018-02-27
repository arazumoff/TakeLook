import React, { Component } from "react";
import { connect } from "react-redux";
import {Col} from "antd";

import {addTagAction, deleteTagAction, changePriceAction} from "../actions";
import {getMinPrice, getMaxPrice, isLoading} from "../selectors";
import Pricer from "./Pricer";
import Tags from "./Tags";

class Sidebar extends Component{

    render(){
        const {isLoading, tags, init_start, start_price, stop_price, init_stop}=this.props;
        return(
            <Col span={6} style={{'padding':'0px 10px'}}>
                <Tags
                    tags={tags}
                    onAdd={this.props.onAddTag}
                    onDelete={this.props.onDeleteTag}/>
                <Pricer
                    isLoading={isLoading}
                    init_start={init_start}
                    start_price={start_price}
                    init_stop={init_stop}
                    stop_price={stop_price}
                    onChange={this.props.onChangePrice}/>
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.filters.tags,
        init_start: getMinPrice(state),
        init_stop: getMaxPrice(state),
        start_price: state.filters.start_price,
        stop_price: state.filters.stop_price,
        isLoading: isLoading(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePrice: (price) => {dispatch(changePriceAction(price))},
        onAddTag: (tag) => {dispatch(addTagAction(tag))},
        onDeleteTag: (tag) => {dispatch(deleteTagAction(tag))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
