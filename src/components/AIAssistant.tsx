import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  Home, 
  Building2, 
  DollarSign, 
  Phone,
  RotateCcw,
  ExternalLink
} from 'lucide-react';
import { PROPERTIES_DATA } from '../data/properties';
import { Property } from '../types';

interface AIAssistantProps {
  onNavigate: (path: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  matchedProperties?: Property[];
  actionLink?: { label: string; href: string };
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: 'Assalam-o-Alaikum! Welcome to Prime Estate. I am your AI Property Consultant. How can I help you today? I can search verified houses, apartments, plots, explain FBR property taxes, or guide you through investments in Islamabad, Lahore, Karachi & Rawalpindi.',
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    '🏡 Luxury houses in Islamabad',
    '🏢 Commercial properties in Blue Area',
    '📑 How to verify property titles?',
    '💰 FBR property taxes guide',
    '📍 Best sectors to invest in Lahore'
  ];

  const handleSend = (textToSend?: string) => {
    const userQuery = (textToSend || input).trim();
    if (!userQuery) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userQuery,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      generateAIResponse(userQuery);
    }, 600);
  };

  const generateAIResponse = (query: string) => {
    const q = query.toLowerCase();
    let replyText = '';
    let matchedProps: Property[] = [];
    let actionLink: { label: string; href: string } | undefined;

    if (q.includes('islamabad') || q.includes('f-7') || q.includes('f-6') || q.includes('f7') || q.includes('f6') || q.includes('margalla')) {
      matchedProps = PROPERTIES_DATA.filter((p) => p.city.toLowerCase() === 'islamabad');
      replyText = `We have verified listings in Islamabad, including prime luxury villas in Sector F-7, diplomatic residences in Sector F-6, and commercial towers in Blue Area. Here are top recommendations:`;
      actionLink = { label: 'View all Islamabad properties', href: '/locations/islamabad' };
    } else if (q.includes('lahore') || q.includes('gulberg') || q.includes('dha phase 6') || q.includes('dha 6') || q.includes('dha')) {
      matchedProps = PROPERTIES_DATA.filter((p) => p.city.toLowerCase() === 'lahore');
      replyText = `In Lahore, we feature high-rise luxury apartments in Gulberg III, 1 Kanal residential plots in DHA Phase 6, and furnished rental suites. Take a look at these:`;
      actionLink = { label: 'Explore Lahore Real Estate', href: '/locations/lahore' };
    } else if (q.includes('karachi') || q.includes('clifton')) {
      matchedProps = PROPERTIES_DATA.filter((p) => p.city.toLowerCase() === 'karachi');
      replyText = `In Karachi, we offer exclusive beachside luxury villas in Clifton Block 4 and Grade-A corporate office floors on I.I. Chundrigar Road:`;
      actionLink = { label: 'Explore Karachi Properties', href: '/locations/karachi' };
    } else if (q.includes('commercial') || q.includes('office') || q.includes('shop') || q.includes('plaza') || q.includes('yield')) {
      matchedProps = PROPERTIES_DATA.filter((p) => p.propertyType === 'commercial' || p.propertyType === 'office' || p.propertyType === 'shop');
      replyText = `Commercial real estate in Pakistan currently yields 7.5% to 9.2% net annual rental cash flow with inflation escalation clauses. Here are our prime commercial assets:`;
      actionLink = { label: 'Explore Commercial Investment Guide', href: '/investment' };
    } else if (q.includes('tax') || q.includes('fbr') || q.includes('filer') || q.includes('duty') || q.includes('fees')) {
      replyText = `FBR Property Tax Overview (2026):\n• Section 236K (Advance tax for buyers): 3% for Active Filers, 10.5% for Late/Non-Filers.\n• Section 236C (Advance tax for sellers): 3% for Filers, 6%–10% for Non-Filers depending on holding duration.\n• Provincial Stamp Duty & Municipal transfer fees: Typically 1%–2%.\n\nOur legal and tax advisors provide exact calculations before closing.`;
      actionLink = { label: 'Read Complete Property Buying Guide', href: '/blog/how-to-buy-property-complete-guide' };
    } else if (q.includes('verify') || q.includes('check') || q.includes('title') || q.includes('patwari') || q.includes('legal') || q.includes('registry')) {
      replyText = `To verify a property title in Pakistan:\n1. Check the official computerised land record (Fard-e-Malkiat).\n2. Request an official Allotment Verification Letter directly from the society transfer office (CDA, LDA, DHA, Bahria).\n3. Confirm approved building plans (NOC) with municipal authorities.\n4. Secure a Non-Encumbrance Certificate (NEC) ensuring no bank mortgage liens exist.\n\nPrime Estate guarantees 100% clear titles on all brokered deals.`;
      actionLink = { label: 'Read Due Diligence Checklist', href: '/blog/things-to-check-before-buying-house' };
    } else if (q.includes('mortgage') || q.includes('loan') || q.includes('installment') || q.includes('bank') || q.includes('kibor')) {
      replyText = `Pakistani banks offer Islamic Home Financing and conventional mortgages with loan-to-value (LTV) up to 75% for 5 to 25 years tenure. You can use our interactive Home Loan Calculator to simulate your exact monthly PKR installments!`;
      actionLink = { label: 'Open Home Loan Calculator', href: '/properties/luxury-house-islamabad-f7' };
    } else if (q.includes('rent') || q.includes('rental') || q.includes('tenant')) {
      matchedProps = PROPERTIES_DATA.filter((p) => p.purpose === 'rent');
      replyText = `Looking for rental properties? We manage executive residences in Sector F-6/3 Islamabad, turnkey furnished apartments in DHA Lahore, and corporate office spaces:`;
      actionLink = { label: 'Browse All Properties for Rent', href: '/rent' };
    } else if (q.includes('sell') || q.includes('list') || q.includes('valuation')) {
      replyText = `You can list your house, apartment, plot, or commercial building with Prime Estate for free. We market to 25,000+ verified active buyers and handle professional architectural photography.`;
      actionLink = { label: 'Submit Your Property for Sale', href: '/sell-property' };
    } else {
      matchedProps = PROPERTIES_DATA.filter((p) => p.featured).slice(0, 2);
      replyText = `I understand! Prime Estate specializes in verified real estate transactions across Islamabad, Lahore, Karachi, and Rawalpindi. Here are some of our most sought-after featured properties, or tell me your preferred city and budget:`;
      actionLink = { label: 'Browse All Properties', href: '/properties' };
    }

    const aiMsg: ChatMessage = {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      matchedProperties: matchedProps.length > 0 ? matchedProps.slice(0, 2) : undefined,
      actionLink: actionLink
    };

    setMessages((prev) => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Action Dock on Right Edge */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        
        {/* 1. AI Assistant Floating Button */}
        <div className="relative group">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-neutral-950 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center border-2 border-amber-400/80 hover:border-amber-300 relative focus:outline-none"
            aria-label="Toggle AI Real Estate Assistant"
            title="Prime Estate AI Assistant"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <>
                <Bot className="w-7 h-7 text-amber-400" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-2.5 h-2.5 text-neutral-950" />
                </span>
              </>
            )}
          </button>
          
          {!isOpen && (
            <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-neutral-700">
              AI Property Assistant
            </div>
          )}
        </div>

        {/* 2. WhatsApp Floating Button (Directly underneath AI Assistant) */}
        <div className="relative group">
          <a
            href="https://wa.me/923001234567?text=Hello%20Prime%20Estate%2C%20I%20would%20like%20to%20inquire%20about%20properties%20and%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center border-2 border-white/40 focus:outline-none"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp (+92 300 1234567)"
          >
            {/* Crisp authentic WhatsApp SVG */}
            <svg 
              className="w-7 h-7 fill-white" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-neutral-700">
            Chat on WhatsApp
          </div>
        </div>

      </div>

      {/* AI Assistant Chat Modal Box */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[580px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-neutral-950 text-white p-4 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-amber-400 flex items-center justify-center text-amber-400 shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm font-display text-white">Prime AI Advisor</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[11px] text-neutral-400">
                  Real Estate Intelligence · 24/7 Available
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setMessages([
                    {
                      id: 'msg-welcome-reset',
                      sender: 'ai',
                      text: 'Conversation reset. How can I assist you with Pakistan properties today?',
                      timestamp: 'Just now'
                    }
                  ]);
                }}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
                title="Reset Chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
                title="Close Window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/70 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-neutral-900 text-white rounded-br-none'
                      : 'bg-white text-neutral-800 rounded-bl-none border border-neutral-200 shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line text-xs">{msg.text}</p>

                  {/* If response returned property suggestions */}
                  {msg.matchedProperties && msg.matchedProperties.length > 0 && (
                    <div className="mt-3 space-y-2 pt-2 border-t border-neutral-100">
                      {msg.matchedProperties.map((prop) => (
                        <div
                          key={prop.id}
                          className="bg-neutral-50 rounded-xl p-2.5 border border-neutral-200 flex items-center justify-between gap-2"
                        >
                          <div className="truncate">
                            <div className="font-bold text-[11px] text-neutral-900 truncate">
                              {prop.title}
                            </div>
                            <div className="text-[10px] text-neutral-500 font-mono">
                              {prop.formattedPrice} · {prop.city}
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              onNavigate(`/properties/${prop.slug}`);
                              setIsOpen(false);
                            }}
                            className="px-2.5 py-1 text-[10px] font-semibold bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 shrink-0"
                          >
                            View
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Link button */}
                  {msg.actionLink && (
                    <div className="mt-2.5 pt-2 border-t border-neutral-100">
                      <button
                        onClick={() => {
                          onNavigate(msg.actionLink!.href);
                          setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 text-[11px]"
                      >
                        <span>{msg.actionLink.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-neutral-400 mt-1 px-1 font-mono">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-neutral-500 bg-white p-3 rounded-2xl border border-neutral-200 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
                <span>Prime AI is analyzing real estate data...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Strip */}
          <div className="px-3 py-2 bg-white border-t border-neutral-100 overflow-x-auto whitespace-nowrap flex items-center gap-1.5">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp)}
                className="px-2.5 py-1 text-[11px] bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full transition-colors shrink-0"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-neutral-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about properties, prices, taxes..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3.5 py-2.5 text-xs bg-neutral-100 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-neutral-950 text-white rounded-xl hover:bg-neutral-800 disabled:opacity-40 transition-colors"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* WhatsApp Direct Handoff Footer inside chat */}
          <div className="bg-neutral-100 px-4 py-1.5 flex items-center justify-between text-[11px] text-neutral-600 border-t border-neutral-200">
            <span>Need human agent?</span>
            <a
              href="https://wa.me/923001234567?text=Hello%20Prime%20Estate%20Agent%2C%20I%20would%20like%20to%20speak%20with%20a%20consultant."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
            >
              <span>Connect on WhatsApp</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

        </div>
      )}
    </>
  );
};
