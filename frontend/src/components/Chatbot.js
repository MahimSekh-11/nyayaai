import React, { useState } from "react";
import axios from "axios";
import VoiceInput from "./VoiceInput";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("en");

  const askQuestion = async (customQuestion = null) => {
    const userQuestion = customQuestion || question;
    if (!userQuestion.trim()) return;
    const res = await axios.post("/chatbot/ask", {
      question: userQuestion,
      language,
    });
    setAnswer(res.data.answer);
    setCategory(res.data.category);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 my-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Ask a Legal Question
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <label className="text-sm font-medium text-gray-700">Select Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
        </select>
      </div>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border rounded-md px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        rows={4}
        placeholder="Type your legal question here..."
      />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <button
          onClick={() => askQuestion()}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-200"
        >
          Ask
        </button>

        <VoiceInput
          onTranscribed={(text) => {
            setQuestion(text);
            askQuestion(text);
          }}
        />
      </div>

      {answer && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-md p-4 shadow-sm">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
