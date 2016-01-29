import './style/main.less';
import 'bootstrap-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import InfoScreenStore from './stores/infoscreen';

ReactDOM.render(
    <Provider store={ InfoScreenStore }>
        <App />
    </Provider>,
    document.getElementById('app')
);

