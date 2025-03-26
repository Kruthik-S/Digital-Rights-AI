require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// 📌 Route for AI-powered text copyright analysis
app.post("/analyze-text", async (req, res) => {
    try {
        const { text } = req.body;
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro-002:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: `Analyze whether the following text is copyrighted: "${text}"` }] }]   
            },
            { headers: { "Content-Type": "application/json" } }
        );
        res.json({ result: response.data });
    } catch (error) {
        res.status(500).json({ error: "Failed to analyze text", details: error.response?.data || error.message });
    }
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));