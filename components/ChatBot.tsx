"use client";

import { useState, useRef, useEffect } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface Message {
  role: "bot" | "user";
  text: string;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  "programs|courses|learn|language|english|french":
    "We offer a variety of language programs including General English & French, Business English & French, Advanced Conversation, Exam Preparation (IELTS, DELF, TEF), Kids & Teens programs, Corporate Training, and Intensive Immersion courses. Our programs run from 1-4 months with both online and in-person options.",
  "price|cost|fee|how much|naira|₦|pricing|plan":
    "Our plans start at ₦15,000/month (Basic), ₦30,000/month (Pro with full access), and ₦75,000/month (Team). Program-specific pricing: General courses from ₦35,000/mo, Business courses from ₦55,000/mo, Exam Prep from ₦65,000/mo, Kids from ₦25,000/mo, and Intensive Immersion at ₦120,000. Corporate training is custom-priced based on team size and needs.",
  "corporate|company|team|business training|organization":
    "Our corporate training helps teams master professional communication. We offer customized programs, flexible scheduling (online/hybrid/physical), expert trainers, progress tracking, group & individual sessions, and certification. Use the free consultation form on our Corporate Training page to get a custom quote with our pricing calculator!",
  "translat|interpret|document|localization":
    "We provide professional translation & interpretation services including Document Translation, Simultaneous Interpretation, Website Localization, and Certified Translation. You can upload your documents (PDF/DOC) through our translation page form, and we'll get back with a quote within 24 hours. Use our price calculator to estimate costs.",
  "partner|teach|join|collaborate":
    "We welcome partnerships with Academic Institutions, Corporate Partners, NGOs & International Organizations, and Government Agencies. We also have opportunities for teachers of Dutch, German, Spanish, Chinese and other languages to teach under the Edu Learning platform. Contact us to learn more!",
  "certificate|certification|diploma":
    "Yes! All our learners receive recognized certificates upon successful program completion. These certificates are recognized by employers and academic institutions worldwide.",
  "contact|reach|phone|email|address|whatsapp":
    "You can reach us via Email at info@edulearning.com or WhatsApp at +234 810 083 5573. We typically respond within minutes on WhatsApp!",
  "about|who|company|history|founded":
    "Edu Learning & Immersion is a modern language training platform focused on practical, skill-based education. We serve learners across 25+ countries with both English and French programs, corporate training, and professional translation services.",
  "schedule|time|flexible|online|virtual|physical|hybrid":
    "We offer flexible scheduling with online, in-person, and hybrid formats. You can learn at your own pace with morning, afternoon, or evening sessions available.",
  "beginner|start|new|first time":
    "Absolutely! Our programs are beginner-friendly and start from the basics. Our General English and General French programs are perfect for beginners, running for 3 months with both online and in-person options.",
  "kids|children|teens|young":
    "We have special Kids & Teens English classes designed with fun, engaging content for young learners. These are ongoing programs available both online and in-person, starting at ₦25,000/month.",
  "exam|ielts|delf|tef|test":
    "Our Exam Preparation program helps you prepare for IELTS, DELF, TEF, and other international proficiency exams. The program runs for 3 months and is available both online and in-person.",
};

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const [keywords, answer] of Object.entries(KNOWLEDGE_BASE)) {
    const patterns = keywords.split("|");
    if (patterns.some((p) => lower.includes(p))) {
      return answer;
    }
  }
  return `I don't have specific information about that, but I'd love to help! You can:\n\n• Chat with us on WhatsApp for quick answers\n• Email us at info@edulearning.com\n• Browse our website pages for detailed information\n\nWould you like to ask about our programs, pricing, corporate training, or translation services?`;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! 👋 I'm the Edu Learning assistant. Ask me about our programs, pricing, corporate training, translation services, or anything else!",
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
          getWhatsAppUrl("Hi, I have a question about Edu Learning"),
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
                  Edu Learning
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
                  className={`max-w-[85%] rounded-2xl p-3 text-sm whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-[#0D883C] text-white rounded-br-sm"
                      : "bg-[#F3FAF5] text-[#4F635E] rounded-tl-sm"
                  }`}
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
