import React, { useState } from "react";
import axios from "axios";

function DocumentUpload() {
  const [file, setFile] = useState(null);
  const [docInfo, setDocInfo] = useState(null);

  const uploadDocument = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("/document/upload", formData);
    setDocInfo(res.data);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Upload Legal Document</h2>
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        onClick={uploadDocument}
        disabled={!file}
        className="bg-green-600 text-white py-2 px-4 rounded mt-2"
      >
        Analyze Document
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

export default DocumentUpload;
