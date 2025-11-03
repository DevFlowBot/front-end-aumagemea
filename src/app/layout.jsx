'use client';

import '@/styles/globals.scss';
import { Provider, ClientOnly } from '@/components/ui';
import { Header } from '@/components/commom';

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" style={{ width: '100%', height: '100%' }}>
      <body
        style={{
          width: '100%',
          minHeight: '100vh',
          overflowX: 'hidden',
          margin: 0,
          padding: 0,
        }}
      >
        <ClientOnly>
          <Provider>
            <Header />
            <main style={{ width: '100%' }}>{children}</main>
          </Provider>
        </ClientOnly>
      </body>
    </html>
  );
}
