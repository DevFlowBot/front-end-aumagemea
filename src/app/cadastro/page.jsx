"use client";

import {
  Box,
  Flex,
  Input,
  Text,
  Button,
  Checkbox,
  IconButton,
  InputGroup,
  InputRightElement,
  Heading,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

function StyledInput(props) {
  return (
    <Input
      h="52px"
      border="1px solid rgba(34, 34, 34, 0.5)"
      borderRadius="10px"
      fontFamily="Open Sans"
      fontSize="16px"
      color="rgba(0, 0, 0, 0.8)"
      px="22px"
      _placeholder={{ color: "rgba(0, 0, 0, 0.5)" }}
      focusBorderColor="#8D3767"
      {...props}
    />
  );
}

export default function CadastroForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Box
      minH="90vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={3}
    >
      {/* CARD */}
      <Box
        w="1144px"
        maxW="95vw"
        borderRadius="lg"
        boxShadow="2xl"
        p="40px"
        mx="auto"
        mt="40px"
        mb="30px"
      >
        <Heading
          textAlign="center"
          fontFamily="Poppins"
          fontSize="34px"
          color="#8D3767"
          fontWeight="bold"
          mb="40px"
        >
          Crie sua conta
        </Heading>

        <Flex justify="center" align="flex-start" gap="31px" mb="50px">
          {/* Coluna Esquerda */}
          <Flex direction="column" gap="31px" w="422px">
            <FormField label="Nome" placeholder="Digite seu nome" />
            <FormField label="Sobrenome" placeholder="Digite seu sobrenome" />
            <FormField label="Data de nascimento" placeholder="DD/MM/AAAA" />
            <FormField label="CPF" placeholder="Digite seu CPF" />

            <Flex align="center" gap="5px" wrap="wrap">
              <Checkbox
                sx={{
                  "& .chakra-checkbox__control": {
                    _checked: { bg: "#8D3767", borderColor: "#8D3767" },
                    _hover: { borderColor: "#8D3767", bg: "#8D3767" },
                    _focus: {
                      boxShadow: "0 0 0 2px rgba(141,55,103,0.4)",
                    },
                  },
                }}
              />
              <Text fontSize="16px" color="#000" fontFamily="Open Sans">
                Concordo com os{" "}
                <Link
                  href="#"
                  color="#8D3767"
                  textDecoration="underline"
                  fontWeight="700"
                  _hover={{ textDecoration: "none", color: "#702c52" }}
                >
                  termos e condições
                </Link>
              </Text>
            </Flex>
          </Flex>

          {/* Coluna Direita */}
          <Flex direction="column" gap="31px" w="422px">
            <FormField label="E-mail" placeholder="Digite seu e-mail" />
            <FormField label="Celular" placeholder="DDD + Celular" />

            {/* Senha */}
            <Box>
              <Text
                fontFamily="Open Sans"
                fontWeight="700"
                fontSize="16px"
                mb="10px"
                color="#222"
                lineHeight="22px"
              >
                Senha
              </Text>
              <InputGroup>
                <StyledInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
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
            </Box>

            {/* Confirmar senha */}
            <Box>
              <Text
                fontFamily="Open Sans"
                fontWeight="700"
                fontSize="16px"
                mb="10px"
                color="#222"
                lineHeight="22px"
              >
                Confirmar senha
              </Text>
              <InputGroup>
                <StyledInput
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme sua senha"
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
            </Box>
          </Flex>
        </Flex>

        {/* Botão Cadastrar */}
        <Flex justify="center">
          <Button
            w="422px"
            h="54px"
            bg="#8D3767"
            color="#fff"
            borderRadius="10px"
            fontFamily="Poppins"
            fontWeight="600"
            textTransform="uppercase"
            _hover={{ bg: "#BF3990" }}
          >
            Cadastrar
          </Button>
        </Flex>
      </Box>

      {/* FOOTER */}
      <Box mt={1}>
        <Text fontSize="sm" color="#222222" textAlign="center">
          © 2025 AumaGêmea. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  );
}

function FormField({ label, placeholder }) {
  return (
    <Box>
      <Text
        fontFamily="Open Sans"
        fontWeight="700"
        fontSize="16px"
        mb="10px"
        color="#222"
      >
        {label}
      </Text>
      <StyledInput placeholder={placeholder} />
    </Box>
  );
}
