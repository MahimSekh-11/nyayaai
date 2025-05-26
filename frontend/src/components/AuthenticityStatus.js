import React from "react";

function AuthenticityStatus({ status, reasons }) {
  return (
    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-600">
      <h3 className="font-bold text-lg">Authenticity Check: {status}</h3>
      <ul className="list-disc pl-5 mt-2">
        {reasons.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuthenticityStatus;

