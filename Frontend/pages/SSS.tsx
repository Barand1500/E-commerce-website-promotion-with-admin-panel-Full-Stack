import React, { useState } from 'react';
import { useDil } from '../contexts/DilContext';

interface Soru {
  soru: string;
  cevap: string;
  kategori: string;
}

const SSS: React.FC = () => {
  const { t } = useDil();
  const [acikSoru, setAcikSoru] = useState<number | null>(null);
  const [aktifKategori, setAktifKategori] = useState<string>('Tümü');

  const sorular: Soru[] = [
    // Genel
    {
      kategori: 'Genel',
      soru: 'Etic7 nedir ve ne işe yarar?',
      cevap: 'Etic7, e-ticaret, ERP yönetimi ve sahada çalışma modüllerini tek platformda sunan bulut tabanlı bir işletme yönetim sistemidir. Stok takibinden satışa, muhasebeden saha ekibi yönetimine kadar ihtiyacınız olan her şeyi kapsar.',
    },
    {
      kategori: 'Genel',
      soru: 'Hangi sektörler için uygun?',
      cevap: 'E-ticaret, perakende, toptan satış, lojistik, üretim, servis sektörü gibi birçok alanda kullanılabilir. Özellikle saha ekibi olan, stok yönetimi gereken ve online satış yapan işletmeler için idealdir.',
    },
    {
      kategori: 'Genel',
      soru: 'Ücretsiz deneme süresi var mı?',
      cevap: 'Evet! 14 gün boyunca tüm özellikleriyle ücretsiz deneyebilirsiniz. Kredi kartı bilgisi gerektirmiyoruz, istediğiniz zaman iptal edebilirsiniz.',
    },
    {
      kategori: 'Genel',
      soru: 'Kaç kullanıcı ekleyebilirim?',
      cevap: 'Tüm paketlerde sınırsız kullanıcı ekleme hakkınız var. İster 5, ister 500 personel - fark etmiyor, ek ücret yok.',
    },

    // Teknik
    {
      kategori: 'Teknik',
      soru: 'Sistemin güvenliği nasıl sağlanıyor?',
      cevap: '256-bit SSL şifreleme, 2FA (iki faktörlü kimlik doğrulama), günlük otomatik yedekleme ve PCI DSS uyumlu ödeme altyapısı kullanıyoruz. Verileriniz banka seviyesinde korunuyor.',
    },
    {
      kategori: 'Teknik',
      soru: 'Mobil uygulama var mı?',
      cevap: 'Evet, hem iOS hem Android için native mobil uygulamamız mevcut. Sahada çalışma modülü, GPS takip ve offline çalışma destekli. Ayrıca web sitemiz tüm cihazlarda responsive çalışıyor.',
    },
    {
      kategori: 'Teknik',
      soru: 'Verilerim nerede saklanıyor?',
      cevap: 'Verileriniz Türkiye\'deki AWS sunucularında, KVKK ve GDPR uyumlu şekilde saklanıyor. Günlük otomatik yedekleme ile 3 farklı lokasyonda kopyaları tutuluyor.',
    },
    {
      kategori: 'Teknik',
      soru: 'API entegrasyonu mevcut mu?',
      cevap: 'Evet, RESTful API ile kendi yazılımlarınızla entegre edebilirsiniz. Trendyol, Hepsiburada, n11, muhasebe programları için hazır entegrasyonlarımız da var.',
    },

    // Ödeme
    {
      kategori: 'Ödeme & Fatura',
      soru: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      cevap: 'Kredi kartı (Visa, Mastercard, Troy), banka havalesi ve otomatik ödeme talimatı (OÖT) kabul ediyoruz. Aylık veya yıllık ödeme seçenekleri mevcut.',
    },
    {
      kategori: 'Ödeme & Fatura',
      soru: 'Yıllık ödeme yaparsam indirim var mı?',
      cevap: 'Evet! Yıllık ödemeyi tercih ederseniz %20 indirim kazanırsınız. Ayrıca ilk 100 müşteriye özel %50 ilk ay indirimi sunuyoruz.',
    },
    {
      kategori: 'Ödeme & Fatura',
      soru: 'Fatura kesiliyor mu?',
      cevap: 'Evet, her ödeme için otomatik olarak e-fatura kesiliyor. Kurumsal müşterilerimiz için e-arşiv fatura da gönderebiliyoruz.',
    },
    {
      kategori: 'Ödeme & Fatura',
      soru: 'Aboneliği iptal edersem ne olur?',
      cevap: 'İstediğiniz zaman iptal edebilirsiniz. İptal ettiğinizde mevcut dönem sonuna kadar hizmet devam eder. Verilerinizi Excel formatında indirebilirsiniz.',
    },

    // Kurulum & Destek
    {
      kategori: 'Kurulum & Destek',
      soru: 'Kurulum nasıl yapılıyor?',
      cevap: 'Kayıt olduktan sonra ekibimiz sizinle iletişime geçer. 1-2 saat içinde sistemin kurulumu tamamlanır, ürünleriniz yüklenir ve eğitim verilir. Kurulum tamamen ücretsizdir.',
    },
    {
      kategori: 'Kurulum & Destek',
      soru: 'Teknik destek nasıl alırım?',
      cevap: '7/24 canlı chat, telefon ve e-posta desteği sunuyoruz. Ayrıca her müşteriye özel bir WhatsApp destek hattı tanımlıyoruz. Ortalama yanıt süremiz 2 dakikadan az.',
    },
    {
      kategori: 'Kurulum & Destek',
      soru: 'Eğitim veriliyor mu?',
      cevap: 'Evet! Kurulumla birlikte 2 saatlik online eğitim, video kütüphanesi ve kullanım kılavuzu ücretsiz. İsteğe bağlı yerinde eğitim hizmeti de veriyoruz.',
    },
    {
      kategori: 'Kurulum & Destek',
      soru: 'Eski sistemdeki verilerimi aktarabilir miyim?',
      cevap: 'Evet, Excel, SQL veya API ile eski verilerinizi otomatik aktarıyoruz. Veri göçü tamamen ücretsiz ve kayıpsız şekilde yapılıyor.',
    },

    // Özellikler
    {
      kategori: 'Özellikler',
      soru: 'E-fatura entegrasyonu var mı?',
      cevap: 'Evet, e-Fatura, e-Arşiv, e-İrsaliye tamamen entegre. Faturaları otomatik kesip GİB\'e gönderiyoruz.',
    },
    {
      kategori: 'Özellikler',
      soru: 'Kargo firmaları ile entegrasyon var mı?',
      cevap: 'Aras, MNG, Yurtiçi, PTT, UPS, Sürat gibi tüm büyük kargo firmalarıyla entegreyiz. Tek tıkla kargo çıkışı yapıp takip numarasını müşteriye gönderebilirsiniz.',
    },
    {
      kategori: 'Özellikler',
      soru: 'Pazaryerleri ile entegrasyon mevcut mu?',
      cevap: 'Trendyol, Hepsiburada, n11, Amazon, Çiçeksepeti ile doğrudan entegrasyon var. Stok ve fiyatlar otomatik senkronize oluyor.',
    },
    {
      kategori: 'Özellikler',
      soru: 'Raporlama özellikleri neler?',
      cevap: 'Satış raporları, stok raporları, kâr/zarar analizi, müşteri bazlı raporlar, saha ekibi performans raporları. Excel ve PDF export mevcut. İstediğiniz raporu özel olarak da oluşturabiliriz.',
    },
  ];

  const kategoriler = ['Tümü', ...Array.from(new Set(sorular.map((s) => s.kategori)))];

  const filtreliSorular =
    aktifKategori === 'Tümü'
      ? sorular
      : sorular.filter((s) => s.kategori === aktifKategori);

  const handleSoruTikla = (index: number) => {
    setAcikSoru(acikSoru === index ? null : index);
  };

  return (
    <div className="bg-beyaz">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gri-100 to-beyaz">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-vurgu-600 font-vurgu font-bold text-xs uppercase tracking-widest mb-4">
            YARDIM MERKEZİ
          </p>
          <h1 className="baslik-1 text-siyah mb-6">Sıkça Sorulan Sorular</h1>
          <p className="metin-buyuk max-w-2xl mx-auto">
            Merak ettiklerinizin cevaplarını burada bulabilirsiniz. Bulamadıysanız,{' '}
            <a href="/iletisim" className="text-vurgu-600 hover:underline">
              bize ulaşın
            </a>
            .
          </p>
        </div>
      </section>

      {/* Kategori Filtreleri */}
      <section className="py-8 border-b border-gri-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {kategoriler.map((kategori) => (
              <button
                key={kategori}
                onClick={() => setAktifKategori(kategori)}
                className={`px-6 py-2 rounded-full font-vurgu text-sm font-semibold gecis-yumu ${
                  aktifKategori === kategori
                    ? 'bg-siyah text-beyaz'
                    : 'bg-gri-100 text-gri-700 hover:bg-gri-200'
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sorular */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {filtreliSorular.map((item, index) => (
              <div
                key={index}
                className="border border-gri-200 rounded-xl overflow-hidden hover:border-vurgu-400 gecis-yumu"
              >
                <button
                  onClick={() => handleSoruTikla(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gri-50 gecis-yumu"
                >
                  <div className="flex-1">
                    <span className="inline-block text-xs font-vurgu font-bold text-vurgu-600 mb-2 uppercase">
                      {item.kategori}
                    </span>
                    <h3 className="text-lg font-semibold text-siyah">{item.soru}</h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gri-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      acikSoru === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    acikSoru === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gri-700 font-sans leading-relaxed">
                    {item.cevap}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-20 bg-gri-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="baslik-3 text-siyah mb-4">Cevabınızı bulamadınız mı?</h2>
          <p className="metin-buyuk mb-8">
            Ekibimiz size yardımcı olmaktan mutluluk duyar. 7/24 destek hattımız aktif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="px-10 py-4 bg-siyah text-beyaz font-vurgu font-bold rounded-full hover:bg-gri-900 gecis-yumu shadow-xl"
            >
              İletişime Geç
            </a>
            <a
              href="tel:+908501234567"
              className="px-10 py-4 border-2 border-gri-300 text-siyah font-vurgu font-bold rounded-full hover:border-siyah gecis-yumu"
            >
              📞 0850 123 45 67
            </a>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-beyaz border-t border-gri-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl sayi-kurumsal text-siyah mb-2">2dk</p>
              <p className="text-sm text-gri-600 font-sans">Ortalama Yanıt Süresi</p>
            </div>
            <div>
              <p className="text-4xl sayi-kurumsal text-siyah mb-2">7/24</p>
              <p className="text-sm text-gri-600 font-sans">Destek Hizmeti</p>
            </div>
            <div>
              <p className="text-4xl sayi-kurumsal text-siyah mb-2">%98</p>
              <p className="text-sm text-gri-600 font-sans">Müşteri Memnuniyeti</p>
            </div>
            <div>
              <p className="text-4xl sayi-kurumsal text-siyah mb-2">500+</p>
              <p className="text-sm text-gri-600 font-sans">Çözülen Sorun/Gün</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SSS;
