'use client';

import { useState } from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import { FooterHome } from '../(home)/components';
import { BlogCard, SearchInput } from '@/components/commom';
import blogData from '../../../../fakedata/blog.json' assert { type: 'json' };

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
      bg="white"
      overflow="hidden"
      pt={{ base: '200px', md: '200px' }}
      pb={{ base: '200px', md: '200px' }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={{ base: 4, md: 6 }}
        px={{ base: 4, sm: 6, md: 10 }}
        w="100%"
      >
        <Box textAlign="center" mb="6">
          <Text
            fontWeight="700"
            fontSize="40px"
            lineHeight="51px"
            color="#000000"
            textAlign="center"
          >
            AUma Blog
          </Text>

          <Text
            fontWeight="500"
            fontSize="24px"
            lineHeight="30px"
            color="#000000"
            textAlign="center"
            mt="0"
          >
            Um blog para te informar sobre o mundo animal
          </Text>
        </Box>
        <Box mb="6">
          <SearchInput />
        </Box>

        <Flex direction="column" align="center" gap={{ base: 4, md: 6 }} maxW="1200px" w="100%">
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            wrap="wrap"
            justify="center"
            gap={{ base: 4, md: 6 }}
          >
            {visiblePosts.map((item, index) => (
              <BlogCard {...item} hover key={index} {...blogCardStyle} />
            ))}
          </Flex>

          {hasMore && (
            <Box textAlign="center" my={{ base: 6, md: 8 }}>
              <Button
                onClick={handleLoadMore}
                bg="#FFFFFF"
                border="1px solid rgba(34, 34, 34, 0.5)"
                boxShadow="0px 2px 6.7px rgba(0, 0, 0, 0.25)"
                borderRadius="10px"
                color="rgba(34, 34, 34, 0.5)"
                fontSize="16px"
                display="flex"
                flexDirection="row"
                px="50px"
                py="30px"
                gap="10px"
                transition="all 0.2s ease"
                _hover={{
                  bg: '#222222',
                  color: '#FFFFFF',
                  borderColor: '#222222',
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
