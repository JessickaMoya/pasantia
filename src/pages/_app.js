import React from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
// import store from './../redux/index'
import rootReducer from './reducers'

const store = createStore(rootReducer)
const MyApp = ({ Component, pageProps }) => {
  return ( 
  <>
    <Component {...pageProps} />
    {/* <Provider store={reduxStore}>
      <Main component={Component} pageProps={pageProps} />
    </Provider> */}
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  </>);
};
export default MyApp;