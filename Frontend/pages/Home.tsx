
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShoppingBag, 
  Star, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  CreditCard,
  Target,
  Rocket
} from 'lucide-react';
import { MAIN_FEATURES, TESTIMONIALS, REFERENCE_LOGOS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Persuasive Hero Section */}
      <section className="relative pt-16 pb-32 md:pt-28 md:pb-48">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute top-20 right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2 mb-8 animate-fade-in shadow-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                <span className="text-blue-700 text-xs md:text-sm font-black uppercase tracking-widest">GÜNCELLEME: v2.5 Online Tahsilat Yayında</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                Satışlarınızı <span className="text-blue-600">Patlatacak</span> <br />
                En Güçlü Altyapı
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Etic7 ile sadece bir site değil, <span className="text-slate-900 font-bold italic underline decoration-blue-500 underline-offset-4">satış makinesi</span> kurun. B2B ve B2C hibrit çözümlerimizle rakiplerinizin hayal bile edemeyeceği bir hıza kavuşun.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/fiyatlandirma"
                  className="w-full sm:w-auto px-10 py-5 bg-orange-600 text-white rounded-2xl font-black text-xl hover:bg-orange-700 transition-all shadow-2xl shadow-orange-200 flex items-center justify-center gap-3 group ring-4 ring-orange-50"
                >
                  <CreditCard className="w-6 h-6" />
                  ŞİMDİ SATIN AL
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  to="/iletisim"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-slate-800 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-100"
                >
                  Ücretsiz Demo Randevusu
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                   <ShieldCheck className="w-5 h-5 text-green-600" />
                   <span className="text-sm font-bold text-slate-600">Güvenli Altyapı</span>
                </div>
                <div className="flex items-center gap-2">
                   <Target className="w-5 h-5 text-blue-600" />
                   <span className="text-sm font-bold text-slate-600">%99 Dönüşüm Odağı</span>
                </div>
                <div className="flex items-center gap-2">
                   <Users className="w-5 h-5 text-indigo-600" />
                   <span className="text-sm font-bold text-slate-600">500+ Aktif Mağaza</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 relative hidden lg:block">
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full blur-[100px] opacity-10 animate-pulse"></div>
              <div className="relative z-10 bg-white p-6 rounded-[3rem] shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="E-Commerce Interface"
                  className="rounded-[2.5rem] shadow-inner"
                />
                {/* Floating Card UI */}
                <div className="absolute -bottom-10 -left-10 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 animate-bounce-slow">
                   <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-2xl">
                         <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">GÜNLÜK SATIŞ</p>
                        <p className="text-xl font-black text-slate-900">+₺42.500</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section - "Trust the numbers" */}
      <section className="py-20 border-y border-slate-50 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">8m+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Sipariş Tamamlandı</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2 tracking-tighter">1.2ms</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Sayfa Açılış Hızı</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">24/7</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Aktif Destek Ekibi</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-orange-600 mb-2 tracking-tighter">5X</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Daha Fazla Dönüşüm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - "Why Etic7 is better" */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Diğerleriyle Zaman <span className="text-red-500 line-through">Kaybetmeyin</span></h2>
            <p className="text-xl text-slate-500">Etic7, sıradan yazılımların aksine <span className="font-bold text-slate-900">B2B, B2C ve Muhasebeyi</span> tek bir beyin olarak yönetir.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
               <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                 <Rocket className="text-blue-600" />
                 Etic7 Avantajları
               </h3>
               <div className="space-y-6">
                 {[
                   'Pazaryeri stoklarını saniyesinde günceller.',
                   'Muhasebe programıyla (Logo, Mikro vb.) tam konuşur.',
                   'Bayilerinize özel kapalı devre fiyatlandırma sunar.',
                   'Tek tıkla global kargo ve vergi hesaplar.',
                   'Sürekli güncellenen, yaşlanmayan bir altyapı.'
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                         <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-800">{text}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                 alt="Business Growth" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
               <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-white text-3xl font-black mb-4">Siz Sadece Ürününüze Odaklanın</p>
                  <p className="text-slate-200 font-medium">Teknik tüm detayları biz hallediyoruz. Altyapınız hiç çökmeyecek, hızınız hiç azalmayacak.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pills - Keywords Focused */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Her Şey Dahil Altyapı</h2>
            <p className="text-slate-500 font-bold">Gizli ücret yok, sınırlama yok.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "B2B E-Ticaret", "B2C Yazılımı", "E-Ticaret Altyapısı", "Online Satış Sistemi", 
              "Katalog Yazılımı", "Dijital Mağaza", "Çoklu Dil", "Muhasebe Entegrasyonu",
              "Online Sipariş", "Online Tahsilat", "Entegre Çözüm", "ERP Bağlantısı"
            ].map((pill, i) => (
              <div key={i} className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-black text-slate-700 hover:border-blue-500 hover:text-blue-600 cursor-default transition-all shadow-sm">
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Logos Slider Effect */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-12">GÜVENEN MARKALAR</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {REFERENCE_LOGOS.map((logo, i) => (
              <img key={i} src={logo} alt="Client" className="h-8 md:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Psychology "Others did it" */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Müşterilerimizden <span className="text-blue-500">Dinleyin</span></h2>
            <div className="flex justify-center gap-1 text-yellow-400">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                <p className="text-xl md:text-2xl italic leading-relaxed text-slate-300 mb-10 group-hover:text-white transition-colors">
                   "{test.content}"
                </p>
                <div className="flex items-center gap-5">
                   <img src={test.avatar} alt={test.name} className="w-16 h-16 rounded-2xl border-2 border-blue-500" />
                   <div>
                      <p className="text-lg font-black">{test.name}</p>
                      <p className="text-sm text-blue-400 font-bold uppercase tracking-wider">{test.role}, {test.company}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Aggressive CTA */}
      <section className="py-32 relative text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-black mb-8">
            HEMEN BAŞLA, 24 SAATTE SATIŞA GEÇ
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
             Kaybedecek <br /> <span className="text-blue-600 underline decoration-blue-100 underline-offset-8 italic">Bir Saniyeniz Bile Yok.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto">
             Dijital dünyada hız her şeydir. Bugün harekete geçin, profesyonel e-ticaret sitenizi yarına hazırlayalım.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <Link 
               to="/fiyatlandirma" 
               className="w-full sm:w-auto px-12 py-6 bg-orange-600 text-white rounded-[2rem] font-black text-2xl hover:bg-orange-700 transition-all shadow-2xl shadow-orange-200 animate-pulse hover:animate-none group"
             >
                HEMEN SATIN AL
                <CreditCard className="inline-block ml-3 group-hover:scale-125 transition-transform" />
             </Link>
             <Link 
               to="/iletisim" 
               className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-2xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200"
             >
                DEMO İSTEYİN
             </Link>
          </div>
          <p className="mt-8 text-slate-400 font-bold text-sm">
            ✓ Kredi kartına 12 taksit imkanı &nbsp; | &nbsp; ✓ 14 gün iade garantisi
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
