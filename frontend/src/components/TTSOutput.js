import React from "react";

function TTSOutput({ audioUrl }) {
  return (
    <div className="mt-4">
      <audio controls src={audioUrl} className="w-full">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default TTSOutput;