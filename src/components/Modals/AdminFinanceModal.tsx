import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  DollarSign, 
  TrendingUp, 
  Building2, 
  ArrowDownToLine, 
  PlusCircle, 
  FileCode, 
  Wrench, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Plus,
  Trash2,
  Edit2,
  Lock,
  Calendar,
  Send
} from 'lucide-react';
import { ServiceItem, DigitalProduct, BankAccount } from '../../types';

export const AdminFinanceModal: React.FC = () => {
  const { 
    closeModal, 
    financeSummary, 
    bankAccounts, 
    addBankAccount, 
    withdrawals, 
    requestWithdrawal,
    digitalProducts,
    services,
    updateService,
    updateDigitalProduct,
    addDigitalProduct,
    deleteDigitalProduct,
    paymentRequests,
    createPaymentRequest
  } = useApp();

  const [activeTab, setActiveTab] = useState<'finance' | 'payout' | 'products' | 'services' | 'requests'>('finance');

  // Withdrawal form state
  const [withdrawAmount, setWithdrawAmount] = useState<number>(500);
  const [selectedBankId, setSelectedBankId] = useState<string>(
    bankAccounts.length > 0 ? bankAccounts[0].id : ''
  );
  const [wdNotice, setWdNotice] = useState<string | null>(null);

  // Bank form state
  const [showAddBank, setShowAddBank] = useState(false);
  const [bankCountry, setBankCountry] = useState('Nigeria');
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  // Payment Request creator state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [reqService, setReqService] = useState('Website Redesign');
  const [reqDesc, setReqDesc] = useState('Complete website redesign based on approved scope.');
  const [reqAmount, setReqAmount] = useState<number>(1200);
  const [reqDueDate, setReqDueDate] = useState('2026-10-30');
  const [reqNotes, setReqNotes] = useState('');
  const [reqCreatedNotice, setReqCreatedNotice] = useState(false);

  // Digital product editor state
  const [editingProduct, setEditingProduct] = useState<DigitalProduct | null>(null);

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBankId || withdrawAmount <= 0) return;

    const res = await requestWithdrawal(withdrawAmount, selectedBankId);
    setWdNotice(res.message);
    setTimeout(() => setWdNotice(null), 4000);
  };

  const handleAddBank = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bankName || !accountName || !accountNumber) return;

    // Mask sensitive digits
    const masked = accountNumber.length > 4 
      ? `******${accountNumber.slice(-4)}`
      : '******';

    addBankAccount({
      country: bankCountry,
      bankName,
      accountName,
      accountNumberMasked: masked,
      isDefault: bankAccounts.length === 0
    });

    setShowAddBank(false);
    setBankName('');
    setAccountName('');
    setAccountNumber('');
  };

  const handleCreatePaymentRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !reqAmount) return;

    createPaymentRequest({
      clientName,
      email: clientEmail,
      service: reqService,
      projectDescription: reqDesc,
      amount: reqAmount,
      dueDate: reqDueDate,
      notes: reqNotes
    });

    setReqCreatedNotice(true);
    setTimeout(() => setReqCreatedNotice(false), 3000);
    setClientName('');
    setClientEmail('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                ANDEOLA Administrator Portal
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                Finance Dashboard • Payouts • Digital Solutions & Service Management
              </span>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 bg-[#F8FAFC] border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('finance')}
            className={`py-3.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'finance'
                ? 'border-blue-600 text-blue-700 font-black'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Finance Dashboard
          </button>

          <button
            onClick={() => setActiveTab('payout')}
            className={`py-3.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'payout'
                ? 'border-purple-600 text-purple-700 font-black'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Payout & Withdrawals
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`py-3.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'products'
                ? 'border-purple-600 text-purple-700 font-black'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Digital Solutions ({digitalProducts.length})
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`py-3.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'services'
                ? 'border-blue-600 text-blue-700 font-black'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Services ({services.length})
          </button>

          <button
            onClick={() => setActiveTab('requests')}
            className={`py-3.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'requests'
                ? 'border-blue-600 text-blue-700 font-black'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Payment Requests ({paymentRequests.length})
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* TAB 1: FINANCE DASHBOARD */}
          {activeTab === 'finance' && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Revenue & Liquidity Metrics (USD)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Live settlement ledger from Paystack, Flutterwave, and verified client invoices.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  ● Gateway Connected
                </span>
              </div>

              {/* 7 Key Financial Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-2xl bg-[#0F172A] text-white space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Total Revenue</span>
                  <div className="text-2xl font-black font-mono">${financeSummary.totalRevenue}</div>
                  <span className="text-[10px] text-emerald-400">Settled & Confirmed</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700">Digital Solutions</span>
                  <div className="text-2xl font-black font-mono text-[#0F172A]">${financeSummary.digitalSolutionRevenue}</div>
                  <span className="text-[10px] text-slate-500">Self-service downloads</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700">Service Revenue</span>
                  <div className="text-2xl font-black font-mono text-[#0F172A]">${financeSummary.serviceRevenue}</div>
                  <span className="text-[10px] text-slate-500">Client project invoices</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700">Pending Invoices</span>
                  <div className="text-2xl font-black font-mono text-amber-600">${financeSummary.pendingPayments}</div>
                  <span className="text-[10px] text-slate-500">Awaiting client payment</span>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800">Settled Balance</span>
                  <div className="text-2xl font-black font-mono text-emerald-900">${financeSummary.settledBalance}</div>
                  <span className="text-[10px] text-emerald-700">Ready in payment provider</span>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-800">Available to Withdraw</span>
                  <div className="text-2xl font-black font-mono text-blue-900">${financeSummary.availableBalance}</div>
                  <span className="text-[10px] text-blue-700">Net after withdrawals</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1 col-span-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Total Withdrawn</span>
                  <div className="text-2xl font-black font-mono text-slate-700">${financeSummary.withdrawnAmount}</div>
                  <span className="text-[10px] text-slate-400">Transferred to linked bank accounts</span>
                </div>

              </div>

              {/* Recent Payment Requests / Milestones */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Active Client Payment Invoices
                  </span>
                  <button
                    onClick={() => setActiveTab('requests')}
                    className="text-xs text-blue-600 font-bold hover:underline"
                  >
                    + Create New Payment Request
                  </button>
                </div>

                <div className="space-y-2">
                  {paymentRequests.map(req => (
                    <div
                      key={req.id}
                      className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <strong className="text-[#0F172A]">{req.clientName}</strong>
                          <span className="text-slate-400">({req.email})</span>
                        </div>
                        <div className="text-slate-600 text-[11px] mt-0.5">{req.service}</div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-sm text-[#0F172A]">${req.amount} USD</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${
                          req.status === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {req.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PAYOUT & WITHDRAWALS */}
          {activeTab === 'payout' && (
            <div className="space-y-6">
              
              {wdNotice && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{wdNotice}</span>
                </div>
              )}

              {/* Withdraw Funds Form */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ArrowDownToLine className="w-5 h-5 text-blue-600" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                      Withdraw Funds
                    </h4>
                  </div>
                  <div className="text-xs font-mono">
                    Available: <strong className="text-emerald-600 text-sm">${financeSummary.availableBalance} USD</strong>
                  </div>
                </div>

                <form onSubmit={handleWithdraw} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Amount to Withdraw ($ USD) *
                      </label>
                      <input
                        type="number"
                        required
                        min={50}
                        max={financeSummary.availableBalance}
                        value={withdrawAmount}
                        onChange={e => setWithdrawAmount(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono font-bold bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Destination Bank Account *
                      </label>
                      <select
                        value={selectedBankId}
                        onChange={e => setSelectedBankId(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
                      >
                        {bankAccounts.map(b => (
                          <option key={b.id} value={b.id}>
                            {b.bankName} - {b.accountNumberMasked} ({b.accountName})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={financeSummary.availableBalance <= 0 || withdrawAmount > financeSummary.availableBalance}
                    className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request Withdrawal
                  </button>

                  <span className="block text-[11px] text-slate-400">
                    ℹ️ Only settled funds can be withdrawn. Transfers are executed via payment provider transfer API within 24 hours.
                  </span>
                </form>
              </div>

              {/* Linked Bank Accounts */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                      Linked Payout Accounts
                    </h4>
                    <p className="text-xs text-slate-500">
                      Sensitive bank account numbers are masked for security.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAddBank(!showAddBank)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Bank Account</span>
                  </button>
                </div>

                {showAddBank && (
                  <form onSubmit={handleAddBank} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-fade-in">
                    <span className="text-xs font-bold uppercase text-slate-700 block">
                      New Payout Bank Setup
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Country</label>
                        <input
                          type="text"
                          required
                          value={bankCountry}
                          onChange={e => setBankCountry(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Bank Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Access Bank, Zenith Bank, Chase"
                          value={bankName}
                          onChange={e => setBankName(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Account Holder Name</label>
                        <input
                          type="text"
                          required
                          placeholder="ANDEOLA ECO RANKING"
                          value={accountName}
                          onChange={e => setAccountName(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Account Number (will be masked)</label>
                        <input
                          type="text"
                          required
                          placeholder="0123456789"
                          value={accountNumber}
                          onChange={e => setAccountNumber(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold"
                      >
                        Save Payout Account
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAddBank(false)}
                        className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                <div className="space-y-2">
                  {bankAccounts.map(b => (
                    <div
                      key={b.id}
                      className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-slate-600" />
                        <div>
                          <strong className="text-xs text-[#0F172A] block">{b.bankName}</strong>
                          <span className="text-[11px] font-mono text-slate-500">
                            {b.accountNumberMasked} • {b.accountName}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                        Active Payout
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Past Withdrawals Ledger */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Withdrawal History
                </span>
                <div className="space-y-2">
                  {withdrawals.map(w => (
                    <div
                      key={w.id}
                      className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-mono text-slate-400 text-[10px]">{w.reference}</div>
                        <div className="font-bold text-[#0F172A]">{w.bankDetails}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-sm text-[#0F172A]">${w.amount} USD</div>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase">{w.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: DIGITAL SOLUTIONS MANAGEMENT */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Digital Solutions Catalog
                  </h4>
                  <p className="text-xs text-slate-500">
                    Edit prices, problem statements, and view sales counters.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                  {digitalProducts.length} Active Solutions
                </span>
              </div>

              <div className="space-y-3">
                {digitalProducts.map(p => (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                          {p.category}
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">
                          Sales: {p.salesCount}
                        </span>
                      </div>
                      <h5 className="font-bold text-[#0F172A] text-sm truncate">{p.name}</h5>
                      <p className="text-slate-500 text-[11px] truncate">Problem: {p.problem}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono font-black text-base text-[#0F172A]">
                        ${p.price} USD
                      </span>
                      <button
                        onClick={() => {
                          const newPrice = prompt(`Update price for "${p.name}" ($ USD):`, p.price.toString());
                          if (newPrice && !isNaN(Number(newPrice))) {
                            updateDigitalProduct({ ...p, price: Number(newPrice) });
                          }
                        }}
                        className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 cursor-pointer"
                        title="Edit Price"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SERVICES MANAGEMENT */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-[#0F172A]">
                  Professional Services Offerings
                </h4>
                <p className="text-xs text-slate-500">
                  Manage service starting rates and typical scopes.
                </p>
              </div>

              <div className="space-y-3">
                {services.map(s => (
                  <div
                    key={s.id}
                    className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-0.5">
                      <h5 className="font-bold text-sm text-[#0F172A]">{s.name}</h5>
                      <p className="text-slate-600 text-[11px]">{s.description}</p>
                      <div className="font-mono text-[10px] text-blue-700">
                        {s.priceDisplay} • Typical range: {s.priceRange} • {s.turnaroundTime}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const newPrice = prompt(`Update starting price for "${s.name}" ($ USD):`, s.startingPrice.toString());
                        if (newPrice && !isNaN(Number(newPrice))) {
                          updateService({
                            ...s,
                            startingPrice: Number(newPrice),
                            priceDisplay: `Starting at $${newPrice}`
                          });
                        }
                      }}
                      className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 shrink-0 cursor-pointer"
                      title="Edit Starting Price"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CREATE PAYMENT REQUESTS */}
          {activeTab === 'requests' && (
            <div className="space-y-6">
              
              {reqCreatedNotice && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Payment Request issued successfully. Ready for client payment.</span>
                </div>
              )}

              <form onSubmit={handleCreatePaymentRequest} className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                    Create Custom Payment Request for Services
                  </h4>
                  <p className="text-xs text-slate-500">
                    Generate an approved milestone scope invoice for a client to pay securely.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Client Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Rachel Adams"
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Client Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="rachel@company.com"
                      value={clientEmail}
                      onChange={e => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Type *</label>
                    <select
                      value={reqService}
                      onChange={e => setReqService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white font-semibold"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Custom Architecture">Custom Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Milestone Amount ($ USD) *</label>
                    <input
                      type="number"
                      required
                      min={50}
                      value={reqAmount}
                      onChange={e => setReqAmount(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono font-bold bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Approved Project Description *</label>
                  <textarea
                    rows={2}
                    required
                    value={reqDesc}
                    onChange={e => setReqDesc(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Milestone Due Date *</label>
                  <input
                    type="date"
                    required
                    value={reqDueDate}
                    onChange={e => setReqDueDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Generate Payment Request
                </button>
              </form>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
