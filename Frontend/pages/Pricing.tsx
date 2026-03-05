
import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Building2, Rocket, CreditCard, Sparkles, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-white min-h-screen">
      {/* Pricing Header */}
      <section className="pt-24 pb-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 border border-blue-500/20 rounded-full px-5 py-2 mb-8 animate-fade-in shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm font-black uppercase tracking-widest">En İyi Fiyat Garantisi</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter">Geleceğinize <span className="text-blue-500">Yatırım Yapın</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Paketlerimizi sadece bir maliyet değil, işletmenizin büyüme motoru olarak görün. İhtiyacınız olan paketi seçin ve hemen başlayın.
          </p>

          <div className="inline-flex items-center p-2 bg-slate-800 rounded-[2rem] border border-slate-700 shadow-2xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-10 py-4 rounded-[1.5rem] text-sm font-black transition-all ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Aylık Ödeme
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-10 py-4 rounded-[1.5rem] text-sm font-black transition-all ${billingCycle === 'yearly' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Yıllık <span className="ml-2 text-green-400 font-black italic">(-%20 Kar)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-[3rem] border p-12 flex flex-col transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-4 ${
                  plan.isPopular ? 'border-orange-500 shadow-2xl ring-8 ring-orange-50 scale-105' : 'border-slate-100 shadow-xl'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-4 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 shadow-xl animate-pulse">
                    En Çok Kazandıran Seçim
                  </div>
                )}
                
                <div className="mb-10 text-center md:text-left">
                  <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 mx-auto md:mx-0 ${
                    plan.id === 'starter' ? 'bg-blue-50 text-blue-600' : 
                    plan.id === 'pro' ? 'bg-orange-50 text-orange-600' : 'bg-slate-900 text-white'
                  }`}>
                    {plan.id === 'starter' ? <Rocket className="w-8 h-8" /> : plan.id === 'pro' ? <Zap className="w-8 h-8" /> : <Building2 className="w-8 h-8" />}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3">{plan.name}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-10 text-center md:text-left">
                  <div className="flex items-baseline justify-center md:justify-start">
                    <span className="text-sm font-black text-slate-400 mr-2 uppercase">Sadece</span>
                    <span className="text-6xl font-black text-slate-900 tracking-tighter">
                      {plan.id === 'enterprise' ? '' : '₺'}{billingCycle === 'yearly' && plan.id !== 'enterprise' ? (parseInt(plan.price.replace('.', '')) * 0.8).toLocaleString('tr-TR') : plan.price}
                    </span>
                    {plan.period && <span className="ml-2 text-slate-400 font-bold">/ {billingCycle === 'yearly' ? 'Yıl' : 'Ay'}</span>}
                  </div>
                </div>

                <div className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-slate-700 font-bold group">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[5]" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-6 rounded-[2rem] font-black text-xl transition-all flex items-center justify-center gap-3 group ${
                    plan.isPopular 
                      ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-2xl shadow-orange-200' 
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl'
                  }`}
                >
                  <CreditCard className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  ŞİMDİ SATIN AL
                </button>
                
                <p className="text-center mt-6 text-xs text-slate-400 font-bold flex items-center justify-center gap-2">
                   <ShieldCheck className="w-3 h-3" />
                   GÜVENLİ ÖDEME ALTYAPISI
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
           {[
             { title: "Sıfır Komisyon", desc: "Satışlarınızdan komisyon almayız.", icon: <Sparkles className="text-blue-600" /> },
             { title: "Hızlı Kurulum", desc: "24 saat içinde mağazanız hazır.", icon: <Zap className="text-orange-600" /> },
             { title: "Ücretsiz Göç", desc: "Verilerinizi biz taşıyoruz.", icon: <Rocket className="text-indigo-600" /> },
             { title: "Veri Güvenliği", desc: "ISO 27001 ve KVKK tam uyum.", icon: <ShieldCheck className="text-green-600" /> }
           ].map((badge, i) => (
             <div key={i} className="text-center bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="mb-4 flex justify-center">{badge.icon}</div>
                <h4 className="font-black text-slate-900 mb-2">{badge.title}</h4>
                <p className="text-slate-500 text-sm font-medium">{badge.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
