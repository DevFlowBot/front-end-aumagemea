'use client';

import { Flex, Heading, Button, Image, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW="1193px"
      p={4}
      mt={6}
      mx="auto"
      align="center"
      justify="space-between"
      bg="white"
      borderRadius="100px"
      boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
      wrap="wrap"
    >
      <Heading size="md" flexShrink={0}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            maxW={{ base: '40px', md: '49px', lg: '63px' }} // responsivo
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
            Audote
          </Text>
        </Link>
        <Link href="/parceiros">
          <Text color="#730E45" cursor="pointer">
            Parceiros
          </Text>
        </Link>
      </HStack>

      <HStack spacing={2} flexWrap="wrap" my={{ base: 2, md: 0 }} >
        <Link href="/cadastro" >
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
  );
}
