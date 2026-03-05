import React from 'react';
import { Link } from 'react-router-dom';
import { useDil } from '../contexts/DilContext';
import HeroSlider from '../components/HeroSlider';

const AnaSayfa: React.FC = () => {
  const { t } = useDil();

  // Slider İçerikleri
  const sliderIcerik = [
    {
      baslik: 'E-Ticaret Çözümlerinde Yeni Nesil',
      altBaslik: 'Dijital Dönüşüm',
      aciklama: 'İşletmenizi bir sonraki seviyeye taşıyacak akıllı e-ticaret platformu',
      resim: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
      butonMetin: 'Hemen Başlayın',
      butonLink: '/fiyatlandirma',
    },
    {
      baslik: 'ERP Yönetimi ile Kontrolü Elinizde Tutun',
      altBaslik: 'Entegre Çözümler',
      aciklama: 'Stok, finans, satış - tüm işlemlerinizi tek platformdan yönetin',
      resim: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
      butonMetin: 'ERP Sistemini Keşfet',
      butonLink: '/ozellikler',
    },
    {
      baslik: 'Sahada Çalışma Yönetimi',
      altBaslik: 'Mobil Çözümler',
      aciklama: 'Saha ekiplerinizi gerçek zamanlı takip edin, verimliliği artırın',
      resim: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000',
      butonMetin: 'Mobil Çözümleri Gör',
      butonLink: '/ozellikler',
    },
  ];

  // Başarı Hikayeleri
  const basariHikayeleri = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/320px-Coca-Cola_logo.svg.png',
      sirket: 'Coca-Cola',
      aciklama: 'E-ticareti ciddiye alıyorum diyen her firma Güzel Teknoloji ile çalışmalı!',
      yetkili: 'Ahmet Yılmaz',
      pozisyon: 'Kurucu',
      metrikler: {
        yillikCiro: 285,
        siparisSayisi: 126,
        organikTrafik: 247,
      },
      renk: 'from-red-50 to-red-100',
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Migros_Logo.svg/320px-Migros_Logo.svg.png',
      sirket: 'Migros',
      aciklama: 'ikas, ziyaretçilerin site içinde sorunsuz gezinmelerini sağladı!',
      yetkili: 'Mehmet Demir',
      pozisyon: 'Kurucu',
      metrikler: {
        yillikCiro: 264,
        siparisSayisi: 272,
        organikTrafik: 350,
      },
      renk: 'from-orange-50 to-orange-100',
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ülker_logo.svg/320px-Ülker_logo.svg.png',
      sirket: 'Ülker',
      aciklama: 'Müşteri hizmetleri ve teknik destek konusunda harikalar!',
      yetkili: 'Ayşe Kaya',
      pozisyon: 'Kurucu',
      metrikler: {
        yillikCiro: 195,
        siparisSayisi: 168,
        organikTrafik: 220,
      },
      renk: 'from-blue-50 to-blue-100',
    },
  ];

  // Neden Biz Özellikleri
  const nedenBizOzellikler = [
    {
      ikon: '📊',
      baslik: 'ERP Yönetimi',
      aciklama: 'Stok, finans, satış ve raporlama işlemlerinizi tek platformdan entegre yönetin.',
    },
    {
      ikon: '📱',
      baslik: 'Sahada Çalışma',
      aciklama: 'Mobil uygulama ile saha ekiplerinizi gerçek zamanlı takip edin ve yönetin.',
    },
    {
      ikon: '🔄',
      baslik: 'Otomasyon',
      aciklama: 'Tekrarlayan işlemleri otomatikleştirin, zamandan ve maliyetten tasarruf edin.',
    },
    {
      ikon: '📈',
      baslik: 'Gelişmiş Analitik',
      aciklama: 'Detaylı raporlar ve analizlerle işinizi büyütün, doğru kararlar alın.',
    },
    {
      ikon: '🌐',
      baslik: 'Çoklu Kanal',
      aciklama: 'Web, mobil, sosyal medya - tüm satış kanallarınızı tek yerden yönetin.',
    },
    {
      ikon: '🔐',
      baslik: 'Güvenlik',
      aciklama: 'Banka standartlarında güvenlik altyapısı ile verileriniz her zaman korunaklı.',
    },
  ];

  const urunler = [
    {
      isim: 'E-Ticaret Web Sitesi',
      aciklama: 'Sınırsız ürün, modern tasarım',
      fiyat: '₺5.999',
      periyot: '/ay',
      ozellikler: ['Mobil uyumlu', 'SEO optimize', '7/24 destek'],
      resim: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
    },
    {
      isim: 'Mağaza Yönetim Paneli',
      aciklama: 'Kolay ürün & stok yönetimi',
      fiyat: '₺3.499',
      periyot: '/ay',
      ozellikler: ['Gerçek zamanlı', 'Raporlama', 'Entegrasyonlar'],
      resim: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600',
    },
    {
      isim: 'Mobil Uygulama',
      aciklama: 'iOS & Android uygulaması',
      fiyat: '₺7.999',
      periyot: '/ay',
      ozellikler: ['Native kod', 'Push bildirim', 'Hızlı performans'],
      resim: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600',
    },
    {
      isim: 'SEO & Pazarlama',
      aciklama: 'Google\'da ilk sıralara çıkın',
      fiyat: '₺2.999',
      periyot: '/ay',
      ozellikler: ['Anahtar kelime', 'İçerik optimize', 'Link building'],
      resim: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <div className="bg-beyaz">
      {/* Hero Slider */}
      <HeroSlider slides={sliderIcerik} />

      {/* Neden Biz? - Yeni Tasarım */}
      <section className="py-24 bg-gradient-to-b from-beyaz to-gri-100 relative overflow-hidden">
        {/* Arka Plan Desenleri */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-vurgu-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Başlık */}
          <div className="text-center mb-20">
            <p className="text-vurgu-600 font-vurgu font-bold text-sm uppercase tracking-widest mb-4">
              NEDEN ETİC7?
            </p>
            <h2 className="baslik-1 text-siyah mb-6">
              Rakiplerinizin Önüne Geçin
            </h2>
            <p className="text-2xl text-gri-700 font-sans max-w-3xl mx-auto leading-relaxed">
              500+ işletme Etic7 ile <span className="text-vurgu-600 font-bold">cirolarını %285'e kadar artırdı.</span> Sıra sizde.
            </p>
          </div>

          {/* Ana Özellikler Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* ERP Yönetimi - Büyük Kart */}
            <div className="lg:col-span-1 bg-beyaz border-2 border-gri-300 p-10 rounded-2xl hover:border-vurgu-500 hover:shadow-2xl gecis-yumu relative overflow-hidden group">
              <div className="absolute top-0 right-0 text-9xl opacity-5 group-hover:opacity-10 gecis-yumu">📊</div>
              <div className="relative z-10">
                <div className="inline-block bg-vurgu-100 text-vurgu-700 px-4 py-2 rounded-full text-xs font-vurgu font-bold mb-6 uppercase">
                  EN ÇOK TERCİH EDİLEN
                </div>
                <h3 className="text-4xl font-baslik mb-4 text-siyah">ERP Yönetim Sistemi</h3>
                <p className="text-xl text-gri-700 mb-8 font-sans leading-relaxed">
                  Stok, finans, satış, raporlama - her şey tek platformda. 
                  <span className="font-bold text-vurgu-600"> %60 daha hızlı</span> operasyon yönetimi.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-lg text-siyah">
                    <svg className="w-6 h-6 mr-3 text-vurgu-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    Gerçek zamanlı stok takibi
                  </li>
                  <li className="flex items-center text-lg text-siyah">
                    <svg className="w-6 h-6 mr-3 text-vurgu-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    Otomatik finansal raporlar
                  </li>
                  <li className="flex items-center text-lg text-siyah">
                    <svg className="w-6 h-6 mr-3 text-vurgu-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    Çoklu depo yönetimi
                  </li>
                </ul>
                <Link to="/ozellikler" className="inline-block bg-beyaz text-siyah px-8 py-4 rounded-xl font-vurgu font-bold hover:bg-gri-100 gecis-yumu shadow-xl">
                  Detaylı Bilgi Al
                </Link>
              </div>
            </div>

            {/* Sahada Çalışma - Büyük Kart */}
            <div className="lg:col-span-1 bg-beyaz border-2 border-gri-300 p-10 rounded-2xl hover:border-vurgu-500 hover:shadow-2xl gecis-yumu relative overflow-hidden group">
              <div className="absolute top-0 right-0 text-9xl opacity-5 group-hover:opacity-10 gecis-yumu">📱</div>
              <div className="relative z-10">
                <div className="inline-block bg-vurgu-100 text-vurgu-700 px-4 py-2 rounded-full text-xs font-vurgu font-bold mb-6 uppercase">
                  MOBİL ÇÖZÜM
                </div>
                <h3 className="text-4xl font-baslik mb-4 text-siyah">Sahada Çalışma Yönetimi</h3>
                <p className="text-xl text-gri-700 mb-8 font-sans leading-relaxed">
                  Saha ekiplerinizi canlı takip edin. GPS lokasyon, görev atama, 
                  <span className="font-bold text-vurgu-600"> anlık raporlama.</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-lg text-siyah">
                    <svg className="w-6 h-6 mr-3 text-vurgu-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    GPS ile personel takibi
                  </li>
                  <li className="flex items-center text-lg text-siyah">
                    <svg className="w-6 h-6 mr-3 text-vurgu-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    Fotoğraflı görev onayı
                  </li>
                  <li className="flex items-center text-lg text-siyah">
                    <svg className="w-6 h-6 mr-3 text-vurgu-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    Offline çalışma modu
                  </li>
                </ul>
                <Link to="/ozellikler" className="inline-block bg-beyaz text-siyah px-8 py-4 rounded-xl font-vurgu font-bold hover:bg-gri-100 gecis-yumu shadow-xl">
                  Mobil Uygulamayı Gör
                </Link>
              </div>
            </div>
          </div>

          {/* İstatistikler Banner */}
          {/* İstatistikler Banner */}
          <div className="bg-beyaz rounded-2xl p-8 md:p-12 mb-12 border-2 border-gri-300 hover:border-vurgu-500 hover:shadow-xl gecis-yumu">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-5xl md:text-6xl sayi-kurumsal mb-2 text-siyah">%285</p>
                <p className="text-sm md:text-base font-sans text-gri-700">Ortalama Ciro Artışı</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl sayi-kurumsal mb-2 text-siyah">500+</p>
                <p className="text-sm md:text-base font-sans text-gri-700">Aktif Müşteri</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl sayi-kurumsal mb-2 text-siyah">%99</p>
                <p className="text-sm md:text-base font-sans text-gri-700">Müşteri Memnuniyeti</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl sayi-kurumsal mb-2 text-siyah">7/24</p>
                <p className="text-sm md:text-base font-sans text-gri-700">Destek Hizmeti</p>
              </div>
            </div>
          </div>

          {/* Alt Özellikler - 4'lü Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-beyaz p-6 rounded-xl border-2 border-gri-200 hover:border-vurgu-400 hover:shadow-xl gecis-yumu group">
              <div className="text-4xl mb-4 group-hover:scale-110 gecis-yumu">⚡</div>
              <h4 className="text-lg font-vurgu font-bold text-siyah mb-2">Hızlı Kurulum</h4>
              <p className="text-sm text-gri-600 font-sans">Sadece 1 saatte kurulum tamamlanır, hemen satışa başlayın.</p>
            </div>
            
            <div className="bg-beyaz p-6 rounded-xl border-2 border-gri-200 hover:border-vurgu-400 hover:shadow-xl gecis-yumu group">
              <div className="text-4xl mb-4 group-hover:scale-110 gecis-yumu">🔐</div>
              <h4 className="text-lg font-vurgu font-bold text-siyah mb-2">Banka Seviyesi Güvenlik</h4>
              <p className="text-sm text-gri-600 font-sans">SSL, 2FA, şifreli veri - paranız ve bilgileriniz tamamen güvende.</p>
            </div>
            
            <div className="bg-beyaz p-6 rounded-xl border-2 border-gri-200 hover:border-vurgu-400 hover:shadow-xl gecis-yumu group">
              <div className="text-4xl mb-4 group-hover:scale-110 gecis-yumu">📈</div>
              <h4 className="text-lg font-vurgu font-bold text-siyah mb-2">Akıllı Raporlama</h4>
              <p className="text-sm text-gri-600 font-sans">Hangi ürünler satıyor, nereden geliyorlar - her şey net.</p>
            </div>
            
            <div className="bg-beyaz p-6 rounded-xl border-2 border-gri-200 hover:border-vurgu-400 hover:shadow-xl gecis-yumu group">
              <div className="text-4xl mb-4 group-hover:scale-110 gecis-yumu">🎯</div>
              <h4 className="text-lg font-vurgu font-bold text-siyah mb-2">Pazarlama Araçları</h4>
              <p className="text-sm text-gri-600 font-sans">SEO, kampanya yönetimi, müşteri segmentasyonu dahil.</p>
            </div>
          </div>

          {/* CTA Butonu */}
          <div className="text-center mt-16">
            <Link
              to="/fiyatlandirma"
              className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-vurgu-600 to-blue-600 text-beyaz text-lg font-vurgu font-bold rounded-full hover:scale-110 gecis-yumu shadow-2xl hover:shadow-vurgu-500/50 group"
            >
              <span>Hemen Satın Al - İlk Ay %50 İndirimli</span>
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 gecis-yumu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-sm text-gri-600 mt-4 font-sans">
              ✓ Kredi kartı gerekmez &nbsp; · &nbsp; ✓ 14 gün ücretsiz deneme &nbsp; · &nbsp; ✓ Her zaman iptal edebilirsiniz
            </p>
          </div>
        </div>
      </section>

      {/* Başarı Hikayeleri */}
      <section className="py-20 bg-gri-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="baslik-2 text-siyah mb-4">
              Sıradaki başarı hikayesi sizinki olabilir
            </h2>
            <p className="metin-buyuk max-w-3xl mx-auto mb-12">
              Gerçek işletmeler ikas deneyimlerini anlatıyor. Çözümlerimizin operasyonlarına ve büyümelerine nasıl katkı sağladığını kendi ağızlarından dinleyin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {basariHikayeleri.map((hikaye, index) => (
              <div 
                key={index} 
                className="bg-beyaz border border-gri-200 overflow-hidden hover:shadow-2xl gecis-yumu group"
              >
                {/* Üst Kısım - Logo ve Buton */}
                <div className={`bg-gradient-to-br ${hikaye.renk} p-8 relative`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-beyaz p-4 rounded-lg shadow-md">
                      <img 
                        src={hikaye.logo} 
                        alt={hikaye.sirket} 
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <Link 
                      to="/hakkimizda" 
                      className="bg-beyaz px-4 py-2 rounded-lg text-xs font-vurgu font-semibold text-siyah hover:bg-gri-900 hover:text-beyaz gecis-yumu flex items-center gap-2"
                    >
                      Başarı Hikayesini Görüntüle
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-8">
                  <p className="text-base text-gri-700 font-sans mb-6 italic">
                    "{hikaye.aciklama}"
                  </p>
                  <div className="mb-6">
                    <p className="font-vurgu font-semibold text-siyah">{hikaye.yetkili}</p>
                    <p className="text-sm text-gri-600 font-sans">{hikaye.pozisyon}</p>
                  </div>

                  {/* Metrikler */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-2xl font-baslik font-semibold text-green-600 mb-1">
                        %{hikaye.metrikler.yillikCiro}
                        <span className="text-xs ml-1">↑</span>
                      </p>
                      <p className="text-xs text-gri-600 font-sans">Yıllık Ciro</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-2xl font-baslik font-semibold text-blue-600 mb-1">
                        %{hikaye.metrikler.siparisSayisi}
                        <span className="text-xs ml-1">↑</span>
                      </p>
                      <p className="text-xs text-gri-600 font-sans">Sipariş Sayısı</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-2xl font-baslik font-semibold text-purple-600 mb-1">
                        %{hikaye.metrikler.organikTrafik}
                        <span className="text-xs ml-1">↑</span>
                      </p>
                      <p className="text-xs text-gri-600 font-sans">Organik Trafik</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/hakkimizda"
              className="inline-block px-10 py-4 bg-vurgu-600 text-beyaz buton-vurgu gecis-yumu hover:bg-vurgu-700 hover:scale-105 shadow-lg"
            >
              Başarı Hikayelerini Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Video Bölümü */}
      <section className="py-16 bg-beyaz">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="baslik-3 text-siyah mb-4">
              Platformumuzu Keşfedin
            </h2>
            <p className="metin-normal max-w-2xl mx-auto">
              E-ticaret çözümlerimizin nasıl çalıştığını ve işinizi nasıl büyütebileceğinizi videoda görün.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-siyah rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IWpBzKPjtc0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Satın Alınabilir Ürünler */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="baslik-2 text-siyah mb-4">
              Hizmetlerimiz <span className="text-gri-400">·</span> Ürünlerimiz
            </h2>
            <p className="metin-buyuk max-w-2xl mx-auto">
              İşletmeniz için ihtiyacınız olan her şey. Paketleri inceleyin ve bugün başlayın.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {urunler.map((urun, index) => (
              <div key={index} className="group border border-gri-200 hover:border-siyah gecis-yumu bg-beyaz hover:shadow-xl">
                <div className="aspect-square bg-gri-100 overflow-hidden">
                  <img
                    src={urun.resim}
                    alt={urun.isim}
                    className="w-full h-full object-cover gecis-yumu group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-vurgu font-semibold text-siyah mb-2">{urun.isim}</h3>
                  <p className="text-sm text-gri-600 mb-4">{urun.aciklama}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-baslik text-siyah">{urun.fiyat}</span>
                    <span className="text-sm text-gri-500">{urun.periyot}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {urun.ozellikler.map((ozellik, i) => (
                      <li key={i} className="flex items-center text-xs text-gri-600">
                        <span className="mr-2 text-vurgu-600">✓</span>
                        {ozellik}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/fiyatlandirma"
                    className="block w-full text-center py-3 bg-siyah text-beyaz buton-vurgu gecis-yumu hover:bg-vurgu-600"
                  >
                    Satın Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/fiyatlandirma"
              className="inline-flex items-center text-siyah font-vurgu font-semibold border-b-2 border-siyah hover:text-vurgu-600 hover:border-vurgu-600 gecis-yumu"
            >
              Tüm Paketleri Görüntüle
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hakkımızda Bölümü */}
      <section className="py-20 bg-gri-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="baslik-3 text-siyah mb-6">
            {t('anasayfa.hakkimizda')}
          </h2>
          <p className="metin-buyuk max-w-3xl mx-auto">
            {t('anasayfa.hakkimizdaMetin')}
          </p>
          <Link
            to="/hakkimizda"
            className="inline-block mt-8 text-sm font-vurgu font-semibold text-siyah border-b-2 border-siyah hover:border-vurgu-600 hover:text-vurgu-600 gecis-yumu"
          >
            {t('anasayfa.devaminiOku')} →
          </Link>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="py-20 bg-gradient-to-br from-gri-900 to-siyah">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="baslik-2 text-beyaz mb-6">
            Hemen Başlayın
          </h2>
          <p className="text-xl text-gri-300 mb-10 max-w-2xl mx-auto font-sans">
            Binlerce işletme Etic7 ile büyüyor. Siz de bugün katılın ve farkı görün.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/fiyatlandirma"
              className="px-12 py-5 bg-beyaz text-siyah buton-vurgu gecis-yumu hover:bg-vurgu-600 hover:text-beyaz hover:scale-105 shadow-2xl"
            >
              Paketleri İncele
            </Link>
            <Link
              to="/iletisim"
              className="px-12 py-5 bg-transparent text-beyaz border-2 border-beyaz buton-vurgu gecis-yumu hover:bg-beyaz hover:text-siyah"
            >
              Demo İste
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnaSayfa;
