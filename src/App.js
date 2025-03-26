import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    if (!text) return;
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/analyze-text", { text });
      setResult(
        typeof response.data.result === "object"
          ? JSON.stringify(response.data.result.candidates[0].content.parts[0].text, null, 2)  // Convert object to string
          : response.data.result.text || "No response received"
      );
    } catch (error) {
      setResult("Error analyzing text");
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>AI-Powered Copyright Analysis</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text to check copyright status..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <br />
      <button onClick={analyzeText} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      <h3>Result:</h3>
      <p style={{fontSize: '3rem'}}>{result}</p>
    </div>
  );
}

export default App;
