'use client';

import { Flex, Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Footer, Wave, BlogCard } from '@/components/commom';
import blogData from '../../fakedata/blog.json' assert { type: 'json' };

export default function HomePage() {
  return (
    <Flex direction="column" minH="100vh">
      <Flex flex="1" justify="center" align="center">
        <h1>Home</h1>
      </Flex>

      <BlogWithWave />
      <ParceirosSection />
      <FooterWithWave />
    </Flex>
  );
}

export const BlogWithWave = () => {
  return (
    <Box w="100%" position="relative" zIndex={0}>
      <Flex>
        <Wave color="#FFECC8" />
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
        <Wave color="#FFECC8" invert mirror />
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
          px={10} 
          py={6}
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

const ParceirosSection = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="90vh"
      py={{ base: 24, md: 45 }}
      mt={{ base: -8, md: -10 }}
      mb={{ base: 12, md: 40 }}
    >
      <Text
        fontSize={{ md: '40px' }}
        fontWeight="500"
        mb={12}
        fontFamily="Poppins"
        color="#8D3767"
      >
        Parceiros
      </Text>

      <Flex
        wrap="wrap"
        justify="center"
        gap={{ base: 6, md: 48 }}
        align="center"
      >
        <Box
          w={{ base: '200px', md: '387px' }}
          h={{ base: '175px', md: '339px' }}
          position="relative">
          <Image
            src="/logos/sampa.png"
            alt="Sampa"
            fill style={{ objectFit: 'contain' }} />
        </Box>

        <Box
          w={{ base: '200px', md: '387px' }}
          h={{ base: '175px', md: '339px' }}
          position="relative">
          <Image
            src="/logos/artemys.png"
            alt="Artemys"
            fill style={{ objectFit: 'contain' }} />
        </Box>
      </Flex>
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
