import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Sidebar from '../components/Sidebar';
import ItemList from "../components/ItemList";

class App extends Component {

    render() {

        return (
            <div className="App">
                <Row>
                    <Col span={24}>
                        <img className="logo" alt="" src="https://128121.selcdn.ru/react/logo.png"/>
                    </Col>
                </Row>
                <Row>
                    <ItemList/>
                    <Sidebar/>
                </Row>
            </div>
    );
  }
}

export default App;
