import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CNOP Soluções | Consultoria, Segurança do Trabalho e RH',
  description:
    'Soluções em consultoria empresarial, segurança no trabalho e gestão de pessoas para apoiar a estrutura e o desenvolvimento da sua empresa.',
  icons: {
    icon: '/cnop-logo.png',
    shortcut: '/cnop-logo.png',
    apple: '/cnop-logo.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

