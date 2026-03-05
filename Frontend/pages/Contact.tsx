
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Headphones } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Talep Alındı!</h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            E-ticaret uzmanımız başvurunuzu inceleyecek ve en geç 1 iş günü içinde size geri dönüş yapacaktır.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Contact Header */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Size Nasıl <span className="text-blue-600">Yardımcı Olabiliriz?</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Hizmetlerimiz hakkında bilgi almak veya ücretsiz bir demo talep etmek için aşağıdaki formu doldurmanız yeterli.
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info - 4 Columns */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Headphones className="text-blue-600" />
                  Doğrudan Ulaşın
                </h3>
                <div className="space-y-8">
                  <div className="group flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Müşteri Hattı</p>
                      <p className="text-lg font-bold text-slate-900">+90 212 000 00 00</p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Destek Birimi</p>
                      <p className="text-lg font-bold text-slate-900">destek@etic7.com</p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Merkez Ofis</p>
                      <p className="text-lg font-bold text-slate-900">Maslak, Teknopark / İst.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                <p className="text-blue-900 font-bold mb-2">Kurumsal Güven</p>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Verileriniz KVKK kapsamında korunmakta olup, talebiniz haricinde hiçbir üçüncü taraf ile paylaşılmaz.
                </p>
              </div>
            </div>

            {/* Form - 8 Columns */}
            <div className="lg:col-span-8 bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-100 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-10">Demo Talep Formu</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">İsminiz</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" 
                      placeholder="Ad Soyad"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">E-Posta</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" 
                      placeholder="is@sirketiniz.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Firma Adı</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" 
                      placeholder="Şirketinizin Adı"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">İlgi Alanınız</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-600 appearance-none">
                      <option>B2B E-Ticaret</option>
                      <option>B2C Online Mağaza</option>
                      <option>Muhasebe Entegrasyonu</option>
                      <option>Diger</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mesajınız</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" 
                    placeholder="İhtiyaçlarınızdan kısaca bahsedin..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-4 group"
                >
                  Bilgi Almak İstiyorum
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
