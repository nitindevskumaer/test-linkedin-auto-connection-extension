import React, { useState, useEffect } from "react";
import "./connectionBox.css";

function App() {
  const [connectionCount, setConnectionCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === "updateCount") {
        setConnectionCount(message.count);
      }
    });
  }, []);

  const startAutoConnect = () => {
    setIsProcessing(true);
    chrome.runtime.sendMessage({ action: "start" });
  };

  const stopAutoConnect = () => {
    setIsProcessing(false);
    chrome.runtime.sendMessage({ action: "stop" });
  };

  return (
    <div className="autoconnect-popup">
      <h1 className="autoconnect-title">LinkedIn Auto Connector</h1>
      <p className="connections-info">
        <h3>Sent Connections: {connectionCount}</h3>
      </p>
      <button className="autoconnect-btn" onClick={startAutoConnect} disabled={isProcessing}>
        {isProcessing ? "Connecting..." : "Start Connecting"}
      </button>
      <button
        className="autoconnect-btn stop-autoconnect-btn"
        onClick={stopAutoConnect}
        disabled={!isProcessing}
      >
        Stop Connecting
      </button>
    </div>
  );
}

export default App;
