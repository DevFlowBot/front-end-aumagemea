'use client';

import { useState } from 'react';
import { Flex, Box, Text, Button, Image } from '@chakra-ui/react';

import { FooterHome } from '../(home)/components';
import { BlogCard, SearchInput } from '@/components/commom';
import blogData from '../../../../fakedata/blogPagina.json' assert { type: 'json' };

export default function BlogPage() {
  return (
    <Flex direction="column" minH="100vh" w="100%" maxW="100vw" overflowX="hidden" bg="white">
      <BlogSection />
      <FooterHome />
    </Flex>
  );
}

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
    bg: 'white',
    color: 'black',
  },
  iconStyle: {
    color: 'black',
    wrapper: { bg: 'white' },
  },
};

export function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visiblePosts = blogData.slice(0, visibleCount);
  const hasMore = visibleCount < blogData.length;

  return (
    <Box
      as="section"
      w="100%"
      position="relative"       
      bg="white"
      overflow="hidden"
      pt={{ base: '200px', md: '200px' }}
      pb={{ base: '200px', md: '200px' }}
    >

      <Image
        src="/blog/blogPag/formaOrganica.png"
        alt="forma esquerda"
        position="absolute"
        left={{ base: '-40px', md: '-2px' }}
        top={{ base: '80px', md: '100px' }}
        w={{ base: "180px", md: "330px", lg: "250px" }}
        zIndex={0}
        pointerEvents="none"
      />

      <Image
        src="/blog/blogPag/formaOrganica2.png"
        alt="forma direita"
        position="absolute"
        right={{ base: '-30px', md: '-10px' }}
        bottom={{ base: '20px', md: '150px' }}
        w={{ base: "180px", md: "330px", lg: "380px" }}
        zIndex={0}
        pointerEvents="none"
      />

      <Image
        src="/blog/blogPag/patinhasBlog.png"
        alt="patinhas topo"
        position="absolute"
        top={{ base: "40px", md: "-160px" }}
        right={{ base: "40px", md: "-80px" }}
        w="clamp(300px, 40vw, 900px)"
        zIndex={0}
        pointerEvents="none"
      />

      <Image
        src="/blog/blogPag/patinhasBlog2.png"
        alt="patinhas baixo"
        position="absolute"
        bottom={{ base: "40px", md: "-260px" }}
        left={{ base: "40px", md: "-480px" }}
        w="clamp(800px, 120vw, 1500px)"
        zIndex={0}
        pointerEvents="none"
      />

      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={{ base: 4, md: 6 }}
        px={{ base: 4, sm: 6, md: 10 }}
        w="100%"
        position="relative"
        zIndex={2}         
      >
        <Box textAlign="center" mb="6">
          <Text fontWeight="700" fontSize="40px" lineHeight="51px" color="#000" textAlign="center">
            Blog do AUma
          </Text>

          <Text fontWeight="500" fontSize="24px" lineHeight="30px" color="#000" textAlign="center" mt="0">
            Nosso blog para te informar sobre o mundo animal
          </Text>
        </Box>

        <Box mb="6">
          <SearchInput />
        </Box>

        <Flex direction="column" align="center" gap={{ base: 4, md: 6 }} maxW="1200px" w="100%">
          <Flex direction={{ base: 'column', sm: 'row' }} wrap="wrap" justify="center" gap={{ base: 4, md: 6 }}>
            {visiblePosts.map((item, index) => (
              <BlogCard {...item} hover key={index} {...blogCardStyle} />
            ))}
          </Flex>

          {hasMore && (
            <Box textAlign="center" my={{ base: 6, md: 8 }}>
              <Button
                onClick={handleLoadMore}
                bg="#FFFFFF"
                border="1px solid #730E45"
                boxShadow="0px 2px 6.7px"
                borderRadius="10px"
                color="#730E45"
                fontSize="16px"
                px="50px"
                py="25px"
                transition="all 0.2s ease"
                _hover={{
                  color: '#FFFFFF',
                  bg: '#730E45',
                  transform: 'scale(1.05)',
                }}
                _focus={{ boxShadow: 'none' }}
              >
                VER MAIS
              </Button>
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

