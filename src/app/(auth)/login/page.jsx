'use client';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Text,
  VStack,
  Heading,
  Checkbox,
  HStack,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { StyledInput } from './components/StyledInput';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={{ base: 4, md: 6 }}
      pt={{ base: '80px', md: '150px' }}
      className={openSans.className}
    >
      <Card
        direction={{ base: 'column', md: 'row' }}
        overflow="hidden"
        w={{ base: '95vw', md: '1131px' }}
        maxW="100%"
        color="white"
        borderRadius="lg"
        boxShadow="2xl"
      >
        {/* Imagem */}
        <Box w={{ base: '100%', md: '50%' }} h={{ base: '200px', md: '100%' }}>
          <Image
            src="cachorroLogin-image.png"
            alt="Cachorro fofo"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>

        {/* Formulário */}
        <Box
          w={{ base: '100%', md: '50%' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="white"
          p={{ base: 6, md: 12 }}
          gap={{ base: 6, md: 10 }}
        >
          <CardHeader w="100%" p={0}>
            <Heading
              fontFamily="Poppins"
              fontWeight="700"
              fontSize={{ base: '28px', md: '34px' }}
              lineHeight={{ base: '42px', md: '51px' }}
              color="#8D3767"
              textAlign="left"
              mb={4}
            >
              Acesse sua conta
            </Heading>
          </CardHeader>

          <CardBody p={0} w="100%">
            <VStack spacing={{ base: 5, md: 8 }} w="100%" align="stretch">
              {/* Email */}
              <Box display="flex" flexDirection="column" gap="10px">
                <Text
                  fontFamily="Open Sans"
                  fontWeight="700"
                  fontSize={{ base: '14px', md: '16px' }}
                  color="#222"
                >
                  E-mail
                </Text>
                <StyledInput type="email" placeholder="Digite seu e-mail" />
              </Box>

              {/* Senha */}
              <Box display="flex" flexDirection="column" gap="10px">
                <Text
                  fontFamily="Open Sans"
                  fontWeight="700"
                  fontSize={{ base: '14px', md: '16px' }}
                  color="#222"
                >
                  Senha
                </Text>
                <StyledInput
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  showToggle
                  showToggleState={showPassword}
                  onToggle={() => setShowPassword(!showPassword)}
                />
              </Box>

              {/* Lembrar e esqueci a senha */}
              <HStack justifyContent="space-between" wrap="wrap">
                <Checkbox
                  sx={{
                    '& .chakra-checkbox__control': {
                      borderColor: '#8D3767',
                      _checked: { bg: '#8D3767', borderColor: '#8D3767' },
                      _hover: { borderColor: '#702c52' },
                      _focus: { boxShadow: '0 0 0 2px rgba(141,55,103,0.4)' },
                    },
                  }}
                >
                  <Text fontSize={{ base: '14px', md: '16px' }} color="#000">
                    Lembrar conta
                  </Text>
                </Checkbox>

                <Link
                  color="#8D3767"
                  fontWeight="400"
                  fontSize={{ base: '14px', md: '16px' }}
                  _hover={{ textDecoration: 'underline' }}
                >
                  Esqueci a senha
                </Link>
              </HStack>

              {/* Botão Entrar */}
              <Button
                bg="#8D3767"
                color="white"
                _hover={{ bg: '#BF3990' }}
                w="100%"
                h={{ base: '50px', md: '54px' }}
                borderRadius="10px"
                fontFamily="Poppins"
                fontWeight="600"
                textTransform="uppercase"
              >
                Entrar
              </Button>

              {/* Criar conta */}
              <VStack spacing={{ base: 4, md: 6 }} w="100%">
                <Text
                  fontFamily="Open Sans"
                  fontWeight="400"
                  fontSize={{ base: '14px', md: '16px' }}
                  textAlign="center"
                  color="#000"
                >
                  Não tem cadastro ainda?
                </Text>
                <Button
                  variant="outline"
                  borderColor="#222"
                  color="#222"
                  w="100%"
                  h={{ base: '48px', md: '52px' }}
                  borderRadius="10px"
                  _hover={{ bg: 'blackAlpha.100' }}
                  fontFamily="Open Sans"
                  fontWeight="700"
                  fontSize={{ base: '14px', md: '16px' }}
                >
                  Criar uma conta
                </Button>
              </VStack>
            </VStack>
          </CardBody>
        </Box>
      </Card>

      <Box mt={{ base: 4, md: 6 }}>
        <Text fontSize={{ base: '12px', md: '14px' }} color="#222222" textAlign="center">
          © 2025 AumaGêmea. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  );
}
