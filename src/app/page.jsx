'use client';

import { Flex, Box, Button, Text } from '@chakra-ui/react';
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
    <Box w="100%" position="relative" zIndex={0}>
      <Flex>
        <Wave color="#FFECC8" mirror />
      </Flex>

      <Flex
        direction="column"
        wrap="wrap"
        align="center"
        justify="center"
        gap={6}
        p={4}
        bg="#FFECC8"
        w="100%"
        zIndex={1}
      >
        <Text
          fontSize="32px"
          fontWeight="500"
          color="#222222"
          mb={6}
          textAlign="center"
          fontFamily="Poppins"
        >
          Se informe com AUma Blog
        </Text>

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
    <Flex
      direction="column"
      align="center"
      gap={6}
      maxW="1200px"
      w="100%"
      position="relative"
      zIndex={1}
    >
      <Flex direction="row" wrap="wrap" justify="center" gap={6}>
        {blogData.slice(0, 6).map((item, index) => (
          <BlogCard {...item} key={index} />
        ))}
      </Flex>

      <Box textAlign="center" my={8}>
        <Button
          variant="outline"
          href="/blog"
          as="a"
          borderColor="#AB678D"
          borderWidth="3px"
          boxShadow="md"
          color="#AB678D"
          borderRadius="full"
          size="lg"
          px={8}
          _hover={{
            bg: '#FFECC8',
            color: '#AB678D',
            transform: 'scale(1.05)',
            boxShadow: 'lg',
          }}
        >
          VER MAIS
        </Button>
      </Box>
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
