import { useState, useEffect, useRef } from "react";
import { Bot, Send, X } from "lucide-react";

export default function BotChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([{ text: "Hello! How can I assist you today?", sender: "bot" }]); // Initial welcome message

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { text: input, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      const botReply = {
        text: data.answer || "I can't answer that right now.",
        sender: "bot" as const,
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error fetching response.", error: error, sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col max-w-md mx-auto md:rounded-lg shadow-lg bg-white overflow-hidden h-screen w-screen md:w-[400px] md:h-[600px]">
      {/* Chat Header */}
      <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Bot size={24} className="mr-2" />
          <h2 className="text-lg font-semibold">XavsChatBot</h2>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition"
        >
          <X size={20} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto h-80">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 max-w-xs rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="p-3 max-w-xs rounded-lg bg-gray-200 text-black self-start">
            Typing...
          </div>
        )}
        {/* Empty div for auto-scroll */}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="flex items-center border-t p-3">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className={`ml-2 p-2 rounded-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={handleSendMessage}
          disabled={loading}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
