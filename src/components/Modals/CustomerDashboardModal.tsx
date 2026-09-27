import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Order } from '../../types';
import { Logo } from '../Logo';
import { 
  X, 
  ShoppingBag, 
  Download, 
  FileText, 
  CheckCircle2, 
  Lock, 
  Clock, 
  Printer, 
  ArrowLeft,
  ExternalLink
} from 'lucide-react';

export const CustomerDashboardModal: React.FC = () => {
  const { orders, closeModal, digitalProducts, getDownloadContent } = useApp();
  const [selectedInvoice, setSelectedInvoice] = useState<Order | null>(null);
  const [downloadSuccessMsg, setDownloadSuccessMsg] = useState<string | null>(null);

  const customerOrders = orders.filter(o => o.status === 'paid');

  const handleDownload = (order: Order) => {
    if (!order.downloadToken) return;

    const data = getDownloadContent(order.downloadToken);
    if (!data) return;

    const element = document.createElement('a');
    const file = new Blob([data.content], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = data.filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setDownloadSuccessMsg(`Download token verified! File saved: ${data.filename}`);
    setTimeout(() => setDownloadSuccessMsg(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-5 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Customer Portal: My Purchases & Downloads
              </h3>
              <p className="text-[11px] text-slate-400">
                Protected storage & signed temporary download access
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F8FAFC]">
          
          {downloadSuccessMsg && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{downloadSuccessMsg}</span>
            </div>
          )}

          {/* If viewing a single invoice */}
          {selectedInvoice ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <button
                  onClick={() => setSelectedInvoice(null)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to My Purchases</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
              </div>

              {/* Invoice Layout */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <Logo variant="compact" theme="dark" size="md" showSubtitle={true} />
                    <p className="text-[11px] text-slate-500 mt-2">
                      ANDEOLA DIGITAL SOLUTIONS<br />
                      Engineering & Technical Troubleshooting<br />
                      webhubtech299@gmail.com
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase rounded bg-emerald-100 text-emerald-800 font-mono">
                      PAID INVOICE
                    </span>
                    <h4 className="text-lg font-mono font-bold text-slate-900 mt-1">
                      {selectedInvoice.invoiceNumber}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Date: {new Date(selectedInvoice.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 font-semibold">Billed To:</span>
                    <div className="font-bold text-slate-900 mt-0.5">{selectedInvoice.customerName}</div>
                    <div className="text-slate-600">{selectedInvoice.customerEmail}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold">Payment Details:</span>
                    <div className="font-mono text-slate-900 mt-0.5 uppercase">
                      Gateway: {selectedInvoice.gateway}
                    </div>
                    <div className="text-slate-600 font-mono text-[11px]">
                      Ref: {selectedInvoice.reference}
                    </div>
                  </div>
                </div>

                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider">
                      <th className="py-2.5">Item Description</th>
                      <th className="py-2.5 text-center">Type</th>
                      <th className="py-2.5 text-right">Amount (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr>
                      <td className="py-3 font-semibold">{selectedInvoice.itemTitle}</td>
                      <td className="py-3 text-center text-slate-500 capitalize">{selectedInvoice.itemType.replace('_', ' ')}</td>
                      <td className="py-3 text-right font-mono font-bold">${selectedInvoice.amount}.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-slate-200 text-slate-900 font-bold">
                      <td colSpan={2} className="py-3 text-right">Total Settled:</td>
                      <td className="py-3 text-right font-mono text-base text-blue-600">
                        ${selectedInvoice.amount}.00 USD
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <div className="p-3.5 rounded-lg bg-slate-50 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Protected Signed Token: <code className="text-slate-700">{selectedInvoice.downloadToken || 'N/A'}</code></span>
                  <span className="text-emerald-600 font-semibold">Direct Download Active</span>
                </div>
              </div>
            </div>
          ) : (
            /* Purchase List */
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Purchased Digital Solutions ({customerOrders.length})
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  Currency: USD ($)
                </span>
              </div>

              {customerOrders.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
                  <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-800">No purchases found yet</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Once you purchase a digital solution guide or settle a service payment request, your files and receipts appear here.
                  </p>
                </div>
              ) : (
                customerOrders.map(order => (
                  <div
                    key={order.id}
                    className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {order.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-slate-400">
                          Purchased on {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-slate-900">
                        {order.itemTitle}
                      </h5>

                      <div className="text-xs text-slate-500 flex items-center gap-2">
                        <span className="font-mono text-slate-600">{order.invoiceNumber}</span>
                        <span>·</span>
                        <span className="capitalize">{order.gateway}</span>
                        <span>·</span>
                        <span className="font-bold text-slate-800">${order.amount} USD</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setSelectedInvoice(order)}
                        className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Invoice</span>
                      </button>

                      {order.downloadToken && (
                        <button
                          onClick={() => handleDownload(order)}
                          className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
