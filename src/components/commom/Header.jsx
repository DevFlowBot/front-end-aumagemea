'use client';

import { Flex, Heading, Button, Image, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Se rolou para baixo -> esconder header
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowHeader(false);
      }
      // Se rolou para cima -> mostrar header
      else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="1000"
      justify="center"
      transition="transform 0.4s ease, opacity 0.4s ease"
      transform={showHeader ? 'translateY(0)' : 'translateY(-120%)'}
      opacity={showHeader ? 1 : 0}
      p={0}
    >
      <Flex
        maxW="1193px"
        w="100%"
        p={4}
        mt={6}
        mb={6}
        bg="white"
        align="center"
        justify="space-between"
        borderRadius="100px"
        boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
        wrap="wrap"
      >
        <Heading size="md" flexShrink={0}>
          <Link href="/">
            <Image
              src="logos/aumagemea.png"
              alt="logo"
              maxW={{ base: '40px', md: '49px', lg: '63px' }}
              h="auto"
              objectFit="contain"
              ml={4}
            />
          </Link>
        </Heading>

        <HStack
          spacing={3}
          flexWrap="wrap"
          justify={{ base: 'center', md: 'flex-start' }}
          my={{ base: 2, md: 0 }}
        >
          <Link href="/">
            <Text color="#730E45" cursor="pointer">
              Inicio
            </Text>
          </Link>
          <Link href="/blog">
            <Text color="#730E45" cursor="pointer">
              Blog
            </Text>
          </Link>
          <Link href="/adote">
            <Text color="#730E45" cursor="pointer">
              Adote
            </Text>
          </Link>
          <Link href="/parceiros">
            <Text color="#730E45" cursor="pointer">
              Parceiros
            </Text>
          </Link>
        </HStack>

        <HStack spacing={2} flexWrap="wrap" my={{ base: 2, md: 0 }}>
          <Link href="/cadastro">
            <Text color="#730E45" cursor="pointer">
              Cadastre-se
            </Text>
          </Link>
          <Link href="/login">
            <Button
              borderRadius="90px"
              bg="#F29F05"
              color="#730E45"
              variant="solid"
              _hover={{ bg: '#d6900dff' }}
              mr={4}
            >
              Login
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
