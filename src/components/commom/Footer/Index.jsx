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
      position="relative"
      w="100%"
      bg="#222222"
      color="white"
      pt="15px"
      pb="25px"
      overflow="hidden"
    >
      <Flex
        maxW="1440px"
        mx="auto"
        px={11}
        justify="space-between"
        align="flex-start"
        flexWrap="wrap"
        position="relative"
      >
        <VStack spacing={3} align="center" w="378px">
          <Image
            src="logos/aumagemea-white.png"
            alt="Logo AUmaGêmea"
            w="150px"
            h="115px"
            objectFit="cover"
          />
          <Text fontWeight="700" fontSize="15px" lineHeight="25px" textAlign="center">
            Um novo AUmigo, uma nova paixão.
          </Text>
        </VStack>

        <VStack mt="-20px" align="flex-start" spacing={2}>
          <Text fontFamily="Poppins" fontWeight="500" fontSize="18px">
            Páginas
          </Text>
          <VStack align="flex-start" spacing={2}>
            {['Início', 'Blog', 'Adote', 'Parceiros', 'Sobre nós'].map((item) => (
              <Link
                key={item}
                fontFamily="Open Sans"
                fontSize="15px"
                _hover={{ textDecoration: 'underline' }}
              >
                {item}
              </Link>
            ))}
          </VStack>
        </VStack>

        <VStack mt="-20px" align="flex-start" spacing={2}>
          <Text fontFamily="Poppins" fontWeight="500" fontSize="18px">
            Fale Conosco
          </Text>
          <VStack align="flex-start" spacing={2}>
            {['Contato', 'Dúvidas Frequentes', 'Parceiros', 'ONGs'].map((item) => (
              <Link
                key={item}
                fontFamily="Open Sans"
                fontSize="15px"
                _hover={{ textDecoration: 'underline' }}
              >
                {item}
              </Link>
            ))}
          </VStack>
        </VStack>

        <VStack mt="-20px" align="center" spacing={5} w="420px">
          <VStack spacing={3}>
            <Text fontFamily="Poppins" fontWeight="500" fontSize="18px">
              Fique por dentro das nossas novidades
            </Text>

            <Flex
              bg="white"
              borderRadius="100px"
              p="5px 5px 5px 18px"
              align="center"
              justify="space-between"
              w="100%"
            >
              <Input
                placeholder="SEU EMAIL"
                border="none"
                fontFamily="Poppins"
                fontWeight="600"
                fontSize="15px"
                color="rgba(34,34,34,0.5)"
                _placeholder={{ color: 'rgba(34,34,34,0.5)' }}
                _focusVisible={{ outline: 'none' }}
              />
              <Button
                bg="#222222"
                borderRadius="100px"
                px={7}
                h="42px"
                color="white"
                fontFamily="Poppins"
                fontWeight="600"
                fontSize="15px"
                textTransform="uppercase"
                _hover={{ bg: 'gray.700' }}
              >
                Enviar
              </Button>
            </Flex>
          </VStack>

          <HStack spacing={7}>
            <IconWrapper icon={FaLinkedinIn} />
            <IconWrapper icon={FaInstagram} />
            <IconWrapper icon={FaGithub} />
            <IconWrapper icon={FaEnvelope} />
          </HStack>
        </VStack>
      </Flex>

      {/* LINHA DIVISÓRIA */}
      <Box w="85%" mx="auto" my={8} borderTop="1.5px solid rgba(255,255,255,0.25)" />

      {/* COPYRIGHT / LINKS */}
      <Flex maxW="1440px" mx="auto" px={10} justify="space-between" align="center" flexWrap="wrap">
        <Text fontFamily="Open Sans" fontSize="15px">
          © 2025 AumaGêmea. Todos os direitos reservados.
        </Text>

        <HStack spacing={6}>
          <Link fontFamily="Open Sans" fontSize="15px">
            Termos de Uso
          </Link>
          <Link fontFamily="Open Sans" fontSize="15px">
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
    w="42px"
    h="42px"
    bg="white"
    justify="center"
    align="center"
    borderRadius="full"
    boxShadow="inset 0px -2px 4px rgba(0,0,0,0.25)"
    _hover={{ transform: 'scale(1.1)', transition: '0.2s' }}
  >
    <Icon as={icon} color="#222222" boxSize={5} />
  </Flex>
);
