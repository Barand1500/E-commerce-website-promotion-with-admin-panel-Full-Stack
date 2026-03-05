import React from 'react';
import { useDil } from '../contexts/DilContext';

const Hakkimizda: React.FC = () => {
  const { t } = useDil();

  return (
    <div className="bg-beyaz">
      {/* Başlık */}
      <section className="py-20 bg-gri-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="baslik-2 text-siyah mb-6">
            {t('hakkimizda.baslik')}
          </h1>
          <p className="metin-buyuk">
            {t('hakkimizda.aciklama')}
          </p>
        </div>
      </section>

      {/* Görsel Bölüm */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="aspect-[21/9] bg-gri-200 overflow-hidden mb-16">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
              alt="Hakkımızda"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="baslik-3 text-siyah mb-6">
                {t('hakkimizda.vizyon')}
              </h2>
              <p className="metin-normal mb-6">
                {t('hakkimizda.vizyonMetin')}
              </p>
              <p className="metin-normal">
                2020 yılından beri e-ticaret sektöründe faaliyet gösteriyoruz. Amacımız, 
                işletmelerin dijital dünyada başarılı olmalarını sağlamak ve müşterilerine 
                en iyi deneyimi sunmaktır.
              </p>
            </div>

            <div>
              <h2 className="baslik-3 text-siyah mb-6">
                Değerlerimiz
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-vurgu font-semibold text-siyah mb-2">Kalite</h3>
                  <p className="text-sm text-gri-600 font-sans">
                    Her projede mükemmelliği hedefliyor, detaylara önem veriyoruz.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-vurgu font-semibold text-siyah mb-2">Sadelik</h3>
                  <p className="text-sm text-gri-600 font-sans">
                    Karmaşık çözümler yerine sade ve etkili yaklaşımları tercih ediyoruz.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-vurgu font-semibold text-siyah mb-2">Sürdürülebilirlik</h3>
                  <p className="text-sm text-gri-600 font-sans">
                    Uzun vadeli ve sürdürülebilir çözümler üretiyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurucumuzla Tanışın */}
      <section className="py-20 bg-beyaz">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="baslik-2 text-siyah mb-4">Kurucumuzla Tanışın</h2>
            <p className="metin-buyuk text-gri-700">Liderliğimizde güçlü bir ekiple yürüyoruz</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Fotoğraf */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100 p-8 rounded-xl">
                <img
                  src="/kurucu.png"
                  alt="Dorukhan K. Oğuz"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            {/* Bilgiler */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-vurgu font-semibold text-vurgu-600 mb-2 uppercase tracking-widest">Kurucu & CEO</p>
              <h3 className="text-4xl font-baslik text-siyah mb-2">Ercan Güzel</h3>
              <p className="text-lg text-gri-600 font-sans italic mb-6">
                İşletme, göçmenlik, kişisel yaralanma ve ticari marka hukukunda uzman
              </p>
              <div className="space-y-4 text-gri-700 font-sans leading-relaxed">
                <p>
                  Ercan Güzel, işletme yönetimi ve hukuk alanlarında geniş bir deneyime sahip bir girişimcidir.
                  UC Berkeley Hukuk Fakültesi'nden mezun olmuş ve İş ve Fikri Mülkiyet Hukuku alanında uzmanlaşmıştır.
                </p>
                <p>
                  Kaliforniya barosuna kayıtlı olan Ercan Güzel, UC Berkeley'de araştırma görevlisi olarak
                  ABD'nin yasal inceliklerine odaklanmıştır. Şirketimizi kurarak, işletmelere dijital dönüşüm
                  süreçlerinde liderlik etmekte ve yenilikçi çözümler sunmaktadır.
                </p>
                <p className="font-semibold text-siyah">
                  "Müşterilerimizin başarısı, bizim başarımızdır. Her proje için en iyisini hedefliyoruz."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-20 bg-gri-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-baslik text-siyah mb-2">500+</p>
              <p className="text-sm text-gri-600 font-sans">Mutlu Müşteri</p>
            </div>
            <div>
              <p className="text-5xl font-baslik text-siyah mb-2">1000+</p>
              <p className="text-sm text-gri-600 font-sans">Tamamlanan Proje</p>
            </div>
            <div>
              <p className="text-5xl font-baslik text-siyah mb-2">5+</p>
              <p className="text-sm text-gri-600 font-sans">Yıllık Deneyim</p>
            </div>
            <div>
              <p className="text-5xl font-baslik text-siyah mb-2">99%</p>
              <p className="text-sm text-gri-600 font-sans">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda;
