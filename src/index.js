import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import {createStore } from "redux";
import reducer from "./reducer";
import App from "./components/app";


const store = createStore(reducer);



    ReactDOM.render(
        <Provider store={store}>
       <App/>
        </Provider>,
        document.getElementById('root')
    );


// update();
// store.subscribe(update);

// const { dispatch } = store;

// const bindActionCreator = ( creator, dispatch ) => (...args) =>{
// dispatch(creator(...args))
// };

// const { inc, dec, rnd}  = bindActionCreators( actions, dispatch);

// document.getElementById('inc')
//     .addEventListener('click', inc);
//
// document.getElementById('dec')
//     .addEventListener('click', dec);
//
// document.getElementById('rnd')
//     .addEventListener('click', () =>{
//         const payload = Math.floor(Math.random()*10);
//         rnd(payload)
//     });
//
// const update = () => {
//     document
//         .getElementById('counter')
//         .innerHTML = store.getState();
// };
//
// store.subscribe(update);