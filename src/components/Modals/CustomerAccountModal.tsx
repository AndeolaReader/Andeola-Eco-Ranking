import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  ShoppingBag, 
  Download, 
  FileText, 
  CheckCircle2, 
  Lock, 
  Calendar, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export const CustomerAccountModal: React.FC = () => {
  const { closeModal, orders, triggerDownload, openCheckout } = useApp();

  // Extract all purchased items across orders
  const allPurchases = orders.flatMap(order =>
    order.items.map(item => ({
      ...item,
      orderNumber: order.orderNumber,
      orderId: order.id,
      paidAt: order.paidAt,
      status: order.status,
      gateway: order.paymentGateway,
      downloadToken: order.downloadToken
    }))
  );

  const handleDownload = (productName: string, format: string) => {
    triggerDownload(productName, format);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Customer Account & Downloads
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                My Purchases • Authenticated License Vault
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

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h4 className="text-base font-bold text-[#0F172A]">
                My Purchased Solutions
              </h4>
              <p className="text-xs text-slate-500">
                All digital guides, checklists, and documentation tied to your orders.
              </p>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
              {allPurchases.length} File{allPurchases.length !== 1 ? 's' : ''} Licensed
            </span>
          </div>

          {allPurchases.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <FileText className="w-12 h-12 text-slate-300 mx-auto" />
              <h5 className="text-sm font-bold text-slate-700">No purchases found</h5>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Once you purchase any digital solution, your temporary signed download links will be archived here.
              </p>
              <button
                onClick={closeModal}
                className="mt-2 px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold"
              >
                Explore Digital Solutions
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {allPurchases.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-purple-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Verified {item.status}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Ref: {item.orderNumber}
                      </span>
                    </div>

                    <h5 className="text-sm font-bold text-[#0F172A] truncate">
                      {item.productName}
                    </h5>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                      <span>Format: {item.format}</span>
                      <span>•</span>
                      <span>Paid: ${item.price} USD ({item.gateway.toUpperCase()})</span>
                      <span>•</span>
                      <span>{new Date(item.paidAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(item.productName, item.format)}
                    className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-sm cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Download Security Statement */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex items-start gap-3">
            <Lock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">Protected Digital Vault:</strong>
              <span>
                Direct file paths are never exposed publicly. Downloads use authenticated client tokens and signed single-seat licenses.
              </span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8FAFC] border-t border-slate-200 text-center">
          <button
            onClick={closeModal}
            className="px-6 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Close Vault
          </button>
        </div>

      </div>
    </div>
  );
};
