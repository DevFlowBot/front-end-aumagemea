'use client';

import {
  Flex,
  Heading,
  Button,
  Image,
  HStack,
  Text,
  Collapse,
  VStack,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Início' },
  { href: '/blog', label: 'Blog' },
  { href: '/adote', label: 'AUdote' },
  { href: '/parceiros', label: 'Parceiros' },
  { href: '/voluntariados', label: 'Voluntariados' },
  { href: '/eventos', label: 'Eventos' },

];

export function DesktopHeader() {
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
      transition="box-shadow 0.3s"
      p={0}
    >
      <Flex
        maxW="1193px"
        w="100%"
        p={{ base: 3, sm: 4, md: 4 }}
        mt={{ base: 4, md: 6 }}
        mb={{ base: 4, md: 6 }}
        bg="white"
        align="center"
        justify="space-between"
        borderRadius="100px"
        boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
        wrap="wrap"
      >
        {/* Logo */}
        <Heading size="md" flexShrink={0}>
          <Link href="/">
            <Image
              src="logos/aumagemea.png"
              alt="logo"
              maxW={{ base: '35px', sm: '40px', md: '49px', lg: '63px' }}
              h="auto"
              objectFit="contain"
              ml={{ base: 2, md: 4 }}
            />
          </Link>
        </Heading>

        {/* Menu Links */}
        <HStack
          spacing={{ base: 2, sm: 3, md: 3 }}
          flexWrap="wrap"
          justify={{ base: 'center', md: 'flex-start' }}
          my={{ base: 2, md: 0 }}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Text
                color="#730E45"
                cursor="pointer"
                fontSize={{ base: '14px', sm: '15px', md: '16px' }}
              >
                {link.label}
              </Text>
            </Link>
          ))}
        </HStack>

        {/* Botões */}
        <HStack spacing={{ base: 1, sm: 2, md: 2 }} flexWrap="wrap" my={{ base: 2, md: 0 }}>
          <Link href="/cadastro">
            <Text
              color="#730E45"
              cursor="pointer"
              fontSize={{ base: '14px', sm: '15px', md: '16px' }}
            >
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
              px={{ base: 3, sm: 4, md: 6 }}
              py={{ base: 1, sm: 2, md: 3 }}
              fontSize={{ base: '12px', sm: '14px', md: '16px' }}
            >
              Login
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}

function MobileHeader() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex as="header" w="100%" direction="column" zIndex="1000" position="fixed" top={0} left={0}>
      <Flex
        maxW="1193px"
        w="100%"
        mx="auto"
        p={3}
        align="center"
        justify="space-between"
        bg="transparent"
      >
        {/* Logo botão */}
        <Heading size="md" flexShrink={0} onClick={onToggle} cursor="pointer">
          <Image
            src="logos/aumagemea.png"
            alt="logo"
            maxW={{ base: '35px', sm: '40px' }}
            h="auto"
            objectFit="contain"
          />
        </Heading>
      </Flex>

      {/* Menu vertical */}
      <Collapse in={isOpen} animateOpacity>
        <VStack spacing={4} p={4} align="stretch" bg="transparent">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Text color="#730E45" fontSize="16px">
                {link.label}
              </Text>
            </Link>
          ))}
          <Link href="/cadastro">
            <Text color="#730E45" fontSize="16px">
              Cadastre-se
            </Text>
          </Link>
          <Link href="/login">
            <Button borderRadius="90px" bg="#F29F05" color="#730E45" _hover={{ bg: '#d6900dff' }}>
              Login
            </Button>
          </Link>
        </VStack>
      </Collapse>
    </Flex>
  );
}

export function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
