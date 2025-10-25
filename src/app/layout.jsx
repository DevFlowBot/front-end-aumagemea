'use client';

import '@/styles/globals.scss';
import { Provider } from '@/components/ui/Provider';
import { ClientOnly } from '@/components/ui/HydrationGuard';
import { Header } from '@/components/commom/header';

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <Provider>
            <Header />
            {children}
          </Provider>
        </ClientOnly>
      </body>
    </html>
  );
}
