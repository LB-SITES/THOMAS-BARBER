import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Thomas Barber Club | Estilo que deixa sua marca', description: 'Conceito demonstrativo de barbearia premium. Cortes, barba e cuidado em cada detalhe.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
