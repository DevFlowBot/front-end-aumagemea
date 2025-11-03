'use client';

import { Flex, Box, Text, Image, Button } from '@chakra-ui/react';

import { Wave, BlogCard } from '@/components/commom';

import blogData from '../../../../../fakedata/blog.json' assert { type: 'json' };

export function BlogSection() {
  return (
    <Box w="100%" position="relative" zIndex={0}>
      <Wave color="#FFECC8" />

      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={{ base: 4, md: 6 }}
        p={{ base: 4, md: 10 }}
        bg="#FFECC8"
        w="100%"
        zIndex={1}
      >
        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '32px' }}
          fontWeight="500"
          color="#222222"
          mb={6}
          textAlign="center"
          fontFamily="Poppins"
        >
          Se informe com AUma Blog
        </Text>

        <Flex
          direction="column"
          align="center"
          gap={{ base: 4, md: 6 }}
          maxW="1200px"
          w="100%"
          position="relative"
          zIndex={1}
        >
          <Image
            src="/patinhas/blog-patinhas-esquerda.png"
            alt="Patinhas Esquerda"
            position="absolute"
            top={{ base: '-30px', md: '-140px' }}
            left={{ base: '-40px', md: '-320px' }}
            w={{ base: '70px', md: '350px', lg: '800px' }}
            opacity="0.8"
            zIndex={0}
            pointerEvents="none"
            display={{ base: 'none', md: 'block' }}
          />
          <Image
            src="/patinhas/blog-patinhas-direita.png"
            alt="Patinhas Direita"
            position="absolute"
            bottom={{ base: '-20px', md: '-65px' }}
            right={{ base: '-30px', md: '-350px' }}
            w={{ base: '80px', md: '380px', lg: '760px' }}
            opacity="0.8"
            zIndex={0}
            pointerEvents="none"
            display={{ base: 'none', md: 'block' }}
          />

          <Flex
            direction="row"
            wrap="wrap"
            justify="center"
            gap={{ base: 4, md: 6 }}
            position="relative"
            zIndex={1}
          >
            {blogData.slice(0, 4).map((item, index) => (
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
              px={{ base: 6, md: 10 }}
              py={{ base: 3, md: 6 }}
              _hover={{
                bg: '#FFECC8',
                color: '#AB678D',
                transform: 'scale(1.05)',
              }}
            >
              VER MAIS
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Wave color="#FFECC8" invert mirror />
    </Box>
  );
}
