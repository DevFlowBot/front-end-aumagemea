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
    <Flex direction="column" minH="100vh" overflowX="hidden">
      <CardSection />
      <MotivoSection />
      <AdoteSection />
      <BlogSection />
      <ParceirosSection />
      <FooterHome />
    </Flex>
  );
}
