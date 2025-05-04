import localFont from 'next/font/local'

export const myLocalFont = localFont({
  src: './GeneralSans.ttf',  // Path relative to this file
  display: 'swap',
  variable: '--font-general-sans',
})
