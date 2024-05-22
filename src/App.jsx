// src/App.jsx

import './App.css';
import WebcamCapture from './components/WebcamCapture';

const App = () => {
  return (
    <div className="App">
      <h1>React Webcam Example</h1>
      <WebcamCapture />
    </div>
  );
};

export default App;