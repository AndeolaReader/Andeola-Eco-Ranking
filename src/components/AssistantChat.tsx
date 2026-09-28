import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  ArrowRight, 
  Wrench, 
  FileText, 
  X, 
  Minimize2, 
  Maximize2,
  Download
} from 'lucide-react';
import { DigitalProduct, ServiceItem } from '../types';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  solutionMatch?: DigitalProduct;
  serviceMatch?: ServiceItem;
  options?: {
    label: string;
    action: () => void;
    variant: 'solution' | 'service';
  }[];
}

export const AssistantChat: React.FC = () => {
  const { digitalProducts, services, openSolutionDetail, openServiceRequest } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-01',
      sender: 'assistant',
      text: 'Hi 👋 What website problem are you trying to solve? Tell me about your issue, or pick one below:',
      options: [
        {
          label: 'Shopify Checkout issue',
          variant: 'solution',
          action: () => handlePreset('My Shopify store has a checkout issue.')
        },
        {
          label: 'Slow loading speed',
          variant: 'solution',
          action: () => handlePreset('My website loads very slowly.')
        },
        {
          label: 'Need a complete redesign',
          variant: 'service',
          action: () => handlePreset('I need an outdated website redesigned.')
        },
        {
          label: 'WordPress error / crash',
          variant: 'solution',
          action: () => handlePreset('I have WordPress errors and plugin conflicts.')
        }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handlePreset = (text: string) => {
    handleSend(text);
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Generate intelligent response routing
    setTimeout(() => {
      const lower = text.toLowerCase();
      let replyText = '';
      let matchedSolution: DigitalProduct | undefined;
      let matchedService: ServiceItem | undefined;

      if (lower.includes('checkout') || lower.includes('payment') || lower.includes('shopify')) {
        matchedSolution = digitalProducts.find(p => p.id === 'sol-01');
        matchedService = services.find(s => s.id === 'shopify-support');
        replyText = `For Shopify checkout or payment problems, you have two choices: You can either purchase our Shopify Checkout Troubleshooting Guide ($19) to diagnose and fix configuration issues yourself, or hire ANDEOLA to resolve it directly.`;
      } else if (lower.includes('speed') || lower.includes('slow') || lower.includes('performance')) {
        matchedSolution = digitalProducts.find(p => p.id === 'sol-02');
        matchedService = services.find(s => s.id === 'speed-optimization');
        replyText = `For slow website loading speeds, you can follow our Website Speed Optimization Checklist ($15) to optimize assets yourself, or hire ANDEOLA for full Core Web Vitals remediation.`;
      } else if (lower.includes('redesign') || lower.includes('outdated') || lower.includes('new site')) {
        matchedSolution = digitalProducts.find(p => p.id === 'sol-12');
        matchedService = services.find(s => s.id === 'web-redesign');
        replyText = `For website redesigns, you can use our Website Redesign Planning Document ($15) to organize your requirements, or hire ANDEOLA to design and build a modern, high-converting website.`;
      } else if (lower.includes('404') || lower.includes('broken link') || lower.includes('error')) {
        matchedSolution = digitalProducts.find(p => p.id === 'sol-05');
        matchedService = services.find(s => s.id === 'web-error-fix');
        replyText = `For website errors or broken pages, you can follow our step-by-step 404 & Error Fix Guides, or hire our engineering team to inspect and fix the code directly.`;
      } else if (lower.includes('mobile') || lower.includes('phone') || lower.includes('responsive')) {
        matchedSolution = digitalProducts.find(p => p.id === 'sol-06');
        matchedService = services.find(s => s.id === 'web-redesign');
        replyText = `For mobile responsiveness issues, you can run through our Mobile Responsiveness Fix Checklist ($12), or have our team fix your viewport CSS and touch targets directly.`;
      } else {
        matchedSolution = digitalProducts.find(p => p.id === 'sol-08');
        matchedService = services.find(s => s.id === 'web-audit');
        replyText = `We can definitely help with that. You can either explore our digital troubleshooting solutions to solve it yourself, or request a professional website audit from our team.`;
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        solutionMatch: matchedSolution,
        serviceMatch: matchedService,
        options: [
          ...(matchedSolution ? [{
            label: `View Solution ($${matchedSolution.price})`,
            variant: 'solution' as const,
            action: () => openSolutionDetail(matchedSolution!)
          }] : []),
          ...(matchedService ? [{
            label: `Get Professional Help (${matchedService.priceDisplay})`,
            variant: 'service' as const,
            action: () => openServiceRequest(matchedService)
          }] : [])
        ]
      };

      setMessages(prev => [...prev, botMsg]);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#0F172A] hover:bg-[#2563EB] text-white shadow-2xl border border-slate-700 flex items-center gap-3 transition-all hover:scale-105 cursor-pointer group"
          aria-label="Open ANDEOLA Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-blue-400 group-hover:text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="text-left hidden sm:block leading-tight pr-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-blue-400 group-hover:text-white">
              ANDEOLA ASSISTANT
            </div>
            <div className="text-xs font-semibold text-slate-200">
              Need help finding a solution?
            </div>
          </div>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[520px] animate-scale-in">
          
          {/* Header */}
          <div className="p-4 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  ANDEOLA ASSISTANT
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Ready to guide you</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F8FAFC] text-xs">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#2563EB] text-white rounded-tr-none'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Quick Action Buttons */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={opt.action}
                          className={`px-3 py-1.5 rounded-xl font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5 transition-all cursor-pointer ${
                            opt.variant === 'solution'
                              ? 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
                              : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                          }`}
                        >
                          {opt.variant === 'solution' ? (
                            <FileText className="w-3 h-3" />
                          ) : (
                            <Wrench className="w-3 h-3" />
                          )}
                          <span>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Ask about Shopify, errors, speed, redesign..."
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-40 text-white cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
