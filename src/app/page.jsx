'use client';

import { Flex, Box, Button, Text, Image } from '@chakra-ui/react';
import { Footer, Wave, BlogCard } from '@/components/commom';
import blogData from '../../fakedata/blog.json' assert { type: 'json' };

export default function HomePage() {
  return (
    <Flex direction="column" minH="100vh">
      <Flex flex="1" justify="center" align="center">
        <h1>Home</h1>
      </Flex>
      <MotivosSection />
      <BlogWithWave />
      <ParceirosSection />
      <FooterWithWave />
    </Flex>
  );
}

const MotivosSection = () => {
  return (
    <Box w="100%" position="relative" zIndex={0}>
      <Flex>
        <Wave color="#F3D8EA" />
      </Flex>

      <Flex
        direction="column"
        wrap="wrap"
        align="center"
        justify="center"
        gap={10}
        p={10}
        bg="#F3D8EA"
        w="100%"
        zIndex={1}
        position="relative"
      >
        <Text
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="500"
          fontFamily="Poppins"
          mb={8}
          color="#730E45"
          textAlign="center"
        >
          Motivos para nos escolher!
        </Text>

  <Flex w="100%" maxW="1000px" h={{ base: '250px', md: '800px' }} mx="auto" gap={4} overflow="visible">
          {/* Imagem esquerda */}
          <Box w="50%" h="100%" position="relative" left="-30%" top="-5%" overflow="visible">
            <Image
              w="850px"
              h="850px"
              maxW="none"
              src="/diferenciais.png"
              alt="Diferenciais"
              style={{ objectFit: 'contain' }}
            />
          </Box>

          {/* Imagem direita */}
          <Box w="50%" h="100%" position="relative" right="-5%" top="-2%" overflow="visible">
            <Image
              w="800px"
              h="800px"
              maxW="none"
              src="/dog-and-cat.png"
              alt="Dog and Cat"
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Flex>
      </Flex>

      <Flex>
        <Wave color="#F3D8EA" invert mirror />
      </Flex>
    </Box>
  );
};

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
            w="400px"
            h="400px"
            src="/logos/sampa.png"
            alt="Sampa"
            fill style={{ objectFit: 'contain' }} />
        </Box>

        <Box
          w={{ base: '200px', md: '387px' }}
          h={{ base: '175px', md: '339px' }}
          position="relative">
          <Image
            w="370px"
            h="370px"
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
