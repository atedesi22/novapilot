
"use client";

import { useState } from "react";
import {
  X,
  Send,
  Mic,
  Sparkles,
  Maximize2,
  Minimize2,
} from "lucide-react";

export default function NovaCoachWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    // Le traitement des messages sera connecté plus tard à NovaCoach.
    setMessage("");
  }

  return (
    <div className="nova-coach-widget">
      {isOpen && (
        <section
          className={`nova-coach-panel ${
            isExpanded ? "expanded" : ""
          }`}
        >
          <header className="nova-coach-header">
            <div className="nova-coach-identity">
              <div className="nova-coach-avatar small">
                <Sparkles size={21} />
              </div>

              <div>
                <strong>NovaCoach</strong>
                <span>
                  <i /> Assistant personnel
                </span>
              </div>
            </div>

            <div className="nova-coach-controls">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Agrandir ou réduire"
              >
                {isExpanded ? (
                  <Minimize2 size={17} />
                ) : (
                  <Maximize2 size={17} />
                )}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fermer NovaCoach"
              >
                <X size={19} />
              </button>
            </div>
          </header>

          <div className="nova-coach-messages">
            <div className="coach-welcome-message">
              <div className="nova-coach-avatar message-avatar">
                <Sparkles size={19} />
              </div>

              <div className="coach-message-bubble">
                Bonjour ! Je suis NovaCoach.
                <br />
                Comment puis-je t'aider à avancer aujourd'hui ?
              </div>
            </div>
          </div>

          <div className="nova-coach-input-area">
            <div className="nova-coach-input">
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSend();
                }}
                placeholder="Écris ton message..."
              />

              <button
                className="coach-microphone"
                aria-label="Commande vocale"
                title="Commande vocale (bientôt disponible)"
                disabled
              >
                <Mic size={19} />
              </button>

              <button
                className="coach-send"
                onClick={handleSend}
                disabled={!message.trim()}
                aria-label="Envoyer"
              >
                <Send size={17} />
              </button>
            </div>

            <span className="coach-disclaimer">
              NovaCoach — Ton copilote personnel
            </span>
          </div>
        </section>
      )}

      {!isOpen && (
        <button
          className="nova-coach-floating-button"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir NovaCoach"
          title="Parler à NovaCoach"
        >
          <span className="coach-avatar-glow" />
          <span className="nova-coach-avatar floating-avatar">
            <Sparkles size={27} />
          </span>
          <span className="coach-floating-indicator" />
        </button>
      )}
    </div>
  );
}
