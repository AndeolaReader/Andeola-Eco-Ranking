import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: 'What is the difference between an ANDEOLA Digital Solution and a Professional Service?',
      a: 'A Digital Solution is a ready-to-use, self-service diagnostic guide, checklist, and code repository ($9–$25 USD) that allows you or your developer to fix the issue yourselves immediately. A Professional Service (Starting at $100–$800 USD) is a hands-on engagement where ANDEOLA full-stack engineers diagnose, code, and resolve the problem for you.'
    },
    {
      q: 'How do I download my digital solution after purchase?',
      a: 'Digital product checkouts are instantaneous with zero shipping forms required. Once your payment is verified via Paystack or Flutterwave in USD, your download is unlocked immediately on screen and saved to your "My Downloads" customer portal with a secure, temporary signed link.'
    },
    {
      q: 'Which payment methods do you accept?',
      a: 'We accept global debit and credit cards (Visa, MasterCard, American Express) processed securely via Paystack and Flutterwave. All prices across our catalog and service invoices are billed in US Dollars (USD).'
    },
    {
      q: 'Why does service pricing say "Starting at" rather than a fixed fee?',
      a: 'Website architectures vary dramatically. A simple CSS layout glitch on a static site requires far less engineering than a multi-currency webhook failure on a custom headless Shopify storefront. Displaying "Starting at" ensures honest, transparent pricing based on your actual project scope.'
    },
    {
      q: 'Are the digital solutions real files or demo placeholders?',
      a: 'The marketplace currently presents demo documentation blueprints clearly labeled for evaluation and workflow testing. Upon purchase, you receive the full diagnostic breakdown and action checklist for that specific technical topic.'
    },
    {
      q: 'Can I request a custom payment request or milestone invoice?',
      a: 'Yes. For bespoke redesigns or large optimization projects, ANDEOLA generates a direct Payment Request invoice with custom milestones, scope documentation, and a secure online payment link.'
    },
    {
      q: 'How quickly can ANDEOLA engineers start on an urgent website error fix?',
      a: 'Emergency bug fixes and checkout troubleshooting are triaged within 2 to 4 hours. You can connect directly with our engineering triage line on WhatsApp at +234 812 434 9094.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Everything you need to know about our services, digital troubleshooting marketplace, and billing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden transition-all bg-[#F8FAFC]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111827] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
