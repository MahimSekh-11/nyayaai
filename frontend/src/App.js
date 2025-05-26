import React, { useState } from "react";
import Chatbot from "./components/Chatbot";
import DocumentUpload from "./components/DocumentUpload";
import CameraScanner from "./components/CameraScanner";

function App() {
  const [mode, setMode] = useState("upload");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">NyayaAI Legal Aid Assistant</h1>

      <div className="flex gap-4 mb-4">
        <button onClick={() => setMode("upload")} className="px-4 py-2 bg-blue-600 text-white rounded">Upload</button>
        <button onClick={() => setMode("scan")} className="px-4 py-2 bg-green-600 text-white rounded">Scan</button>
      </div>

      {mode === "upload" && <DocumentUpload />}
      {mode === "scan" && <CameraScanner />}

      <hr className="my-6" />
      <Chatbot />
    </div>
  );
}

export default App;