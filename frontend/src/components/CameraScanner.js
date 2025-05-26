import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

function CameraScanner() {
  const webcamRef = useRef(null);
  const [docInfo, setDocInfo] = useState(null);

  const captureAndScan = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Convert base64 to blob/file
    const res = await fetch(imageSrc);
    const blob = await res.blob();
    const file = new File([blob], "scan.jpg", { type: "image/jpeg" });

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/document/upload", formData);
    setDocInfo(response.data);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Scan Document via Camera</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
        className="rounded"
      />
      <button
        onClick={captureAndScan}
        className="bg-purple-600 text-white py-2 px-4 rounded mt-2"
      >
        Capture & Analyze
      </button>
      {docInfo && (
        <div className="mt-4">
          <p>
            <strong>Document Type:</strong> {docInfo.doc_type}
          </p>
          <p>
            <strong>Summary:</strong>{" "}
            {Object.entries(docInfo.summary).map(([k, v]) => (
              <span key={k}>
                {k}: {v} <br />
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default CameraScanner;
