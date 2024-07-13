import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';
import { ClerkProvider } from '@clerk/nextjs';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <head>
        {/* Aquí puedes incluir tus metatags y otros elementos del head */}
      </head>
      <body>
        <ClerkProvider>
          <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
