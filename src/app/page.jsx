'use client';

import { Flex, Box } from '@chakra-ui/react';
import { Footer, Wave, BlogCard } from '@/components/commom';

import blogData from '../../fakedata/blog.json' assert { type: 'json' };

export default function HomePage() {
  return (
    <Flex direction="column" minH="100vh">
      <Flex flex="1" justify="center" align="center">
        <h1>Home</h1>
      </Flex>

      <BlogWithWave />
      <FooterWithWave />
    </Flex>
  );
}

export const BlogWithWave = () => {
  return (
    <Box>
      <Flex>
        <Wave color="#FFECC8" mirror />
      </Flex>

      <Flex direction="row" wrap="wrap" justify="center" gap={6} p={4} bg="#FFECC8" w="100%">
        <BlogDataCard />
      </Flex>

      <Flex>
        <Wave color="#FFECC8" invert />
      </Flex>
    </Box>
  );
};

const BlogDataCard = () => {
  return (
    <Flex direction="row" wrap="wrap" justify="center" gap={6} maxW="1200px" w="100%">
      {blogData.map((item, index) => (
        <BlogCard {...item} key={index} />
      ))}
    </Flex>
  );
};

const FooterWithWave = () => {
  return (
    <Flex position="relative" w="100%" direction="column">
      <Wave height="200px" position="absolute" top="-200px" />
      <Footer />
    </Flex>
  );
};
