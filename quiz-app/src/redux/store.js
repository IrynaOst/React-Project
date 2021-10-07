import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'react-redux';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;