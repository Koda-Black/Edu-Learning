"use client";

import { useState, useRef, useEffect } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface Message {
  role: "bot" | "user";
  text: string;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  "programs|courses|learn|language|english|french|german":
    "We offer CEFR-aligned language programs (A1–B2) in English, French, and German. Each level is divided into 3 packs — choose Intensive (5x/week, 10hrs/week) or Semi-Intensive (3x/week, 6hrs/week), available online and in-person. We also offer Exam Preparation for TEF, TCF, DELF, DALF, and Goethe-Zertifikat (40 hours over 7 weeks).",
  "price|cost|fee|how much|naira|₦|pricing|plan|pack":
    "Our pricing is pack-based per CEFR level:\n\n• English/French A1–A2: Pack 1 ₦32,000 + ₦5,000 material, Pack 2–3 ₦34,000 each\n• English/French B1–B2: Pack 1 ₦46,000 + ₦5,000 material, Pack 2–3 ₦52,000 each\n• German A1–A2: Pack 1 ₦41,600 + ₦5,000 material, Pack 2–3 ₦44,200 each\n\nEach level has 3 packs. Exam preparation is a separate program.",
  "corporate|company|team|business training|organization":
    "Our corporate training helps teams master professional communication with CEFR-aligned programs. We offer customized programs, intensive/semi-intensive scheduling (online/hybrid/on-site), expert certified trainers, progress tracking with CEFR benchmarks, group & individual sessions, and certification. Use the free consultation form on our Corporate Training page!",
  "translat|interpret|document|localization|proofread|edit":
    "We provide comprehensive language services:\n\n• Document Translation (legal, medical, technical, business)\n• Interpretation: Simultaneous (₦112,500/hr), Consecutive (₦75,000/hr), Liaison (₦67,500/hr), Remote (₦60,000/hr)\n• Proofreading: Basic (₦4,000/page), Professional (₦6,000/page), Premium Rewriting (₦10,000/page)\n• 15% discount for full-day interpretation bookings\n\nRequest a quote through our Translation page!",
  "partner|teach|join|collaborate":
    "We welcome partnerships with Academic Institutions, Corporate Partners, NGOs & International Organizations, Government Agencies, and Language Teachers. Qualified teachers of English, French, German, Dutch, Spanish, Chinese and other languages can teach under our platform. Contact us to learn more!",
  "certificate|certification|diploma|exam|ielts|delf|tef|tcf|dalf|goethe":
    "Yes! Learners receive certificates upon CEFR level completion. We also prepare students for international exams: TEF, TCF, DELF, DALF (French) and Goethe-Zertifikat (German). Exam prep covers 40 hours over 7 weeks. Contact languageservices@edulearningimmersion.org for exam details.",
  "contact|reach|phone|email|address|whatsapp":
    "You can reach us via:\n• Email: contact@edulearningimmersion.org\n• Language Services: languageservices@edulearningimmersion.org\n• WhatsApp: +234 916 078 4634\n\nWe typically respond within minutes on WhatsApp!",
  "about|who|company|history|founded":
    "Edu learning & Immersion is a leading provider of language training, translation, interpretation, proofreading, and digital communication solutions. Our mission is to bridge languages and cultures for global collaboration. We serve learners and organizations worldwide with CEFR-structured programs.",
  "schedule|time|flexible|online|virtual|physical|hybrid|intensive":
    "We offer two formats:\n• Intensive: 5 sessions/week, 10 hours/week\n• Semi-Intensive: 3 sessions/week, 6 hours/week\n\nBoth available online and in-person. Corporate clients can also arrange hybrid and on-site delivery.",
  "beginner|start|new|first time|a1":
    "Absolutely! Our A1 level is designed specifically for complete beginners with no prior knowledge. Each level (A1, A2, B1, B2) has 3 packs, so you progress step by step. Available in English, French, and German.",
  "cefr|level|a1|a2|b1|b2":
    "Our courses follow the CEFR (Common European Framework of Reference):\n• A1: Complete beginner\n• A2: Elementary\n• B1: Intermediate\n• B2: Upper-intermediate\n\nEach level is divided into 3 packs. A full level takes approximately 12–18 weeks depending on your chosen format.",
  "school|kids|children|teens|young":
    "We partner with primary and secondary schools to deliver structured language programs. We also offer after-school language clubs, teacher training workshops, and extracurricular programs. Contact us for a school partnership proposal.",
  "digital|marketing|content|social media":
    "We provide digital communication solutions including social media strategy, multilingual content creation, digital marketing, and brand communication consulting in English, French, and other languages.",
};

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const [keywords, answer] of Object.entries(KNOWLEDGE_BASE)) {
    const patterns = keywords.split("|");
    if (patterns.some((p) => lower.includes(p))) {
      return answer;
    }
  }
  return `I don't have specific information about that, but I'd love to help! You can:\n\n• Chat with us on WhatsApp for quick answers\n• Email us at contact@edulearningimmersion.org\n• Browse our website pages for detailed information\n\nWould you like to ask about our programs, pricing, corporate training, or translation services?`;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! 👋 I'm the Edu learning & Immersion assistant. Ask me about our CEFR-aligned language programs, pricing, corporate training, translation & interpretation services, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(trimmed);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    { label: "Our Programs", query: "What programs do you offer?" },
    { label: "Pricing", query: "What are your prices?" },
    { label: "Corporate", query: "Tell me about corporate training" },
    {
      label: "WhatsApp",
      action: () =>
        window.open(
          getWhatsAppUrl(
            "Hi, I have a question about Edu learning & Immersion",
          ),
          "_blank",
        ),
    },
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0D883C] text-white shadow-lg shadow-[#0D883C]/25 hover:bg-[#10a34a] hover:scale-105 transition-all flex items-center justify-center"
        aria-label="Chat"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z"
            />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-[20px] shadow-2xl border border-[#EAF0EF] overflow-hidden animate-fade-in-up flex flex-col"
          style={{ maxHeight: "500px" }}
        >
          {/* Header */}
          <div className="bg-[#0D883C] p-5 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                EL
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  Edu learning & Immersion
                </h3>
                <p className="text-white/70 text-xs">
                  Ask me anything about our services
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{ minHeight: "200px", maxHeight: "300px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-sm whitespace-pre-line break-words overflow-hidden ${
                    msg.role === "user"
                      ? "bg-[#0D883C] text-white rounded-br-sm"
                      : "bg-[#F3FAF5] text-[#4F635E] rounded-tl-sm"
                  }`}
                  style={{ overflowWrap: "anywhere" }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#F3FAF5] rounded-2xl rounded-tl-sm p-3 text-sm text-[#4F635E]">
                  <span className="flex gap-1">
                    <span className="animate-bounce">•</span>
                    <span
                      className="animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    >
                      •
                    </span>
                    <span
                      className="animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    >
                      •
                    </span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 flex-shrink-0">
              {quickActions.map((qa, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (qa.action) {
                      qa.action();
                      return;
                    }
                    if (qa.query) {
                      setMessages((prev) => [
                        ...prev,
                        { role: "user", text: qa.query! },
                      ]);
                      setIsTyping(true);
                      setTimeout(() => {
                        const answer = findAnswer(qa.query!);
                        setMessages((prev) => [
                          ...prev,
                          { role: "bot", text: answer },
                        ]);
                        setIsTyping(false);
                      }, 600);
                    }
                  }}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#F3FAF5] text-[#003B2D] hover:bg-[#0D883C] hover:text-white transition-all font-medium"
                >
                  {qa.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#EAF0EF] p-3 flex gap-2 flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              maxLength={500}
              className="flex-1 px-4 py-2.5 rounded-full bg-[#F3FAF5] border border-[#EAF0EF] text-sm text-[#0A0915] focus:outline-none focus:border-[#0D883C] transition"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-[#0D883C] text-white flex items-center justify-center hover:bg-[#10a34a] transition disabled:opacity-50"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
