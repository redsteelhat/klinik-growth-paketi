import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Nora Klinik | Sağlığınıza iyi gelen yer', description: 'Modern, güvenilir ve kolay ulaşılabilir sağlık deneyimi.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="tr"><body>{children}</body></html>; }
