'use client';

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white', // garante fundo branco
        color: '#858585',
      },
    },
  },
});
