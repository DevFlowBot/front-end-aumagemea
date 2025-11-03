'use client';

import { Flex } from '@chakra-ui/react';

import { Footer, Wave } from '@/components/commom';

export function FooterHome() {
  return (
    <Flex position="relative" w="100%" direction="column">
      <Wave height="200px" position="absolute" top="-200px" />
      <Footer />
    </Flex>
  );
}
