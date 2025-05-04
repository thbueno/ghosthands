import localFont from 'next/font/local'

export const myLocalFont = localFont({
  src: '../../public/fonts/GeneralSans.ttf',
  display: 'swap',
  // Add variable font settings
  variable: '--font-general-sans', // CSS variable name
})
