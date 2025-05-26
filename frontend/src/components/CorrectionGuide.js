import React from "react";

function CorrectionGuide({ roadmap }) {
  return (
    <div className="p-4 bg-green-50 border-l-4 border-green-600 mt-4">
      <h3 className="font-bold text-lg">Correction Steps</h3>
      <ol className="list-decimal pl-5 mt-2">
        {roadmap.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default CorrectionGuide;