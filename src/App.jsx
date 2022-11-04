import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const liveRecDuration = useRef(0);
  const recordingIntervalId = useRef(null);

  useEffect(() => {
    if (isRecording) {
      recordingIntervalId.current = setInterval(() => {
        console.log('interval');
        liveRecDuration.current = liveRecDuration.current + 1;
        setRecordingDuration(liveRecDuration.current);
      }, 1000);
    } else {
      console.log('clearing interval');
      clearInterval(recordingIntervalId.current);
    }
  }, [isRecording]);

  return (
    <div className="App">
      <h1 className="hero-bar">mictest</h1>
      <div className="body-container">
        <a
          className="big-button"
          onClick={() => {
            setIsRecording(!isRecording);
          }}
        >
          <h4>{isRecording ? 'STOP' : 'START'}</h4>
        </a>
        <p>Duration: {recordingDuration}s</p>
      </div>
    </div>
  );
}

export default App;
