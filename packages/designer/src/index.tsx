import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './store/store';
import App from './components/App';


render(
    <Provider store={createStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);