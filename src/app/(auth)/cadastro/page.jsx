'use client';

import {
  Box,
  Flex,
  Text,
  Button,
  Checkbox,
  IconButton,
  InputGroup,
  InputRightElement,
  Tooltip,
  Heading,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, InfoIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { StyledInput, FormField } from '@/components/commom';

import {
  checkPasswordStrength,
  formatCpf,
  formatPhone,
  colorStrengthPassword,
  rulesPassword,
} from './lib';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function CadastroForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [userType, setUserType] = useState('');

  const { hasMinLength, hasNumber, hasSymbol } = rulesPassword(password);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 5 }}
      pt={{ base: '80px', md: '110px' }}
      className={openSans.className}
    >
      <Box
        maxW="1144px"
        w="100%"
        bg="white"
        borderRadius="lg"
        boxShadow="2xl"
        p={{ base: 6, md: '40px' }}
        mx="auto"
        mt={{ base: '16px', md: '40px' }}
        mb={{ base: '12px', md: '30px' }}
      >
        <Heading
          textAlign="center"
          fontFamily="Poppins"
          fontSize={{ base: '28px', md: '34px' }}
          color="#8D3767"
          fontWeight={700}
          mb={{ base: '30px', md: '40px' }}
        >
          Crie sua conta
        </Heading>

        <Flex justify="center" gap={4} mb={4} wrap="wrap">
          <Button
            onClick={() => setUserType('adotante')}
            bg={userType === 'adotante' ? '#8D3767' : '#8d3766c2'}
            color="#fff"
            _hover={{ bg: userType === 'adotante' ? '#8D3767' : '#8d3766c2' }}
            borderRadius="10px"
            fontFamily="Poppins"
            fontWeight={600}
            p="20px"
            w={{ base: '48%', md: '150px' }}
          >
            ADOTANTE
          </Button>
          <Button
            onClick={() => setUserType('ong')}
            bg={userType === 'ong' ? '#8D3767' : '#8d3766c2'}
            color="#fff"
            _hover={{ bg: userType === 'ong' ? '#8D3767' : '#8d3766c2' }}
            borderRadius="10px"
            fontFamily="Poppins"
            fontWeight={600}
            p="20px"
            w={{ base: '48%', md: '150px' }}
          >
            ONG
          </Button>
        </Flex>

        <Flex
          justify="center"
          align="flex-start"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 6, md: '31px' }}
          mb={{ base: 6, md: '50px' }}
          wrap="wrap"
        >

          <Flex direction="column" gap={{ base: 6, md: '31px' }} w={{ base: '100%', md: '422px' }}>
            <FormField label="Nome" placeholder="Digite seu nome" />
            <FormField label="Sobrenome" placeholder="Digite seu sobrenome" />

            <Box>
              <Text fontFamily="Open Sans" fontWeight="bold" fontSize="16px" mb="10px" color="#222">
                Data de nascimento
              </Text>
              <StyledInput
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </Box>

            <Box>
              <Text fontFamily="Open Sans" fontWeight="bold" fontSize="16px" mb="10px" color="#222">
                CPF
              </Text>
              <StyledInput
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(formatCpf(e.target.value))}
                maxLength={14}
              />
            </Box>

            <Flex align="center" gap="5px" wrap="wrap">
              <Checkbox
                sx={{
                  '& .chakra-checkbox__control': {
                    borderColor: '#8D3767',
                    _checked: { bg: '#8D3767', borderColor: '#8D3767' },
                    _hover: { borderColor: '#702c52' },
                    _focus: { boxShadow: '0 0 0 2px rgba(141,55,103,0.4)' },
                  },
                }}
              />
              <Text fontSize="14px" color="#000" fontFamily="Open Sans" fontWeight="regular">
                Concordo com os{' '}
                <Link
                  href="#"
                  color="#8D3767"
                  textDecoration="underline"
                  fontWeight="700"
                  _hover={{ textDecoration: 'none', color: '#702c52' }}
                >
                  termos e condições
                </Link>
              </Text>
            </Flex>
          </Flex>

          <Flex direction="column" gap={{ base: 6, md: '31px' }} w={{ base: '100%', md: '422px' }}>
            <FormField label="E-mail" placeholder="Digite seu e-mail" />

            <Box>
              <Text fontFamily="Open Sans" fontWeight="bold" fontSize="16px" mb="10px" color="#222">
                Celular
              </Text>
              <StyledInput
                placeholder="DDD + Celular"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                maxLength={15}
              />
            </Box>

            <Box position="relative">
              <Flex align="center" gap="6px" mb="10px" wrap="wrap">
                <Text fontFamily="Open Sans" fontWeight="bold" fontSize="16px" color="#222">
                  Senha
                </Text>
                <Tooltip
                  color="white"
                  label={
                    <Box>
                      <Text fontSize="sm" color={hasMinLength ? 'green.200' : 'red.200'}>
                        {hasMinLength ? '✓' : '✗'} Mínimo 8 caracteres
                      </Text>
                      <Text fontSize="sm" color={hasNumber ? 'green.200' : 'red.200'}>
                        {hasNumber ? '✓' : '✗'} Contém ao menos 1 número
                      </Text>
                      <Text fontSize="sm" color={hasSymbol ? 'green.200' : 'red.200'}>
                        {hasSymbol ? '✓' : '✗'} Contém ao menos 1 caractere especial
                      </Text>
                    </Box>
                  }
                >
                  <InfoIcon color="#222" mt="2px" />
                </Tooltip>
              </Flex>
              <InputGroup h="100%">
                <StyledInput
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPassword(val);
                    setPasswordStrength(checkPasswordStrength(val));

                    if (confirmPassword && val !== confirmPassword) {
                      setConfirmError('As senhas precisam ser iguais');
                    } else {
                      setConfirmError('');
                    }
                  }}
                  minLength={8}
                  required
                />
                <InputRightElement height="100%">
                  <IconButton
                    size="sm"
                    aria-label="Mostrar senha"
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={() => setShowPassword(!showPassword)}
                    variant="unstyled"
                    color="gray.500"
                  />
                </InputRightElement>
              </InputGroup>

              {password && (
                <Box
                  mt={2}
                  position={{ base: 'relative', md: 'absolute' }}
                  w="100%"
                  bottom={{ base: 'auto', md: '-34px' }}
                  left={0}
                >
                  <Box
                    h="5px"
                    borderRadius="full"
                    bg={colorStrengthPassword(passwordStrength)}
                    transition="all 0.4s ease"
                  />
                  <Text
                    fontSize="sm"
                    mt={1}
                    color={colorStrengthPassword(passwordStrength)}
                    textAlign="right"
                  >
                    {passwordStrength || ''}
                  </Text>
                </Box>
              )}
            </Box>

            <Box position="relative">
              <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" mb="10px" color="#222">
                Confirmar senha
              </Text>
              <InputGroup h="100%">
                <StyledInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => {
                    const val = e.target.value;
                    setConfirmPassword(val);
                    if (val && val !== password) setConfirmError('As senhas não coincidem');
                    else setConfirmError('');
                  }}
                  required
                />
                <InputRightElement height="100%">
                  <IconButton
                    size="sm"
                    aria-label="Mostrar senha"
                    icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    variant="unstyled"
                    color="gray.500"
                  />
                </InputRightElement>
              </InputGroup>

              <Box h="20px" mt={1}>
                {confirmError && (
                  <Text color="red.500" fontSize="sm">
                    {confirmError}
                  </Text>
                )}
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Flex justify="center" mt={4}>
          <Link href="/formcompatibilidade">
            <Button
              w={{ base: '100%', md: '422px' }}
              h="54px"
              bg="#8D3767"
              color="#fff"
              borderRadius="10px"
              fontFamily="Poppins"
              fontWeight={600}
              textTransform="uppercase"
              _hover={{ bg: '#BF3990' }}
            >
              Cadastrar
            </Button>
          </Link>
        </Flex>
      </Box>

      <Box mt={{ base: 4, md: 2 }}>
        <Text fontSize="sm" color="#222222" textAlign="center">
          © 2025 AumaGêmea. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  );
}
