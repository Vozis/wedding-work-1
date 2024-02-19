import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { mirra, novelist } from '@/libs/fonts';
import React, { Suspense } from 'react';
import Providers from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wedding | Илья и Анастасия',
  description: 'Приглашение на свадьбу к Илье и Анастасии',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicons/favicon-96x96.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '57x57',
      url: '/favicons/apple-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '60x60',
      url: '/favicons/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '76x76',
      url: '/favicons/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '114x114',
      url: '/favicons/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '120x120',
      url: '/favicons/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '144x144',
      url: '/favicons/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '152x152',
      url: '/favicons/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/favicons/apple-icon-180x180.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '180x180',
      url: '/favicons/apple-icon-precomposed.png',
    },
    {
      rel: 'android-touch-icon',
      type: 'image/png',
      sizes: '36x36',
      url: '/favicons/android-icon-36x36.png',
    },
    {
      rel: 'android-touch-icon',
      type: 'image/png',
      sizes: '48x48',
      url: '/favicons/android-icon-48x48.png',
    },
    {
      rel: 'android-touch-icon',
      type: 'image/png',
      sizes: '72x72',
      url: '/favicons/android-icon-72x72.png',
    },
    {
      rel: 'android-touch-icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicons/android-icon-96x96.png',
    },
    {
      rel: 'android-touch-icon',
      type: 'image/png',
      sizes: '144x144',
      url: '/favicons/android-icon-144x144.png',
    },
    {
      rel: 'android-touch-icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicons/android-icon-192x192.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mirra.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
