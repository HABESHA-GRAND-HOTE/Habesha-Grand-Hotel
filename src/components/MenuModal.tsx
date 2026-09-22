import React, { useState } from 'react';
import { X, Utensils, Sparkles } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'starters' | 'mains' | 'desserts' | 'wines'>('starters');

  if (!isOpen) return null;

  const menuItems = {
    starters: [
      { name: 'Beluga Caviar Imperial', desc: 'Warm blinis, crème fraîche, organic egg yolk emulsion, chives', price: '$95' },
      { name: 'Hokkaido Scallop Crudo', desc: 'Compressed yuzu melon, finger lime, white truffle essence', price: '$38' },
      { name: 'Heirloom Foie Gras Terrine', desc: 'Spiced fig jam, brioche toast, aged balsamic glaze', price: '$42' },
      { name: 'Highland Wild Mushroom Velouté', desc: 'Crispy sage, aged parmesan foam, black summer truffle', price: '$28' },
    ],
    mains: [
      { name: 'A5 Miyazaki Wagyu Tenderloin', desc: 'Parsnip mousseline, bone marrow glaze, glazed morels', price: '$135' },
      { name: 'Pan-Seared Chilean Sea Bass', desc: 'Saffron champagne reduction, baby leeks, caviar pearls', price: '$68' },
      { name: 'Roasted Bresse Duck Breast', desc: 'Blood orange reduction, spiced parsnip, confit leg tartlet', price: '$58' },
      { name: 'Truffle & Forest Herb Risotto', desc: 'Acquerello rice, 36-month Parmigiano-Reggiano, fresh herbs', price: '$46' },
    ],
    desserts: [
      { name: 'Grand Cru Dark Chocolate Sphere', desc: 'Hot salted gold caramel drizzle, hazelnut praline gelato', price: '$26' },
      { name: 'Madagascar Vanilla Bean Soufflé', desc: 'Grand Marnier crème anglaise, raspberry coulis', price: '$24' },
      { name: 'Artisan Ethiopian Coffee Tiramisu', desc: 'Single-origin Yirgacheffe espresso, mascarpone mousse', price: '$22' },
    ],
    wines: [
      { name: 'Château Margaux Premier Grand Cru, Bordeaux 2015', desc: 'Silky tannins, blackberry, violet, cedarwood', price: '$480' },
      { name: 'Dom Pérignon Vintage Champagne 2013', desc: 'Crisp minerality, toasted brioche, white flowers', price: '$340' },
      { name: 'Opus One Napa Valley 2018', desc: 'Cassis, dark plum, graphite, velvety finish', price: '$520' },
    ],
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#071521] border border-[#C9A227]/40 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B1F33] p-6 border-b border-[#C9A227]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#071521]">
              <Utensils className="w-5 h-5 text-[#E3C766]" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">L’ÉTOILE GASTRONOMY</h3>
              <p className="text-xs text-[#C9A227] tracking-wider uppercase">Chef's Signature Tasting Menu</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#071521] text-slate-400 hover:text-white flex items-center justify-center border border-slate-700 hover:border-[#C9A227] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#C9A227]/20 bg-[#0B1F33]/50 px-6 pt-4 gap-4 sm:gap-8 overflow-x-auto">
          {(['starters', 'mains', 'desserts', 'wines'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-xs uppercase tracking-[0.2em] font-semibold transition-colors relative cursor-pointer ${
                activeTab === tab ? 'text-[#E3C766]' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>{tab}</span>
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A227]" />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {menuItems[activeTab].map((item, idx) => (
            <div key={idx} className="flex justify-between items-start gap-4 pb-4 border-b border-white/5">
              <div>
                <h4 className="text-base font-serif font-bold text-white mb-1 flex items-center gap-2">
                  <span>{item.name}</span>
                  {idx === 0 && (
                    <span className="text-[10px] uppercase font-sans font-bold bg-[#C9A227]/20 text-[#E3C766] px-2 py-0.5 rounded border border-[#C9A227]/40">
                      Signature
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-base font-serif font-bold text-[#E3C766] shrink-0">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#0B1F33] border-t border-white/10 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Dietary &amp; Halal preferences accommodated upon request • Sommelier on duty</span>
        </div>
      </div>
    </div>
  );
};
