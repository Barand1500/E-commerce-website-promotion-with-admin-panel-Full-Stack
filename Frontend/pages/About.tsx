
import React from 'react';
import { Target, Eye, Shield, Users, Award, TrendingUp, Heart } from 'lucide-react';
import { REFERENCE_LOGOS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Minimal Hero */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block p-1 bg-blue-50 text-blue-600 rounded-xl mb-6">
            <div className="px-4 py-1 text-xs font-bold uppercase tracking-widest">Guzel Teknoloji Güvencesiyle</div>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            E-Ticaretin Geleceğini <br /> <span className="text-blue-600">Birlikte Yazıyoruz</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Biz bir yazılım şirketinden fazlasıyız; biz sizin dijitaldeki büyüme ortağınızız. Binlerce işletmenin dijital mağaza, B2B sipariş ve online tahsilat sistemlerini tek bir çatı altında topladık.
          </p>
        </div>
      </section>

      {/* Reference Logos - Yeni Eklendi */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">GÜVEN VEREN MARKALAR</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {REFERENCE_LOGOS.map((logo, i) => (
              <img key={i} src={logo} alt="Ref Logo" className="h-8 md:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-blue-600 rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-6 transition-all"></div>
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                 className="relative rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                 alt="Our Team" 
               />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Neden Biz?</h2>
              <div className="space-y-10">
                {[
                  { title: "B2B & B2C Uzmanlığı", desc: "Sektördeki 10+ yıllık tecrübemizle her iki dünyanın ihtiyaçlarını da çok iyi biliyoruz.", icon: <Award /> },
                  { title: "Müşteri Memnuniyeti", desc: "Müşterilerimizin başarısı bizim başarımızdır. %98 memnuniyet oranıyla çalışıyoruz.", icon: <Heart /> },
                  { title: "Sürekli İnovasyon", desc: "Pazarın değişen dinamiklerine göre altyapımızı her ay güncelliyoruz.", icon: <TrendingUp /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Daha Modern Görünüm */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-1 bg-blue-500 mb-8"></div>
              <h3 className="text-4xl font-bold mb-8 tracking-tight">Misyonumuz</h3>
              <p className="text-slate-400 text-xl leading-relaxed">
                Her ölçekten firmanın, teknik karmaşıklığa takılmadan, kendi markasıyla profesyonel e-ticaret yapmasını sağlamak. Karmaşık ERP ve muhasebe süreçlerini e-ticaretle birleştirerek dijital verimliliği artırmak.
              </p>
            </div>
            <div>
              <div className="w-12 h-1 bg-indigo-500 mb-8"></div>
              <h3 className="text-4xl font-bold mb-8 tracking-tight">Vizyonumuz</h3>
              <p className="text-slate-400 text-xl leading-relaxed">
                Türkiye'nin en esnek ve en güçlü yerli e-ticaret altyapısı olarak global pazarlarda Türk markalarının rekabet gücünü artıran ana teknoloji sağlayıcısı olmak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
