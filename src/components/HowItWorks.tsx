import React from 'react';
import { Search, Sliders, CreditCard, Rocket, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Describe the Problem',
      description: 'Tell us what is happening with your website or select the exact issue using our interactive diagnostic tool.',
      icon: <Search className="w-5 h-5 text-blue-600" />
    },
    {
      number: '02',
      title: 'Choose Your Solution',
      description: 'Decide whether you want to download a ready-made digital solution to solve it yourself, or hire ANDEOLA for full-service implementation.',
      icon: <Sliders className="w-5 h-5 text-purple-600" />
    },
    {
      number: '03',
      title: 'Pay Securely',
      description: 'Check out with Paystack, Flutterwave, Stripe or PayPal in USD with 256-bit bank-grade encryption and zero hidden fees.',
      icon: <CreditCard className="w-5 h-5 text-emerald-600" />
    },
    {
      number: '04',
      title: 'Get the Solution or Professional Help',
      description: 'Instantly download your digital document, or have our engineering team initiate your approved custom development scope.',
      icon: <Rocket className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold tracking-widest uppercase text-slate-700">
            <span>THE 4-STEP PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight uppercase">
            How It Works
          </h2>
          <p className="text-base text-slate-600">
            A transparent and frictionless journey from website friction to resolution.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-lg relative group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0F172A] uppercase tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[10px] font-mono text-slate-400">
                STAGE {step.number} OF 04
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
