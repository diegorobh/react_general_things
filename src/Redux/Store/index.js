import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers/index';
import thunk from 'redux-thunk';

const initialState = {
    listPosts:[],
    selectedPost:"",
    newPost:{}
}

const _composeMiddlewares = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
? compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
: applyMiddleware(thunk);

const store = createStore(
        rootReducer,
        initialState,
        _composeMiddlewares
    );

export default store;