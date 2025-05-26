import React, { useState } from "react";

function VoiceInput({ onTranscribed }) {
  const [listening, setListening] = useState(false);

  const startVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onTranscribed(transcript);
    };
    recognition.onerror = (err) => {
      console.error("Speech Recognition Error:", err);
    };
    recognition.start();
    setListening(true);
  };

  return (
    <button onClick={startVoice} className="bg-purple-600 text-white px-4 py-2 mt-2 rounded">
      🎤 Voice Ask
    </button>
  );
}

export default VoiceInput;
