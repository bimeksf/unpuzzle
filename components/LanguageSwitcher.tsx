'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(locale: string) {
    router.push(`/${locale}${pathname}`);
  }

  return (
    <div>
      <button onClick={() => switchLocale('cz')}>Čeština</button>
      <button onClick={() => switchLocale('en')}>English</button>
    </div>
  );
}
