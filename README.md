# AI-Powered Copyright Analysis

## Overview
This project provides an API for detecting copyrighted text using AI-powered analysis. It leverages Google's Gemini AI model to check whether the given text is copyrighted or publicly available.

## Features
- Analyze text for copyright status using AI
- REST API built with Express.js
- CORS-enabled for cross-origin requests

## Technologies Used
- Node.js
- Express.js
- Axios
- dotenv
- Google Gemini API

## Setup Instructions
### Prerequisites
- Node.js installed
- Google API Key for Gemini AI

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/copyright-analysis.git
   cd copyright-analysis
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your API key:
   ```sh
   GEMINI_API_KEY=your_google_api_key
   ```

### Running the Server
Start the server with:
```sh
node server.js
```
The server runs on **port 5000** by default.

