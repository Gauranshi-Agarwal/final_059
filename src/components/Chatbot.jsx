import { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="chatbot-icon" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>CampusVerse AI</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-body">
            <div className="bot-msg">
              Hi 👋 I’m CampusVerse AI.  
              Ask me about departments, notices, weather, etc.
            </div>
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask something..."
              disabled
            />
            <button disabled>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
