
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, CreditCard, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Özellikler', path: '/ozellikler' },
    { name: 'Fiyatlandırma', path: '/fiyatlandirma' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner - Urgency Trigger */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white text-center py-2 text-xs font-bold uppercase tracking-widest hidden md:block">
        <Sparkles className="inline-block w-3 h-3 mr-2 mb-0.5" />
        Sınırlı Süre: İlk Yıl Kurulum Ücretsiz! Hemen Satın Alın, Bugün Yayına Girin.
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Etic7
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-all hover:text-blue-600 ${
                    isActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                <Link
                  to="/iletisim"
                  className="text-slate-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all"
                >
                  Demo İsteyin
                </Link>
                <Link
                  to="/fiyatlandirma"
                  className="bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 flex items-center gap-2 group"
                >
                  <CreditCard className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  SATIN AL
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                to="/iletisim"
                onClick={() => setIsMenuOpen(false)}
                className="text-center py-3 rounded-xl text-sm font-bold bg-slate-50 text-slate-700"
              >
                Demo İsteyin
              </Link>
              <Link
                to="/fiyatlandirma"
                onClick={() => setIsMenuOpen(false)}
                className="text-center py-3 rounded-xl text-sm font-black bg-orange-600 text-white shadow-lg shadow-orange-100"
              >
                SATIN AL
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Persuasive Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
              <Link to="/" className="flex items-center space-x-2 mb-8">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white tracking-tight">Etic7</span>
              </Link>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Guzel Teknoloji tarafından geliştirilen, Türkiye'nin en esnek B2B ve B2C e-ticaret altyapısı. İşinizi büyütmek için buradayız.
              </p>
              <div className="flex space-x-5">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Çözümler</h3>
              <ul className="space-y-4 font-medium">
                <li><Link to="/ozellikler" className="hover:text-blue-400 transition-colors">B2C Yazılımı</Link></li>
                <li><Link to="/ozellikler" className="hover:text-blue-400 transition-colors">B2B Altyapısı</Link></li>
                <li><Link to="/ozellikler" className="hover:text-blue-400 transition-colors">Pazaryeri Entegrasyonu</Link></li>
                <li><Link to="/ozellikler" className="hover:text-blue-400 transition-colors">Online Tahsilat</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Kurumsal</h3>
              <ul className="space-y-4 font-medium">
                <li><Link to="/hakkimizda" className="hover:text-blue-400 transition-colors">Hikayemiz</Link></li>
                <li><Link to="/hakkimizda" className="hover:text-blue-400 transition-colors">Misyon & Vizyon</Link></li>
                <li><Link to="/iletisim" className="hover:text-blue-400 transition-colors">Destek Merkezi</Link></li>
                <li><Link to="/iletisim" className="hover:text-blue-400 transition-colors">İletişim</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50">
                <h3 className="text-white font-bold mb-4">Haber Bülteni</h3>
                <p className="text-slate-400 text-sm mb-6">E-ticaret dünyasındaki ipuçlarını ve güncellemeleri kaçırmayın.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="E-posta" className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm flex-grow focus:outline-none focus:border-blue-500" />
                  <button className="bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm">Katıl</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-800/50 flex flex-col md:row justify-between items-center gap-6">
            <div className="text-sm text-slate-500 font-medium italic">
              "Türkiye'nin dijital dönüşüm ortağı."
            </div>
            <p className="text-slate-500 text-xs">© 2026 Etic7 by Guzel Teknoloji. Tüm hakları saklıdır. KVKK & Gizlilik.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
