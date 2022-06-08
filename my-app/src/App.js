// import logo from './logo.svg';
import { useMemo, useSyncExternalStore, useState, useEffect } from 'react';
import Index from './pages/index/index.jsx';
import './App.css';

function App() {
  const [a, seta] = useState({a: 1});
  const [b, setb] = useState({b: 2});

  return (
    <div className="App">
      测试react18api
      <Index
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
