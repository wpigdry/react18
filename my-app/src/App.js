import React, {useState, useEffect, Suspense } from 'react';
import Index from './pages/index/index.jsx';

import './App.css';

const User = React.lazy(() => import("./pages/index/components/user"));

function App() {
  return (
    <div className="App">
      测试react18api
      <Index
      />

      <Suspense fallback={<div>Loading...</div>}>
        <User id={1} />
      </Suspense>
    </div>
  );
}

export default App;