import React from 'react';
import { Link } from 'react-router-dom';
import { useDil } from '../contexts/DilContext';

const Fiyatlandirma: React.FC = () => {
  const { t } = useDil();

  const paketler = [
    {
      isim: 'Temel',
      fiyat: '₺2.999',
      periyot: '/ay',
      ozellikler: [
        '50 ürüne kadar',
        'Temel özellikler',
        'E-posta desteği',
        'Mobil uyumlu',
        'SSL sertifikası',
      ],
    },
    {
      isim: 'Profesyonel',
      fiyat: '₺5.999',
      periyot: '/ay',
      onerilen: true,
      ozellikler: [
        '500 ürüne kadar',
        'Gelişmiş özellikler',
        'Öncelikli destek',
        'SEO araçları',
        'Analitik raporlar',
        'Özel tasarım',
      ],
    },
    {
      isim: 'Kurumsal',
      fiyat: '₺9.999',
      periyot: '/ay',
      ozellikler: [
        'Sınırsız ürün',
        'Tüm özellikler',
        '7/24 destek',
        'API erişimi',
        'Özel entegrasyonlar',
        'Danışmanlık hizmeti',
        'Özel sunucu',
      ],
    },
  ];

  return (
    <div className="bg-beyaz">
      {/* Başlık */}
      <section className="py-20 bg-gri-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="baslik-2 text-siyah mb-6">
            {t('fiyatlandirma.baslik')}
          </h1>
          <p className="metin-buyuk">
            {t('fiyatlandirma.aciklama')}
          </p>
        </div>
      </section>

      {/* Paketler */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paketler.map((paket, index) => (
              <div
                key={index}
                className={`border ${
                  paket.onerilen ? 'border-siyah' : 'border-gri-300'
                } p-8 relative`}
              >
                {paket.onerilen && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-siyah text-beyaz text-xs px-4 py-1 font-vurgu font-semibold">
                      ÖNERİLEN
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-baslik text-siyah mb-4">{paket.isim}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-baslik text-siyah">{paket.fiyat}</span>
                  <span className="text-gri-600 text-sm font-sans">{paket.periyot}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {paket.ozellikler.map((ozellik, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gri-600 mr-3">✓</span>
                      <span className="text-sm text-gri-700 font-sans">{ozellik}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/iletisim"
                  className={`block w-full py-3 text-center buton-vurgu gecis-yumu ${
                    paket.onerilen
                      ? 'bg-siyah text-beyaz hover:bg-gri-800'
                      : 'bg-beyaz text-siyah border border-gri-300 hover:bg-gri-100'
                  }`}
                >
                  Başlayın
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ek Bilgi */}
      <section className="py-16 bg-gri-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="metin-normal">
            Tüm paketlerde 14 gün ücretsiz deneme hakkı vardır. İstediğiniz zaman iptal edebilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Fiyatlandirma;
