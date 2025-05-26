import React from "react";

function DocumentSummary({ summary }) {
  return (
    <div className="p-4 bg-blue-50 border-l-4 border-blue-600 mt-4">
      <h3 className="font-bold text-lg">Document Summary</h3>
      <ul className="list-disc pl-5">
        {Object.entries(summary).map(([key, value], idx) => (
          <li key={idx}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentSummary;