import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDil } from '../contexts/DilContext';

interface DuzenProps {
  children: React.ReactNode;
}

const Duzen: React.FC<DuzenProps> = ({ children }) => {
  const [menuAcik, setMenuAcik] = useState(false);
  const konum = useLocation();
  const { dil, dilDegistir, t } = useDil();

  const linkler = [
    { isim: t('baslik.anasayfa'), yol: '/' },
    { isim: t('baslik.ozellikler'), yol: '/ozellikler' },
    { isim: t('baslik.fiyatlandirma'), yol: '/fiyatlandirma' },
    { isim: t('baslik.hakkimizda'), yol: '/hakkimizda' },
    { isim: t('baslik.iletisim'), yol: '/iletisim' },
  ];

  const aktifMi = (yol: string) => konum.pathname === yol;

  return (
    <div className="flex flex-col min-h-screen bg-beyaz">
      {/* Üst Bilgi Çubuğu */}
      <div className="bg-gri-100 text-gri-700 text-center py-2 text-sm border-b border-gri-200">
        <p className="font-sans">{t('anasayfa.sloganUst')}</p>
      </div>

      {/* Navigasyon */}
      <nav className="sticky top-0 z-50 bg-beyaz border-b border-gri-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-baslik font-medium tracking-tight text-siyah">
                etic<span className="font-vurgu font-bold">7</span>
              </span>
            </Link>

            {/* Desktop Menü */}
            <div className="hidden md:flex items-center space-x-8">
              {linkler.map((link) => (
                <Link
                  key={link.yol}
                  to={link.yol}
                  className={`text-sm font-sans gecis-yumu ${
                    aktifMi(link.yol) 
                      ? 'text-siyah font-medium border-b-2 border-siyah pb-0.5' 
                      : 'text-gri-600 hover:text-siyah font-normal'
                  }`}
                >
                  {link.isim}
                </Link>
              ))}
            </div>

            {/* Dil Değiştirici & Mobil Menü */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => dilDegistir(dil === 'tr' ? 'en' : 'tr')}
                className="text-sm font-vurgu font-semibold text-gri-700 hover:text-siyah gecis-yumu uppercase tracking-wider"
              >
                {dil === 'tr' ? 'EN' : 'TR'}
              </button>
              
              {/* Mobil Menü Butonu */}
              <button
                onClick={() => setMenuAcik(!menuAcik)}
                className="md:hidden text-gri-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuAcik ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobil Menü */}
          {menuAcik && (
            <div className="md:hidden border-t border-gri-200 py-4">
              {linkler.map((link) => (
                <Link
                  key={link.yol}
                  to={link.yol}
                  onClick={() => setMenuAcik(false)}
                  className={`block py-3 text-sm font-sans gecis-yumu ${
                    aktifMi(link.yol) ? 'text-siyah font-medium' : 'text-gri-600 font-normal'
                  }`}
                >
                  {link.isim}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Ana İçerik */}
      <main className="flex-1">
        {children}
      </main>

      {/* Alt Bilgi */}
      <footer className="bg-gri-100 border-t border-gri-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Bilgi */}
            <div>
              <h3 className="text-lg font-baslik text-siyah mb-4">Etic7</h3>
              <p className="text-sm text-gri-600 leading-relaxed font-sans">
                {t('altbilgi.aciklama')}
              </p>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h3 className="text-lg font-baslik text-siyah mb-4">{t('altbilgi.hizliLinkler')}</h3>
              <ul className="space-y-2">
                {linkler.slice(1).map((link) => (
                  <li key={link.yol}>
                    <Link 
                      to={link.yol} 
                      className="text-sm font-sans text-gri-600 hover:text-siyah gecis-yumu"
                    >
                      {link.isim}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Müşteri Hizmetleri */}
            <div>
              <h3 className="text-lg font-baslik text-siyah mb-4">{t('altbilgi.musteriHizmetleri')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/iletisim" className="text-sm font-sans text-gri-600 hover:text-siyah gecis-yumu">
                    {t('baslik.iletisim')}
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm font-sans text-gri-600 hover:text-siyah gecis-yumu">
                    {t('altbilgi.sss')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Telif Hakkı */}
          <div className="mt-12 pt-8 border-t border-gri-200 text-center">
            <p className="text-sm text-gri-500 font-sans">
              © {new Date().getFullYear()} Etic7. {t('altbilgi.telif')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Duzen;
