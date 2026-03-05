import React from 'react';
import { useDil } from '../contexts/DilContext';
import { Link } from 'react-router-dom';

const Ozellikler: React.FC = () => {
  const { t } = useDil();

  return (
    <div className="bg-beyaz">
      {/* Hero Bölümü */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gri-100 to-beyaz relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-vurgu-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gri-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10 py-20">
          <p className="text-vurgu-600 font-vurgu font-bold text-xs uppercase tracking-widest mb-6">
            TÜM ÖZELLİKLER
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-baslik text-siyah mb-8 leading-tight">
            İşinizi Büyütecek<br />
            <span className="text-gri-600">Her Araç, Tek Platformda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gri-700 font-sans max-w-3xl mx-auto leading-relaxed mb-12">
            E-ticaret'ten ERP'ye, sahadan raporlamaya. Başarılı işletmelerin tercih ettiği platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/fiyatlandirma"
              className="px-10 py-4 bg-siyah text-beyaz font-vurgu font-bold rounded-full hover:bg-gri-900 gecis-yumu shadow-xl"
            >
              Hemen Başla
            </Link>
            <a
              href="#detaylar"
              className="px-10 py-4 border-2 border-gri-300 text-siyah font-vurgu font-bold rounded-full hover:border-siyah gecis-yumu"
            >
              Detaylı İncele
            </a>
          </div>
        </div>
      </section>

      {/* Ana Özellikler - Büyük Kartlar */}
      <section id="detaylar" className="py-32 bg-beyaz">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* E-Ticaret */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-vurgu-100 to-vurgu-50 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200"
                  alt="E-Ticaret"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-vurgu-100 text-vurgu-700 px-4 py-2 rounded-full text-xs font-vurgu font-bold mb-6 uppercase">
                E-Ticaret
              </div>
              <h2 className="text-4xl md:text-5xl font-baslik text-siyah mb-6">
                Satış Yapmak Bu Kadar Kolay Olmamıştı
              </h2>
              <p className="text-lg text-gri-700 font-sans leading-relaxed mb-8">
                Sınırsız ürün, stok yönetimi, sepet sistemi, ödeme entegrasyonları. 
                Tüm e-ticaret ihtiyaçlarınız tek platformda.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-vurgu-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Ödeme Entegrasyonları</p>
                    <p className="text-sm text-gri-600 font-sans">Kredi kartı, havale, kapıda ödeme - hepsi dahil</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-vurgu-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Kargo Takibi</p>
                    <p className="text-sm text-gri-600 font-sans">Aras, MNG, Yurtiçi, PTT otomatik entegre</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-vurgu-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Pazaryeri Entegrasyonu</p>
                    <p className="text-sm text-gri-600 font-sans">Trendyol, Hepsiburada, n11 tek tıkla senkronize</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ERP Sistemi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="inline-block bg-gri-200 text-siyah px-4 py-2 rounded-full text-xs font-vurgu font-bold mb-6 uppercase">
                ERP Yönetimi
              </div>
              <h2 className="text-4xl md:text-5xl font-baslik text-siyah mb-6">
                İşletmenizi Kontrol Edin, Büyütün
              </h2>
              <p className="text-lg text-gri-700 font-sans leading-relaxed mb-8">
                Stok, finans, muhasebe, raporlama - tüm operasyonlarınız gerçek zamanlı takip altında.
                Excel'den kurtulun, profesyonel sisteme geçin.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-siyah flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Çoklu Depo & Lokasyon</p>
                    <p className="text-sm text-gri-600 font-sans">Farklı şubeler, depolar - merkezi yönetim</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-siyah flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Otomatik Faturalama</p>
                    <p className="text-sm text-gri-600 font-sans">e-Fatura, e-Arşiv, e-İrsaliye entegre</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-siyah flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Akıllı Tahminleme</p>
                    <p className="text-sm text-gri-600 font-sans">Hangi ürün bitecek, AI ile otomatik sipariş önerisi</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gri-200 to-gri-100 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                  alt="ERP Analytics"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Sahada Çalışma */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-vurgu-100 to-vurgu-50 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200"
                  alt="Mobil Sahada"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-vurgu-100 text-vurgu-700 px-4 py-2 rounded-full text-xs font-vurgu font-bold mb-6 uppercase">
                Sahada Çalışma
              </div>
              <h2 className="text-4xl md:text-5xl font-baslik text-siyah mb-6">
                Ekibinizi Nerede Olursa Olsun Yönetin
              </h2>
              <p className="text-lg text-gri-700 font-sans leading-relaxed mb-8">
                GPS takip, görev atama, fotoğraflı onay, offline çalışma desteği. 
                Saha ekipleriniz artık tamamen kontrolünüz altında.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-vurgu-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Canlı GPS Takip</p>
                    <p className="text-sm text-gri-600 font-sans">Ekip üyeleri nerede, ne yapıyor - haritada görün</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-vurgu-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Offline Çalışma</p>
                    <p className="text-sm text-gri-600 font-sans">İnternet olmasa bile veriler kaydedilir, sonra senkronize olur</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-vurgu-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-siyah">Fotoğraflı Onay</p>
                    <p className="text-sm text-gri-600 font-sans">Her görev tamamlandığında fotoğraf + imza zorunluluğu</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Karşılaştırma Tablosu */}
      <section className="py-24 bg-gri-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-baslik text-siyah mb-6">
              Rakiplerimizle Kıyaslayın
            </h2>
            <p className="text-xl text-gri-700 font-sans">
              Neden Etic7? Çünkü her şey dahil, fiyatlar uygun.
            </p>
          </div>

          <div className="bg-beyaz rounded-2xl shadow-2xl overflow-hidden border border-gri-200">
            <div className="grid grid-cols-4 border-b border-gri-200">
              <div className="p-6 bg-gri-50"></div>
              <div className="p-6 text-center border-l border-gri-200">
                <p className="font-vurgu font-bold text-siyah">Etic7</p>
              </div>
              <div className="p-6 text-center border-l border-gri-200">
                <p className="font-sans text-gri-600 text-sm">Rakip A</p>
              </div>
              <div className="p-6 text-center border-l border-gri-200">
                <p className="font-sans text-gri-600 text-sm">Rakip B</p>
              </div>
            </div>

            {[
              { ozellik: 'E-Ticaret Altyapısı', etic7: true, rakipA: true, rakipB: true },
              { ozellik: 'ERP Yönetim Sistemi', etic7: true, rakipA: false, rakipB: true },
              { ozellik: 'Sahada Çalışma Modülü', etic7: true, rakipA: false, rakipB: false },
              { ozellik: 'Mobil Uygulama', etic7: true, rakipA: true, rakipB: false },
              { ozellik: '7/24 Canlı Destek', etic7: true, rakipA: false, rakipB: true },
              { ozellik: 'Sınırsız Kullanıcı', etic7: true, rakipA: false, rakipB: false },
              { ozellik: 'API Entegrasyonu', etic7: true, rakipA: true, rakipB: true },
              { ozellik: 'Aylık Ücret', etic7: '₺2.500', rakipA: '₺4.200', rakipB: '₺3.800' },
            ].map((satir, index) => (
              <div key={index} className="grid grid-cols-4 border-b border-gri-200 last:border-0">
                <div className="p-6 bg-gri-50 font-sans text-siyah">{satir.ozellik}</div>
                <div className="p-6 text-center border-l border-gri-200">
                  {typeof satir.etic7 === 'boolean' ? (
                    satir.etic7 ? (
                      <svg className="w-6 h-6 text-vurgu-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gri-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                      </svg>
                    )
                  ) : (
                    <p className="font-vurgu font-bold text-siyah">{satir.etic7}</p>
                  )}
                </div>
                <div className="p-6 text-center border-l border-gri-200">
                  {typeof satir.rakipA === 'boolean' ? (
                    satir.rakipA ? (
                      <svg className="w-6 h-6 text-gri-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gri-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                      </svg>
                    )
                  ) : (
                    <p className="font-sans text-gri-600">{satir.rakipA}</p>
                  )}
                </div>
                <div className="p-6 text-center border-l border-gri-200">
                  {typeof satir.rakipB === 'boolean' ? (
                    satir.rakipB ? (
                      <svg className="w-6 h-6 text-gri-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gri-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                      </svg>
                    )
                  ) : (
                    <p className="font-sans text-gri-600">{satir.rakipB}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/fiyatlandirma"
              className="inline-block px-12 py-5 bg-vurgu-600 text-beyaz font-vurgu font-bold rounded-full hover:bg-vurgu-700 gecis-yumu shadow-2xl"
            >
              Fiyatları Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Teknik Özellikler */}
      <section className="py-24 bg-beyaz">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-baslik text-siyah mb-6">
              Teknik Altyapı
            </h2>
            <p className="text-xl text-gri-700 font-sans max-w-3xl mx-auto">
              Modern teknolojiler, güvenli altyapı, hızlı performans. 
              Detaylara önem veriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 border border-gri-200 rounded-xl hover:border-vurgu-400 hover:shadow-xl gecis-yumu">
              <div className="text-5xl mb-4">⚡</div>
              <p className="text-3xl sayi-kurumsal text-siyah mb-2">&lt;1s</p>
              <p className="text-sm text-gri-600 font-sans">Sayfa Yükleme Hızı</p>
            </div>
            <div className="text-center p-8 border border-gri-200 rounded-xl hover:border-vurgu-400 hover:shadow-xl gecis-yumu">
              <div className="text-5xl mb-4">🔒</div>
              <p className="text-3xl sayi-kurumsal text-siyah mb-2">256bit</p>
              <p className="text-sm text-gri-600 font-sans">SSL Şifreleme</p>
            </div>
            <div className="text-center p-8 border border-gri-200 rounded-xl hover:border-vurgu-400 hover:shadow-xl gecis-yumu">
              <div className="text-5xl mb-4">☁️</div>
              <p className="text-3xl sayi-kurumsal text-siyah mb-2">%99.9</p>
              <p className="text-sm text-gri-600 font-sans">Uptime Garantisi</p>
            </div>
            <div className="text-center p-8 border border-gri-200 rounded-xl hover:border-vurgu-400 hover:shadow-xl gecis-yumu">
              <div className="text-5xl mb-4">🌍</div>
              <p className="text-3xl sayi-kurumsal text-siyah mb-2">10+</p>
              <p className="text-sm text-gri-600 font-sans">Dil Desteği</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="py-24 bg-gradient-to-br from-siyah to-gri-900 text-beyaz relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-vurgu-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vurgu-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-baslik mb-6">
            Hemen Başlayın, Büyümeye Odaklanın
          </h2>
          <p className="text-xl font-sans mb-12 opacity-90">
            14 gün ücretsiz deneyin. Kredi kartı gerekmez. İstediğiniz zaman iptal edebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/fiyatlandirma"
              className="px-12 py-5 bg-vurgu-600 text-beyaz font-vurgu font-bold rounded-full hover:bg-vurgu-700 gecis-yumu shadow-2xl"
            >
              Ücretsiz Dene
            </Link>
            <Link
              to="/iletisim"
              className="px-12 py-5 border-2 border-beyaz text-beyaz font-vurgu font-bold rounded-full hover:bg-beyaz hover:text-siyah gecis-yumu"
            >
              Demo Talep Et
            </Link>
          </div>
          <p className="text-sm mt-8 opacity-75 font-sans">
            ✓ Kurulum dahil &nbsp; · &nbsp; ✓ Eğitim dahil &nbsp; · &nbsp; ✓ 7/24 Destek
          </p>
        </div>
      </section>
    </div>
  );
};

export default Ozellikler;
