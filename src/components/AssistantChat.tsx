import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Bot, Send, User, Sparkles, ArrowRight, Wrench, FileCode, X, Minimize2, Maximize2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  hasActions?: boolean;
}

export const AssistantChat: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const { openServiceRequest, digitalProducts, openCheckout } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      sender: 'assistant',
      text: "Hi 👋 Tell me what is happening with your website and I'll help you find the right ANDEOLA solution.",
      hasActions: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen || isEmbedded) {
      scrollToBottom();
    }
  }, [messages, isOpen, isEmbedded]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: userText
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });

      if (!res.ok) throw new Error('Failed to fetch reply');
      const data = await res.json();

      setMessages(prev => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: data.reply || "I can help you with that. Would you prefer a self-service Digital Solution or dedicated Professional Help?",
          hasActions: true
        }
      ]);
    } catch (err) {
      // Offline / fallback smart heuristic response
      const lower = userText.toLowerCase();
      let fallbackText = "You have two options. You can use our ready-to-use Digital Solutions to resolve this yourself, or you can request ANDEOLA to resolve it directly for you.";
      
      if (lower.includes('slow') || lower.includes('speed') || lower.includes('performance')) {
        fallbackText = "You have two options. You can use our Website Speed Optimization Guide yourself, or you can request ANDEOLA to optimize the website for you.";
      } else if (lower.includes('checkout') || lower.includes('payment') || lower.includes('stripe')) {
        fallbackText = "You have two options. You can use our Shopify Checkout Troubleshooting Guide yourself, or request ANDEOLA engineers to fix your checkout gateway.";
      } else if (lower.includes('error') || lower.includes('broken') || lower.includes('crash')) {
        fallbackText = "You have two options. You can follow our Website Error Fix Guide yourself, or request ANDEOLA for an emergency bug fix.";
      }

      setMessages(prev => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: fallbackText,
          hasActions: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDigitalSolution = () => {
    const el = document.getElementById('digital-solutions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleRequestProfessionalHelp = () => {
    openServiceRequest();
    setIsOpen(false);
  };

  // 1. EMBEDDED HOMEPAGE SECTION VERSION
  if (isEmbedded) {
    return (
      <section id="ai-assistant" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111827] text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>ANDEOLA ASSISTANT</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 border border-cyan-800 px-2 py-0.5 rounded">
                    AI Diagnostic
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Instant technical triage: tells you whether you need a Digital Solution or Professional Service.
                </p>
              </div>
            </div>

            {/* Chat Box Container */}
            <div className="bg-[#1F2937] rounded-2xl border border-slate-700/80 p-4 h-80 overflow-y-auto space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex gap-3 text-xs sm:text-sm ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[80%] rounded-2xl p-3.5 ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#111827] border border-slate-700 text-slate-200'
                  }`}>
                    <p className="leading-relaxed">{msg.text}</p>

                    {msg.hasActions && (
                      <div className="mt-3 pt-3 border-t border-slate-700/80 flex flex-wrap gap-2">
                        <button
                          onClick={handleViewDigitalSolution}
                          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800 hover:bg-cyan-900 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <FileCode className="w-3.5 h-3.5" />
                          <span>View Digital Solution</span>
                        </button>
                        <button
                          onClick={handleRequestProfessionalHelp}
                          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-purple-900 text-purple-200 border border-purple-700 hover:bg-purple-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Request Professional Help</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-slate-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 text-xs text-slate-400 items-center">
                  <Bot className="w-4 h-4 text-blue-400 animate-spin" />
                  <span>ANDEOLA Assistant is analyzing your issue...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="mt-4 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="E.g. 'My website is very slow', 'Checkout button fails', 'WordPress error 500'..."
                className="flex-1 bg-[#1F2937] border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Diagnose</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
              <span className="text-slate-500">Quick prompts:</span>
              <button
                type="button"
                onClick={() => setInputValue('My website is very slow')}
                className="hover:text-blue-400 underline decoration-slate-700"
              >
                "My website is very slow"
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setInputValue('Customers cannot pay at checkout')}
                className="hover:text-blue-400 underline decoration-slate-700"
              >
                "Customers cannot pay at checkout"
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setInputValue('WordPress white screen of death')}
                className="hover:text-blue-400 underline decoration-slate-700"
              >
                "WordPress white screen"
              </button>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // 2. FLOATING BOTTOM-RIGHT WIDGET
  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#111827] text-white rounded-full shadow-2xl border border-slate-700 hover:border-blue-500 hover:scale-105 transition-all cursor-pointer group"
          aria-label="Open ANDEOLA Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-blue-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-bold tracking-wide">ANDEOLA Assistant</span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-[#111827] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px] animate-scale-in">
          {/* Header */}
          <div className="p-4 bg-[#1F2937] border-b border-slate-700 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold">ANDEOLA ASSISTANT</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Online Technical Advisor</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#111827]">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2 text-xs ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className={`max-w-[85%] rounded-xl p-3 ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#1F2937] border border-slate-700 text-slate-200'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>

                  {msg.hasActions && (
                    <div className="mt-2.5 pt-2.5 border-t border-slate-700 flex flex-col gap-1.5">
                      <button
                        onClick={handleViewDigitalSolution}
                        className="w-full text-left px-2.5 py-1.5 text-[11px] font-bold rounded bg-cyan-950 text-cyan-300 border border-cyan-800 hover:bg-cyan-900 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>View Digital Solution</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                      <button
                        onClick={handleRequestProfessionalHelp}
                        className="w-full text-left px-2.5 py-1.5 text-[11px] font-bold rounded bg-purple-900 text-purple-200 border border-purple-700 hover:bg-purple-800 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>Request Professional Help</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Bot className="w-3.5 h-3.5 text-blue-400 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-[#1F2937] border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Describe your website issue..."
              className="flex-1 bg-[#111827] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
