'use client';
import { omit } from 'lodash';

import { Flex, Box, Text, Image, Button } from '@chakra-ui/react';
import { Wave, BlogCard } from '@/components/commom';
import blogData from '../../../../../fakedata/blog.json' assert { type: 'json' };

const blogCardStyle = {
  cardStyle: {
    transition: 'all 0.3s ease',
  },
  imageStyle: {
    wrapper: { borderTopRadius: 'md' },
  },
  descriptionStyle: {
    color: '#222222',
    fontFamily: 'Poppins',
  },
  buttonStyle: {
    bg: '#AB678D',
    color: '#FFFFFF',
    _hover: { bg: '#995c7b' },
  },
  iconStyle: {
    color: 'black',
    wrapper: { bg: 'white' },
  },
};

export function BlogSection() {
  return (
    <Box w="100%" position="relative" zIndex={0}>
      <Wave color="#FFECC8" />

      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={{ base: 4, md: 6 }}
        p={{ base: 4, sm: 6, md: 10 }}
        bg="#FFECC8"
        w="100%"
        zIndex={1}
      >
        {/* Título */}
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '32px' }}
          fontWeight="500"
          color="#222222"
          mb={{ base: 4, md: 6 }}
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
          {/* Imagens decorativas */}
          <Image
            src="/patinhas/blog-patinhas-esquerda.png"
            alt="Patinhas Esquerda"
            position="absolute"
            top={{ base: '-20px', sm: '-60px', md: '-140px' }}
            left={{ base: '-20px', sm: '-120px', md: '-320px' }}
            w={{ base: '50px', sm: '200px', md: '350px', lg: '800px' }}
            opacity="0.8"
            zIndex={0}
            pointerEvents="none"
            display={{ base: 'none', md: 'block' }}
          />
          <Image
            src="/patinhas/blog-patinhas-direita.png"
            alt="Patinhas Direita"
            position="absolute"
            bottom={{ base: '-10px', sm: '-40px', md: '-65px' }}
            right={{ base: '-20px', sm: '-180px', md: '-350px' }}
            w={{ base: '60px', sm: '220px', md: '380px', lg: '760px' }}
            opacity="0.8"
            zIndex={0}
            pointerEvents="none"
            display={{ base: 'none', md: 'block' }}
          />

          {/* Cards */}
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            wrap="wrap"
            justify="center"
            gap={{ base: 4, md: 6 }}
            position="relative"
            zIndex={1}
          >
            {blogData.slice(0, 4).map((item, index) => (
              <BlogCard
                {...omit(item, ['data', 'tempo_gasto_leitura'])}
                key={index}
                {...blogCardStyle}
              />
            ))}
          </Flex>

          {/* Botão */}
          <Box textAlign="center" my={{ base: 6, md: 8 }}>
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
              px={{ base: 4, sm: 6, md: 10 }}
              py={{ base: 2, sm: 3, md: 6 }}
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
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
