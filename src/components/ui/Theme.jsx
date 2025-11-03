import { extendTheme } from '@chakra-ui/react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  fonts: {
    heading: poppins.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  fontSizes: {
    md: '16px',
  },
  styles: {
    global: {
      body: {
        bg: '#EFEFEF',
        color: '#222222',
      },
    },
  },
});
