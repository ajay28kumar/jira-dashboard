import React from 'react';
import Application from './Pages/Application';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Application />
      </div>
    </Provider>
  );
}

export default App;
