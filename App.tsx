import React from 'react';
import Main from './Main';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
