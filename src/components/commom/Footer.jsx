'use client';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Icon,
  VStack,
  HStack,
  Link,
  Image,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box
      as="footer"
      w="100%"
      bg="#222222"
      color="white"
      pt={{ base: 8, md: 15 }}
      pb={{ base: 8, md: 25 }}
      overflow="hidden"
    >
      <Flex
        maxW="1440px"
        mx="auto"
        px={{ base: 4, md: 11 }}
        justify="space-between"
        align="flex-start"
        flexWrap="wrap"
        position="relative"
        gap={{ base: 8, md: 0 }}
      >
        {/* Logo + slogan */}
        <VStack spacing={{ base: 3, md: 3 }} align="center" w={{ base: '100%', md: '378px' }}>
          <Image
            src="logos/aumagemea-white.png"
            alt="Logo AUmaGêmea"
            w={{ base: '120px', md: '150px' }}
            h={{ base: '90px', md: '115px' }}
            objectFit="cover"
          />
          <Text
            fontWeight="700"
            fontSize={{ base: '13px', md: '15px' }}
            lineHeight="25px"
            textAlign="center"
          >
            Um novo AUmigo, uma nova paixão.
          </Text>
        </VStack>

        {/* Páginas */}
        <VStack
          mt={{ base: 4, md: -5 }}
          align={{ base: 'center', md: 'flex-start' }}
          spacing={2}
          w={{ base: '45%', md: 'auto' }}
        >
          <Text fontFamily="Poppins" fontWeight="500" fontSize={{ base: '16px', md: '18px' }}>
            Páginas
          </Text>
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={1}>
            {['Início', 'Blog', 'Adote', 'Parceiros', 'Sobre nós'].map((item) => (
              <Link
                key={item}
                fontFamily="Open Sans"
                fontSize={{ base: '13px', md: '15px' }}
                _hover={{ textDecoration: 'underline' }}
              >
                {item}
              </Link>
            ))}
          </VStack>
        </VStack>

        {/* Fale Conosco */}
        <VStack
          mt={{ base: 4, md: -5 }}
          align={{ base: 'center', md: 'flex-start' }}
          spacing={2}
          w={{ base: '45%', md: 'auto' }}
        >
          <Text fontFamily="Poppins" fontWeight="500" fontSize={{ base: '16px', md: '18px' }}>
            Fale Conosco
          </Text>
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={1}>
            {['Contato', 'Dúvidas Frequentes', 'Parceiros', 'ONGs'].map((item) => (
              <Link
                key={item}
                fontFamily="Open Sans"
                fontSize={{ base: '13px', md: '15px' }}
                _hover={{ textDecoration: 'underline' }}
              >
                {item}
              </Link>
            ))}
          </VStack>
        </VStack>

        {/* Newsletter + Social */}
        <VStack
          mt={{ base: 6, md: -5 }}
          align="center"
          spacing={{ base: 4, md: 5 }}
          w={{ base: '100%', md: '420px' }}
        >
          <VStack spacing={3}>
            <Text
              fontFamily="Poppins"
              fontWeight="500"
              fontSize={{ base: '16px', md: '18px' }}
              textAlign="center"
            >
              Fique por dentro das nossas novidades
            </Text>

            <Flex
              bg="white"
              borderRadius="100px"
              p={{ base: '3px 3px 3px 12px', md: '5px 5px 5px 18px' }}
              align="center"
              justify="space-between"
              w="100%"
            >
              <Input
                placeholder="SEU EMAIL"
                border="none"
                fontFamily="Poppins"
                fontWeight="600"
                fontSize={{ base: '12px', md: '15px' }}
                color="rgba(34,34,34,0.5)"
                _placeholder={{ color: 'rgba(34,34,34,0.5)' }}
                _focusVisible={{ outline: 'none' }}
              />
              <Button
                bg="#222222"
                borderRadius="100px"
                px={{ base: 4, md: 7 }}
                h={{ base: '36px', md: '42px' }}
                color="white"
                fontFamily="Poppins"
                fontWeight="600"
                fontSize={{ base: '12px', md: '15px' }}
                textTransform="uppercase"
                _hover={{ bg: 'gray.700' }}
              >
                Enviar
              </Button>
            </Flex>
          </VStack>

          <HStack spacing={{ base: 4, md: 7 }}>
            <IconWrapper icon={FaLinkedinIn} />
            <IconWrapper icon={FaInstagram} />
            <IconWrapper icon={FaGithub} />
            <IconWrapper icon={FaEnvelope} />
          </HStack>
        </VStack>
      </Flex>

      {/* LINHA DIVISÓRIA */}
      <Box
        w={{ base: '95%', md: '85%' }}
        mx="auto"
        my={8}
        borderTop="1.5px solid rgba(255,255,255,0.25)"
      />

      {/* COPYRIGHT / LINKS */}
      <Flex
        maxW="1440px"
        mx="auto"
        px={{ base: 4, md: 10 }}
        justify={{ base: 'center', md: 'space-between' }}
        align="center"
        flexWrap="wrap"
        gap={{ base: 4, md: 0 }}
      >
        <Text
          fontFamily="Open Sans"
          fontSize={{ base: '13px', md: '15px' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          © 2025 AumaGêmea. Todos os direitos reservados.
        </Text>

        <HStack spacing={{ base: 4, md: 6 }}>
          <Link fontFamily="Open Sans" fontSize={{ base: '13px', md: '15px' }}>
            Termos de Uso
          </Link>
          <Link fontFamily="Open Sans" fontSize={{ base: '13px', md: '15px' }}>
            Política de Privacidade
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

// Subcomponente para ícones sociais
const IconWrapper = ({ icon }) => (
  <Flex
    w={{ base: '36px', md: '42px' }}
    h={{ base: '36px', md: '42px' }}
    bg="white"
    justify="center"
    align="center"
    borderRadius="full"
    boxShadow="inset 0px -2px 4px rgba(0,0,0,0.25)"
    _hover={{ transform: 'scale(1.1)', transition: '0.2s' }}
  >
    <Icon as={icon} color="#222222" boxSize={{ base: 4, md: 5 }} />
  </Flex>
);
