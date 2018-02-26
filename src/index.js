import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './containers/App';
import rootSaga from './sagas'
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
