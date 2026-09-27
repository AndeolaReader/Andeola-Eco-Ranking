import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Logo } from '../Logo';
import { 
  X, 
  DollarSign, 
  TrendingUp, 
  Building2, 
  ArrowDownToLine, 
  PlusCircle, 
  FileCode, 
  Wrench, 
  Settings, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Clock, 
  Lock,
  Layers,
  Send,
  Eye
} from 'lucide-react';

export const AdminDashboardModal: React.FC = () => {
  const {
    closeModal,
    finance,
    bankAccount,
    withdrawals,
    services,
    digitalProducts,
    paymentRequests,
    brandConfig,
    createPaymentRequest,
    addDigitalProduct,
    updateServicePrice,
    updateBankAccount,
    requestWithdrawal,
    updateBrandConfig,
    openPayPaymentRequest
  } = useApp();

  const [activeTab, setActiveTab] = useState<'finance' | 'payouts' | 'requests' | 'products' | 'services' | 'settings'>('finance');

  // Withdrawal form state
  const [withdrawAmount, setWithdrawAmount] = useState<number>(100);
  const [withdrawMsg, setWithdrawMsg] = useState<{ success: boolean; text: string } | null>(null);

  // Bank form state
  const [bankCountry, setBankCountry] = useState(bankAccount.country);
  const [bankName, setBankName] = useState(bankAccount.bankName);
  const [accountName, setAccountName] = useState(bankAccount.accountName);
  const [accountNumber, setAccountNumber] = useState('');
  const [bankSavedMsg, setBankSavedMsg] = useState(false);

  // Payment Request form state
  const [prClientName, setPrClientName] = useState('');
  const [prClientEmail, setPrClientEmail] = useState('');
  const [prServiceTitle, setPrServiceTitle] = useState('Website Redesign');
  const [prAmount, setPrAmount] = useState<number>(1200);
  const [prDescription, setPrDescription] = useState('Complete website redesign and responsive optimization.');
  const [prDueDate, setPrDueDate] = useState('2026-10-20');
  const [prSuccessMsg, setPrSuccessMsg] = useState(false);

  // Product Add state
  const [newProdTitle, setNewProdTitle] = useState('');
  const [newProdPrice, setNewProdPrice] = useState<number>(19);
  const [newProdProblem, setNewProdProblem] = useState('');
  const [newProdSolution, setNewProdSolution] = useState('');
  const [newProdCategory, setNewProdCategory] = useState<'Shopify' | 'WordPress' | 'Speed' | 'SEO' | 'Security' | 'UI/UX' | 'Errors'>('Shopify');
  const [newProdSuccess, setNewProdSuccess] = useState(false);

  // Brand settings state
  const [bName, setBName] = useState(brandConfig.brandName);
  const [bSecondary, setBSecondary] = useState(brandConfig.secondaryBrand);
  const [bWhatsapp, setBWhatsapp] = useState(brandConfig.whatsappDisplay);
  const [bEmail, setBEmail] = useState(brandConfig.email);
  const [bHeadline, setBHeadline] = useState(brandConfig.heroHeadline);
  const [brandSaved, setBrandSaved] = useState(false);

  const handleWithdrawalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = requestWithdrawal(Number(withdrawAmount));
    setWithdrawMsg({ success: result.success, text: result.message });
    setTimeout(() => setWithdrawMsg(null), 5000);
  };

  const handleBankSave = (e: React.FormEvent) => {
    e.preventDefault();
    const masked = accountNumber.length >= 4 
      ? `•••• •••• •••• ${accountNumber.slice(-4)}`
      : bankAccount.accountNumberMasked;

    updateBankAccount({
      country: bankCountry,
      bankName,
      accountName,
      accountNumberMasked: masked,
      isVerified: true
    });
    setBankSavedMsg(true);
    setAccountNumber('');
    setTimeout(() => setBankSavedMsg(false), 3000);
  };

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prClientName || !prClientEmail || !prAmount) return;

    createPaymentRequest({
      clientName: prClientName,
      clientEmail: prClientEmail,
      serviceTitle: prServiceTitle,
      amount: Number(prAmount),
      currency: 'USD',
      description: prDescription,
      dueDate: prDueDate
    });

    setPrSuccessMsg(true);
    setPrClientName('');
    setPrClientEmail('');
    setTimeout(() => setPrSuccessMsg(false), 4000);
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdTitle || !newProdPrice) return;

    addDigitalProduct({
      title: newProdTitle.toUpperCase(),
      problem: newProdProblem || 'Identified customer technical friction point.',
      solution: newProdSolution || 'Step-by-step diagnostic workflow and remediation guide.',
      includes: ['Step-by-step diagnostic guide', 'Root-cause checklist', 'Remediation snippets'],
      format: 'PDF Guide + Diagnostic Checklist',
      price: Number(newProdPrice),
      difficulty: 'Intermediate',
      compatibility: ['All Platforms'],
      rating: 5.0,
      reviewCount: 1,
      category: newProdCategory,
      isDemo: true,
      demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
      tags: [newProdCategory, 'Troubleshooting'],
      downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - ${newProdTitle}\nVersion 1.0 | Evaluation Blueprint\n\nProblem: ${newProdProblem}\nSolution: ${newProdSolution}`
    });

    setNewProdSuccess(true);
    setNewProdTitle('');
    setNewProdProblem('');
    setNewProdSolution('');
    setTimeout(() => setNewProdSuccess(false), 3000);
  };

  const handleSaveBrand = (e: React.FormEvent) => {
    e.preventDefault();
    updateBrandConfig({
      brandName: bName,
      secondaryBrand: bSecondary,
      whatsappDisplay: bWhatsapp,
      email: bEmail,
      heroHeadline: bHeadline
    });
    setBrandSaved(true);
    setTimeout(() => setBrandSaved(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Logo variant="compact" theme="light" size="sm" showSubtitle={false} />
            <div className="border-l border-slate-700 pl-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                Administration & Operations
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                ANDEOLA Management Portal
              </h3>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-[#1F2937] text-slate-300 px-4 flex items-center gap-1 overflow-x-auto border-b border-slate-800 text-xs font-semibold py-2">
          <button
            onClick={() => setActiveTab('finance')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'finance' ? 'bg-[#2563EB] text-white' : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Finance Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('payouts')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'payouts' ? 'bg-[#2563EB] text-white' : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Payouts & Bank</span>
          </button>

          <button
            onClick={() => setActiveTab('requests')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'requests' ? 'bg-[#2563EB] text-white' : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Payment Requests ({paymentRequests.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'products' ? 'bg-[#2563EB] text-white' : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Digital Solutions ({digitalProducts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'services' ? 'bg-[#2563EB] text-white' : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Services Pricing</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'settings' ? 'bg-[#2563EB] text-white' : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Brand Settings</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F8FAFC]">
          
          {/* TAB 1: FINANCE DASHBOARD (Section 15) */}
          {activeTab === 'finance' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-extrabold text-[#111827]">
                  Financial Health & Treasury Summary
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real-time USD revenue analytics from Paystack & Flutterwave gateway settlements.
                </p>
              </div>

              {/* 7 Core Required Finance Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Total Revenue
                  </span>
                  <div className="text-2xl font-extrabold text-[#111827] font-mono mt-1">
                    ${finance.totalRevenue.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold mt-1 block">
                    All Settled USD
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Service Revenue
                  </span>
                  <div className="text-2xl font-extrabold text-purple-600 font-mono mt-1">
                    ${finance.serviceRevenue.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Invoices & Retainers
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Digital Solution Rev
                  </span>
                  <div className="text-2xl font-extrabold text-blue-600 font-mono mt-1">
                    ${finance.digitalSolutionRevenue.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Guides & Checklists
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Settled Balance
                  </span>
                  <div className="text-2xl font-extrabold text-emerald-600 font-mono mt-1">
                    ${finance.settledBalance.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold mt-1 block">
                    Available For Payout
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Pending Payments
                  </span>
                  <div className="text-xl font-extrabold text-amber-600 font-mono mt-1">
                    ${finance.pendingPayments.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Awaiting Client Settlement
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Pending Balance
                  </span>
                  <div className="text-xl font-extrabold text-slate-700 font-mono mt-1">
                    ${finance.pendingBalance.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Clearing Gateways
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs col-span-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Total Withdrawn Amount
                  </span>
                  <div className="text-2xl font-extrabold text-slate-800 font-mono mt-1">
                    ${finance.withdrawnAmount.toLocaleString()} USD
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Remitted to {bankAccount.bankName} ({bankAccount.accountNumberMasked})
                  </span>
                </div>

              </div>

              {/* Visual Performance Charts Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Revenue Streams Chart */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                    Revenue Stream Proportion (USD)
                  </h5>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-purple-700">Services ({finance.serviceRevenue > 0 ? Math.round((finance.serviceRevenue / (finance.totalRevenue || 1)) * 100) : 0}%)</span>
                        <span className="font-mono font-bold">${finance.serviceRevenue.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-600 rounded-full"
                          style={{ width: `${finance.totalRevenue ? (finance.serviceRevenue / finance.totalRevenue) * 100 : 50}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-blue-700">Digital Solutions ({finance.digitalSolutionRevenue > 0 ? Math.round((finance.digitalSolutionRevenue / (finance.totalRevenue || 1)) * 100) : 0}%)</span>
                        <span className="font-mono font-bold">${finance.digitalSolutionRevenue.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${finance.totalRevenue ? (finance.digitalSolutionRevenue / finance.totalRevenue) * 100 : 50}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
                    <span>Active Gateway Sync: Paystack & Flutterwave</span>
                    <span className="text-emerald-600 font-semibold">Healthy Ledger</span>
                  </div>
                </div>

                {/* Quick Payout Callout */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Available For Payout
                    </h5>
                    <div className="text-3xl font-extrabold text-[#111827] font-mono mt-2">
                      ${finance.settledBalance.toLocaleString()} <span className="text-xs font-sans text-slate-500">USD</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Only settled funds can become withdrawable. Minimum threshold is $50.00 USD. Direct bank payouts execute via verified automated transfer.
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setActiveTab('payouts')}
                      className="w-full py-2.5 px-4 text-xs font-bold rounded-lg bg-[#111827] hover:bg-[#2563EB] text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ArrowDownToLine className="w-4 h-4" />
                      <span>Proceed to Payouts & Bank</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: PAYOUTS & BANK ACCOUNT (Sections 16 & 17) */}
          {activeTab === 'payouts' && (
            <div className="space-y-8">
              
              {/* Section 17: Withdrawal System */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Withdraw Funds
                    </h4>
                    <p className="text-xs text-slate-500">
                      Initiate settlement payout to registered bank account.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500">Available Settled Balance:</span>
                    <div className="text-lg font-extrabold text-emerald-600 font-mono">
                      ${finance.settledBalance.toLocaleString()} USD
                    </div>
                  </div>
                </div>

                {withdrawMsg && (
                  <div className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                    withdrawMsg.success ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-red-50 text-red-900 border border-red-200'
                  }`}>
                    {withdrawMsg.success ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />}
                    <span>{withdrawMsg.text}</span>
                  </div>
                )}

                <form onSubmit={handleWithdrawalSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Withdrawal Amount (USD) — Min: $50.00
                    </label>
                    <input
                      type="number"
                      min={50}
                      max={finance.settledBalance}
                      step={1}
                      value={withdrawAmount}
                      onChange={e => setWithdrawAmount(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={finance.settledBalance < 50}
                    className="py-2.5 px-4 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ArrowDownToLine className="w-4 h-4" />
                    <span>Request Withdrawal</span>
                  </button>
                </form>

                {/* Withdrawal History Table */}
                <div className="pt-4">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                    Withdrawal History
                  </h5>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider">
                          <th className="py-2">Date</th>
                          <th className="py-2">Reference</th>
                          <th className="py-2">Amount</th>
                          <th className="py-2">Destination</th>
                          <th className="py-2 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {withdrawals.map(w => (
                          <tr key={w.id}>
                            <td className="py-2.5 text-slate-600">{w.date}</td>
                            <td className="py-2.5 font-mono text-slate-800">{w.reference}</td>
                            <td className="py-2.5 font-mono font-bold text-slate-900">${w.amount.toLocaleString()} USD</td>
                            <td className="py-2.5 text-slate-600">{w.destinationBank} ({w.destinationAccount})</td>
                            <td className="py-2.5 text-right">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                w.status === 'Successful' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                              }`}>
                                {w.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Section 16: Payout Settings / Add Bank Account */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Payout Settings: Bank Account Information
                    </h4>
                    <p className="text-xs text-slate-500">
                      Secure destination for Paystack / Flutterwave automated transfers.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Provider Account
                  </span>
                </div>

                {bankSavedMsg && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Bank account settings successfully updated and masked.</span>
                  </div>
                )}

                {/* Currently Configured Masked Display */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800">{bankAccount.bankName}</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">{bankAccount.accountNumberMasked}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Beneficiary: {bankAccount.accountName} ({bankAccount.country})</div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Masked for Security</span>
                </div>

                <form onSubmit={handleBankSave} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Country</label>
                    <input
                      type="text"
                      required
                      value={bankCountry}
                      onChange={e => setBankCountry(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Bank Name</label>
                    <input
                      type="text"
                      required
                      value={bankName}
                      onChange={e => setBankName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Account Holder Name</label>
                    <input
                      type="text"
                      required
                      value={accountName}
                      onChange={e => setAccountName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Update Account Number (Masked)</label>
                    <input
                      type="password"
                      placeholder="Enter new account number..."
                      value={accountNumber}
                      onChange={e => setAccountNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-bold rounded-lg bg-[#111827] hover:bg-[#2563EB] text-white transition-colors cursor-pointer"
                    >
                      Save Bank Details
                    </button>
                  </div>
                </form>

              </div>

            </div>
          )}

          {/* TAB 3: SERVICE PAYMENT REQUESTS (Section 14) */}
          {activeTab === 'requests' && (
            <div className="space-y-8">
              
              {/* Creator Form */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="pb-3 border-b border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Create Custom Payment Request
                  </h4>
                  <p className="text-xs text-slate-500">
                    Generate an official invoice link for clients to pay custom services in USD.
                  </p>
                </div>

                {prSuccessMsg && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Payment request generated and added to active ledger!</span>
                  </div>
                )}

                <form onSubmit={handleCreateRequest} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Client Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Sterling"
                      value={prClientName}
                      onChange={e => setPrClientName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Client Email</label>
                    <input
                      type="email"
                      required
                      placeholder="client@company.com"
                      value={prClientEmail}
                      onChange={e => setPrClientEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Title</label>
                    <input
                      type="text"
                      required
                      value={prServiceTitle}
                      onChange={e => setPrServiceTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Amount ($ USD)</label>
                    <input
                      type="number"
                      required
                      min={10}
                      value={prAmount}
                      onChange={e => setPrAmount(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Description & Scope</label>
                    <textarea
                      rows={2}
                      required
                      value={prDescription}
                      onChange={e => setPrDescription(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Due Date</label>
                    <input
                      type="date"
                      required
                      value={prDueDate}
                      onChange={e => setPrDueDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 text-xs font-bold rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Issue Payment Request</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Payment Requests List */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                  Active & Settled Requests ({paymentRequests.length})
                </h4>

                <div className="space-y-3">
                  {paymentRequests.map(req => (
                    <div
                      key={req.id}
                      className="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            req.status === 'PAID' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {req.status}
                          </span>
                          <span className="text-xs font-mono text-slate-500">{req.reference}</span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 mt-1">{req.serviceTitle}</h5>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Client: <strong>{req.clientName}</strong> ({req.clientEmail}) · Due: {req.dueDate}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-lg font-bold font-mono text-slate-900">
                            ${req.amount.toLocaleString()} USD
                          </div>
                          {req.paidAt && (
                            <span className="text-[10px] text-emerald-600">Settled {req.paidAt}</span>
                          )}
                        </div>

                        <button
                          onClick={() => openPayPaymentRequest(req)}
                          className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Pay Portal</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: DIGITAL PRODUCTS MANAGEMENT (Section 22) */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              
              {/* Product Creator */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="pb-3 border-b border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Add Digital Solution to Marketplace
                  </h4>
                  <p className="text-xs text-slate-500">
                    Create troubleshooting blueprints, checklists, and technical documentation.
                  </p>
                </div>

                {newProdSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Product added to live catalog!</span>
                  </div>
                )}

                <form onSubmit={handleCreateProduct} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Product Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. WOOCOMMERCE TAX CALCULATION FIX"
                      value={newProdTitle}
                      onChange={e => setNewProdTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Price (USD $)</label>
                    <input
                      type="number"
                      required
                      min={5}
                      value={newProdPrice}
                      onChange={e => setNewProdPrice(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={newProdCategory}
                      onChange={e => setNewProdCategory(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500 bg-white"
                    >
                      <option value="Shopify">Shopify</option>
                      <option value="WordPress">WordPress</option>
                      <option value="Speed">Speed</option>
                      <option value="SEO">SEO</option>
                      <option value="Security">Security</option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="Errors">Errors</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Format</label>
                    <input
                      type="text"
                      disabled
                      value="PDF + Diagnostic Blueprint"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-slate-50 text-slate-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Problem Description</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tax rules failing to apply during guest checkout."
                      value={newProdProblem}
                      onChange={e => setNewProdProblem(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Solution Description</label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Step-by-step diagnostic process and recommended settings."
                      value={newProdSolution}
                      onChange={e => setNewProdSolution(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="py-2.5 px-5 text-xs font-bold rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white transition-colors cursor-pointer"
                    >
                      Publish Solution
                    </button>
                  </div>
                </form>
              </div>

              {/* Products List */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                  Active Digital Solutions ({digitalProducts.length})
                </h4>

                <div className="divide-y divide-slate-100">
                  {digitalProducts.map(p => (
                    <div key={p.id} className="py-3 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900">{p.title}</div>
                        <div className="text-[11px] text-slate-500">
                          {p.category} · {p.format} · {p.isDemo ? 'Demo Template' : 'Live'}
                        </div>
                      </div>
                      <div className="font-mono font-bold text-slate-900">
                        ${p.price} USD
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: SERVICES PRICING MANAGEMENT (Section 23) */}
          {activeTab === 'services' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-5">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Admin Service Management
                </h4>
                <p className="text-xs text-slate-500">
                  Configure "Starting at" USD pricing and estimated scope ranges for all 8 professional services.
                </p>
              </div>

              <div className="divide-y divide-slate-200">
                {services.map(s => (
                  <div key={s.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold text-slate-900">{s.name}</div>
                      <div className="text-xs text-slate-500 max-w-md">{s.description}</div>
                      <div className="text-[11px] text-slate-400">Turnaround: {s.turnaroundTime}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500">Starting Price ($)</label>
                        <input
                          type="number"
                          value={s.startingPrice}
                          onChange={e => updateServicePrice(s.id, Number(e.target.value), s.priceRange)}
                          className="w-24 px-2 py-1 border rounded text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500">Price Range Display</label>
                        <input
                          type="text"
                          value={s.priceRange}
                          onChange={e => updateServicePrice(s.id, s.startingPrice, e.target.value)}
                          className="w-32 px-2 py-1 border rounded text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: BRAND SETTINGS (Section 29) */}
          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-5">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Brand & Contact Settings
                </h4>
                <p className="text-xs text-slate-500">
                  Manage primary brand identity, WhatsApp routing, and contact channels.
                </p>
              </div>

              {brandSaved && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Brand configuration saved successfully!</span>
                </div>
              )}

              <form onSubmit={handleSaveBrand} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Brand Name</label>
                  <input
                    type="text"
                    required
                    value={bName}
                    onChange={e => setBName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Secondary Brand Descriptor</label>
                  <input
                    type="text"
                    required
                    value={bSecondary}
                    onChange={e => setBSecondary(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Contact</label>
                  <input
                    type="text"
                    required
                    value={bWhatsapp}
                    onChange={e => setBWhatsapp(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Support Email</label>
                  <input
                    type="email"
                    required
                    value={bEmail}
                    onChange={e => setBEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Hero Headline</label>
                  <input
                    type="text"
                    required
                    value={bHeadline}
                    onChange={e => setBHeadline(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                  />
                </div>

                <div className="sm:col-span-2 flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 font-mono">
                    Default Currency: USD ($) · Gateways: Paystack / Flutterwave
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold rounded-lg bg-[#111827] hover:bg-[#2563EB] text-white transition-colors cursor-pointer"
                  >
                    Save Settings
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
