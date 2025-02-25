import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;