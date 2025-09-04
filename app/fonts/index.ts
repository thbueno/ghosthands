import localFont from 'next/font/local';
import { DM_Mono } from 'next/font/google';

export const myLocalFont = localFont({
  src: './GeneralSans.ttf',
  display: 'swap',
  variable: '--font-general-sans',
});

export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-mono',
});
