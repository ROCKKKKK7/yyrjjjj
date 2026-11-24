import type { Metadata } from 'next';
import { IBM_Plex_Mono, Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin', 'cyrillic'],
    weight: ['700', '800']
});

const plexMono = IBM_Plex_Mono({
    variable: '--font-plex-mono',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600']
});

export const metadata: Metadata = {
    title: 'Карточки товаров',
    description: 'Практическая работа: стилизация карточки товара с помощью Tailwind CSS'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={`${montserrat.variable} ${plexMono.variable} bg-page font-mono text-ink antialiased`}>
                {children}
            </body>
        </html>
    );
}
