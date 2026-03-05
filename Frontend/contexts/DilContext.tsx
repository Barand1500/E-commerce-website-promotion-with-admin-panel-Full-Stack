import React, { createContext, useContext, useState, ReactNode } from 'react';
import tr from '../locales/tr.json';
import en from '../locales/en.json';

type Dil = 'tr' | 'en';

interface DilContextType {
  dil: Dil;
  dilDegistir: (yeniDil: Dil) => void;
  t: (anahtar: string) => string;
}

const DilContext = createContext<DilContextType | undefined>(undefined);

const ceviriler: Record<Dil, any> = {
  tr,
  en,
};

export const DilSaglayici: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dil, setDil] = useState<Dil>('tr');

  const dilDegistir = (yeniDil: Dil) => {
    setDil(yeniDil);
  };

  const t = (anahtar: string): string => {
    const anahtarlar = anahtar.split('.');
    let deger: any = ceviriler[dil];
    
    for (const key of anahtarlar) {
      deger = deger?.[key];
    }
    
    return deger || anahtar;
  };

  return (
    <DilContext.Provider value={{ dil, dilDegistir, t }}>
      {children}
    </DilContext.Provider>
  );
};

export const useDil = () => {
  const context = useContext(DilContext);
  if (context === undefined) {
    throw new Error('useDil, DilSaglayici içinde kullanılmalıdır');
  }
  return context;
};
