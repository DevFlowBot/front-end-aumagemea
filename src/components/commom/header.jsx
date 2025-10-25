'use client';

import { Flex, Heading, Button, Image, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Flex
      as="header"
      maxW="1193px"
      p={5}
      mt={10}
      mx="auto"
      align="center"
      justify="space-between"
      bg="white"
      borderRadius="100px"
      boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
    >
      <Heading size="md">
        <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          maxW={{ base: '49px', md: '49px', lg: '64px' }}
          h="auto"
          objectFit="contain"
        />
        </Link>
      </Heading>

      <HStack spacing={3}>
        <Link href="/">
          <Text color="#730E45">Inicio</Text>
        </Link>

        <Link href="/blog">
          <Text color="#730E45">Blog</Text>
        </Link>
        
        <Link href="/adote">
          <Text color="#730E45">Audote</Text>
        </Link>
        
        <Link href="/parceiros">
          <Text color="#730E45">Parceiros</Text>
        </Link>
      </HStack>

      <HStack spacing={3}>
        <Link href="/cadastro">
          <Text color="#730E45" cursor="pointer">
            Cadastre-se
          </Text>
        </Link>

        <Link href="/login">
          <Button
            borderRadius="100px"
            bg="#F29F05"
            color="#730E45"
            variant="solid"
            _hover={{ bg: '#d6900dff' }}
          >
            Login
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
