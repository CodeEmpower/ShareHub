import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';
import { ClerkProvider } from '@clerk/nextjs';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <ClerkProvider>
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
    </ClerkProvider>
  );
};

export default RootLayout;