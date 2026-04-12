'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import localesData from '../locales/locales.json';

type Language = 'en' | 'zh' | 'ja';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('zh');

  useEffect(() => {
    const savedLang = localStorage.getItem('LANGUAGE') as Language;
    if (savedLang && ['en', 'zh', 'ja'].includes(savedLang)) {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (['en', 'zh', 'ja'].includes(browserLang)) {
        setLanguageState(browserLang as Language);
      }
    }
  }, []);

  // Sync state with HTML lang attribute for AdSense optimization
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('LANGUAGE', lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = (localesData as any)[language];
    
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        // Fallback to English if key missing
        let fallback: any = (localesData as any)['en'];
        for (const fKey of keys) {
          if (fallback && fallback[fKey]) {
            fallback = fallback[fKey];
          } else {
            return path; // Return key path if both fail
          }
        }
        return fallback;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
