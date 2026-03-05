
import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Smartphone, 
  Layers 
} from 'lucide-react';
import { MAIN_FEATURES, ALL_FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header - Daha Temiz ve Modern */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Karmaşayı Bırakın, <span className="text-blue-600">Satışa Odaklanın</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Teknik detaylarla uğraşmanıza gerek yok. E-ticaret altyapınızdaki her şey, işletmenizi büyütmek için önceden hazırlandı.
          </p>
        </div>
      </section>

      {/* Hero Features - Kartlar daha belirgin */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MAIN_FEATURES.map((feature) => (
              <div key={feature.id} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Based Features - Daha Düzenli */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Entegre E-Ticaret Çözümü</h2>
            <p className="text-slate-500 mt-4">İşinizi kolaylaştıracak tüm modüller tek panelde.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {ALL_FEATURES.map((cat, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                  {cat.category}
                </h3>
                <div className="space-y-8">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase - Muhasebe Entegrasyonu Odaklı */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold mb-6">
                TAM ENTEGRASYON
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Muhasebe Programları ile <br /> <span className="text-blue-600">Kusursuz İletişim</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Muhasebe ve stok yönetim süreçlerinizi manuel yapmaktan kurtulun. Online Sipariş Yazılımımız tüm muhasebe programları ile çift yönlü konuşur.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Stok Senkronizasyonu', 'E-Fatura Otomasyonu', 'Cari Hesap Yönetimi', 'B2B Tahsilat'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[3rem] blur-2xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" 
                 className="relative rounded-[2rem] shadow-2xl border border-slate-100" 
                 alt="ERP Integration" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Hemen Keşfetmeye Başlayın</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl">
              Demo İçin Randevu Alın
            </button>
            <button className="px-10 py-5 bg-blue-500 text-white border border-blue-400 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all">
              Bize Soru Sorun
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
