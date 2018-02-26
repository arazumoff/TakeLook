import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Slider} from "antd/lib/index";


class Pricer extends Component{

    render(){
        const {isLoading, init_start, start_price, init_stop, stop_price} = this.props;
        if(isLoading){
            return null;
        }
        const range = [start_price, stop_price];
        return(
            <div className="code-box">
                <strong>Стоимость {start_price} - {stop_price}</strong>
                <Slider
                    range
                    defaultValue={range}
                    min={init_start}
                    max={init_stop}
                    onAfterChange={(val)=>this.props.onChange(val)} />
            </div>
        )
    }
}
Pricer.propTypes = {
    init_start: PropTypes.number.isRequired,
    init_stop: PropTypes.number.isRequired,
    start_price: PropTypes.number.isRequired,
    stop_price: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Pricer