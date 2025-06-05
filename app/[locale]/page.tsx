import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div>
      <h1>{t('Home.title')}</h1>
      <p>{t('Home.description')}</p>
      <button>{t('Button.login')}</button>
    </div>
  );
}
