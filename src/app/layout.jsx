'use client';

import '@/styles/globals.scss';
import { Provider, ClientOnly } from '@/components/ui';
import { Header } from '@/components/commom';

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
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
