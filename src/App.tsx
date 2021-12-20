import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './lib/redux';
import InboxScreen from './components/InboxScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;
