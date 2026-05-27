import localFont from 'next/font/local'

export const sfProDisplay = localFont({
  src: [
    { path: './SF-Pro-Display-Light.otf', weight: '300', style: 'normal' },
    { path: './SF-Pro-Display-Regular.otf', weight: '400', style: 'normal' },
    { path: './SF-Pro-Display-Medium.otf', weight: '500', style: 'normal' },
    { path: './SF-Pro-Display-Bold.otf', weight: '700', style: 'normal' },
    { path: './SF-Pro-Display-Heavy.otf', weight: '800', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-sf-pro-display',
})
