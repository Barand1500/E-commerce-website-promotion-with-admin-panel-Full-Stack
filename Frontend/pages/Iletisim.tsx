import React, { useState } from 'react';
import { useDil } from '../contexts/DilContext';

const Iletisim: React.FC = () => {
  const { t } = useDil();
  const [form, setForm] = useState({
    isim: '',
    eposta: '',
    mesaj: '',
  });

  const değişikliğiYönet = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formuGönder = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form gönderildi:', form);
  };

  return (
    <div className="bg-beyaz">
      {/* Başlık */}
      <section className="py-20 bg-gri-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="baslik-2 text-siyah mb-6">
            {t('iletisim.baslik')}
          </h1>
          <p className="metin-buyuk">
            {t('iletisim.aciklama')}
          </p>
        </div>
      </section>

      {/* İletişim Formu */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <form onSubmit={formuGönder} className="space-y-6">
            <div>
              <label htmlFor="isim" className="block text-sm text-gri-700 mb-2 font-sans font-medium">
                {t('iletisim.isim')}
              </label>
              <input
                type="text"
                id="isim"
                name="isim"
                value={form.isim}
                onChange={değişikliğiYönet}
                required
                className="w-full px-4 py-3 border border-gri-300 focus:outline-none focus:border-siyah gecis-yumu font-sans"
              />
            </div>

            <div>
              <label htmlFor="eposta" className="block text-sm text-gri-700 mb-2 font-sans font-medium">
                {t('iletisim.eposta')}
              </label>
              <input
                type="email"
                id="eposta"
                name="eposta"
                value={form.eposta}
                onChange={değişikliğiYönet}
                required
                className="w-full px-4 py-3 border border-gri-300 focus:outline-none focus:border-siyah gecis-yumu font-sans"
              />
            </div>

            <div>
              <label htmlFor="mesaj" className="block text-sm text-gri-700 mb-2 font-sans font-medium">
                {t('iletisim.mesaj')}
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                value={form.mesaj}
                onChange={değişikliğiYönet}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gri-300 focus:outline-none focus:border-siyah gecis-yumu resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-siyah text-beyaz py-4 buton-vurgu gecis-yumu hover:bg-gri-800 hover:shadow-lg"
            >
              {t('iletisim.gonder')}
            </button>
          </form>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-16 bg-gri-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-vurgu font-semibold text-siyah mb-2">E-posta</h3>
              <p className="text-sm text-gri-600 font-sans">info@etic7.com</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-vurgu font-semibold text-siyah mb-2">Telefon</h3>
              <p className="text-sm text-gri-600 font-sans">+90 555 123 4567</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-vurgu font-semibold text-siyah mb-2">Adres</h3>
              <p className="text-sm text-gri-600 font-sans">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Iletisim;
