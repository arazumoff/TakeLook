import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

class Item extends Component{

    render(){
        const {item} = this.props;
        return(
                <Card
                    style={{'margin-bottom':'16px'}}
                    hoverable
                    cover={
                        <div className="cover" style={{'background':`url("${item.view[0]}") no-repeat`}}>
                            <div className="price">{item.price}</div>
                        </div>}>
                    <Meta
                        title={item.name}
                        description={item.params.join(', ')}/>
                </Card>

        )
    }
}
Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        view: PropTypes.array.isRequired,
        price: PropTypes.number.isRequired
    })
}
export default Item;