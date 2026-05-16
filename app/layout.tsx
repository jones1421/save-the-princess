import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Save the Princess',
  description: 'A magical, gentle adventure game for young heroes.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
