import localFont from 'next/font/local'
import { DM_Mono } from 'next/font/google'

export const myLocalFont = localFont({
  src: './GeneralSans.ttf',
  display: 'swap',
  variable: '--font-general-sans',
})

export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-mono',
})

export const sfMono = localFont({
  src: [
    { path: './SFMono-Light.otf', weight: '300', style: 'normal' },
    { path: './SFMono-LightItalic.otf', weight: '300', style: 'italic' },
    { path: './SFMono-Regular.otf', weight: '400', style: 'normal' },
    { path: './SFMono-RegularItalic.otf', weight: '400', style: 'italic' },
    { path: './SFMono-Medium.otf', weight: '500', style: 'normal' },
    { path: './SFMono-MediumItalic.otf', weight: '500', style: 'italic' },
    { path: './SFMono-Semibold.otf', weight: '600', style: 'normal' },
    { path: './SFMono-SemiboldItalic.otf', weight: '600', style: 'italic' },
    { path: './SFMono-Bold.otf', weight: '700', style: 'normal' },
    { path: './SFMono-BoldItalic.otf', weight: '700', style: 'italic' },
    { path: './SFMono-Heavy.otf', weight: '800', style: 'normal' },
    { path: './SFMono-HeavyItalic.otf', weight: '800', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-sf-mono',
})
