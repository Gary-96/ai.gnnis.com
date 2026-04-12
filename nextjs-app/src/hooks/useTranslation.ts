import { useLanguage } from '../context/LanguageContext';

/**
 * Custom hook for accessing translations and language controls.
 * @returns { language, setLanguage, t }
 */
export const useTranslation = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return {
    language,
    setLanguage,
    t
  };
};
