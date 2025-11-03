'use client';

import { Flex } from '@chakra-ui/react';

import {
  AdoteSection,
  BlogSection,
  FooterHome,
  CardSection,
  MotivoSection,
  ParceirosSection,
} from './(home)/components';

export default function HomePage() {
  return (
    <Flex direction="column" minH="100vh" w="100%" maxW="100vw" overflowX="hidden">
      <CardSection />
      <MotivoSection />
      <AdoteSection />
      <BlogSection />
      <ParceirosSection />
      <FooterHome />
    </Flex>
  );
}
