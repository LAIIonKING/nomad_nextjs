import { Metadata } from 'next';
import Navigation from './components/navigation';
import './styles/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movie',
    default: 'Loading...',
  },
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ paddingTop: '100px' }}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
