'use client';
import FormCompatibilidade from '../../../components/commom/FormCompatibilidade';
import { Open_Sans } from 'next/font/google';
import { Box } from '@chakra-ui/react';

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function FormCompatibilidadePage() {
  return (
    <Box fontFamily={openSans.style.fontFamily}>
      <FormCompatibilidade />
    </Box>
  );
}
