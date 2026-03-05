
import React from 'react';
import { 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Repeat, 
  Database,
  Languages,
  Banknote,
  BookOpen,
  LayoutGrid
} from 'lucide-react';
import { Feature, PricingPlan, Testimonial } from './types';

export const MAIN_FEATURES: Feature[] = [
  {
    id: 'b2c',
    title: 'B2C E-Ticaret Yazılımı',
    description: 'Doğrudan tüketiciye satış için optimize edilmiş, modern ve hızlı arayüzler.',
    icon: <ShoppingBag className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'b2b',
    title: 'B2B E-Ticaret Çözümü',
    description: 'Bayi ağınızı yönetin, özel fiyatlandırma ve kapalı devre satış sistemleri kurun.',
    icon: <Repeat className="w-6 h-6 text-indigo-600" />
  },
  {
    id: 'erp',
    title: 'Muhasebe Entegrasyonu',
    description: 'Logo, Mikro, Zirve gibi popüler muhasebe programları ile tam entegre çalışın.',
    icon: <Database className="w-6 h-6 text-emerald-600" />
  },
  {
    id: 'global',
    title: 'Çoklu Dil & Para Birimi',
    description: 'Global pazarlara açılın. Sınırsız dil ve para birimi desteği ile dünyaya satın.',
    icon: <Languages className="w-6 h-6 text-amber-600" />
  }
];

export const ALL_FEATURES = [
  {
    category: "Satış & Mağaza",
    items: [
      { title: "Dijital Mağaza", desc: "Saniyeler içinde açılan yüksek performanslı vitrinler.", icon: <LayoutGrid className="w-5 h-5" /> },
      { title: "Katalog Yazılımı", desc: "Ürünlerinizi interaktif ve şık kataloglarla sunun.", icon: <BookOpen className="w-5 h-5" /> },
      { title: "Online Sipariş", desc: "Hızlı ve güvenli sipariş toplama altyapısı.", icon: <Zap className="w-5 h-5" /> }
    ]
  },
  {
    category: "Ödeme & Tahsilat",
    items: [
      { title: "Online Tahsilat", desc: "Kredi kartı, havale ve alternatif ödeme yöntemleri.", icon: <Banknote className="w-5 h-5" /> },
      { title: "Entegre Çözümler", desc: "Tüm bankalar ve ödeme sistemleri ile hazır paket.", icon: <ShieldCheck className="w-5 h-5" /> },
      { title: "Gelişmiş Analiz", desc: "Satış verilerinizi anlık takip edin.", icon: <BarChart3 className="w-5 h-5" /> }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'B2C Başlangıç',
    price: '1.250',
    period: 'Ay',
    description: 'Online satışa yeni başlayan butik işletmeler için ideal.',
    features: [
      '250 Ürün Kapasitesi',
      'Modern B2C Temaları',
      'Sanal POS Entegrasyonu',
      'Mobil Uyumlu Vitrin',
      'Temel SEO Araçları'
    ]
  },
  {
    id: 'pro',
    name: 'B2B & B2C Pro',
    price: '2.450',
    period: 'Ay',
    description: 'Hem bayi hem de son kullanıcıya satış yapmak isteyenlere.',
    isPopular: true,
    features: [
      'Sınırsız Ürün & Katalog',
      'B2B Bayi Alt Modülü',
      'Muhasebe Entegrasyonu (API)',
      'Çoklu Dil & Para Birimi',
      'Pazaryeri Entegrasyonları'
    ]
  },
  {
    id: 'enterprise',
    name: 'Kurumsal Özel',
    price: 'Teklif Alın',
    period: '',
    description: 'Büyük ölçekli projeler ve özel yazılım ihtiyaçları.',
    features: [
      'Tam Özelleştirilebilir Altyapı',
      'Özel Sunucu & CDN',
      'Gelişmiş ERP Entegrasyonları',
      '7/24 Öncelikli Destek',
      'Mobil Uygulama (iOS/Android)'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    role: 'CEO',
    company: 'Global Teknoloji',
    content: 'B2B bayi yönetimimizi Etic7 altyapısına taşıdıktan sonra operasyonel yükümüz %60 azaldı.',
    avatar: 'https://i.pravatar.cc/150?u=ahmet'
  },
  {
    id: '2',
    name: 'Selin Aktaş',
    role: 'E-Ticaret Müdürü',
    company: 'Moda Dünyası',
    content: 'Muhasebe entegrasyonu sayesinde stok hatası yapma riskimiz tamamen ortadan kalktı.',
    avatar: 'https://i.pravatar.cc/150?u=selin'
  }
];

export const REFERENCE_LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Ebay_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_2015_logo.svg"
];
