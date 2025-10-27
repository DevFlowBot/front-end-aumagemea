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
      lineHeight="52px"
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

  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  // Verifica força da senha
  const checkPasswordStrength = (pwd) => {
    if (pwd.length < 8) {
      setPasswordStrength("fraca");
      return;
    }
    const hasLetters = /[a-zA-Z]/.test(pwd);
    const hasNumbers = /\d/.test(pwd);
    const hasSymbols = /[^a-zA-Z0-9]/.test(pwd);

    if (hasLetters && hasNumbers && hasSymbols) setPasswordStrength("forte");
    else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols))
      setPasswordStrength("média");
    else setPasswordStrength("fraca");
  };

  // Máscaras
  const formatCpf = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2")
      .slice(0, 15);
  };

  return (
    <Box
      minH="90vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={3}
    >
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
          {/* COLUNA ESQUERDA */}
          <Flex direction="column" gap="31px" w="422px">
            <FormField label="Nome" placeholder="Digite seu nome" />
            <FormField label="Sobrenome" placeholder="Digite seu sobrenome" />

            {/* Data de nascimento */}
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

            {/* CPF */}
            <Box>
              <Text fontFamily="Open Sans" fontWeight="bold" fontSize="16px" mb="10px" color="#222">
                CPF
              </Text>
              <StyledInput
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(formatCpf(e.target.value))}
              />
            </Box>

            <Flex align="center" gap="5px" wrap="wrap">
              <Checkbox
                sx={{
                  "& .chakra-checkbox__control": {
                    _checked: { bg: "#8D3767", borderColor: "#8D3767" },
                    _hover: { borderColor: "#8D3767", bg: "#8D3767" },
                    _focus: { boxShadow: "0 0 0 2px rgba(141,55,103,0.4)" },
                  },
                }}
              />
              <Text fontSize="16px" color="#000" fontFamily="Open Sans" fontWeight="regular">
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

          {/* COLUNA DIREITA */}
          <Flex direction="column" gap="31px" w="422px">
            <FormField label="E-mail" placeholder="Digite seu e-mail" />

            {/* Telefone */}
            <Box>
              <Text fontFamily="Open Sans" fontWeight="bold" fontSize="16px" mb="10px" color="#222">
                Celular
              </Text>
              <StyledInput
                placeholder="DDD + Celular"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
              />
            </Box>

            {/* Senha */}
            <Box position="relative">
              <Text fontFamily="Open Sans" fontWeight="bold" fontSize="16px" mb="10px" color="#222">
                Senha
              </Text>
              <InputGroup h="100%">
                <StyledInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPassword(val);
                    checkPasswordStrength(val);

                    if (confirmPassword && val !== confirmPassword) {
                      setConfirmError("As senhas precisam ser iguais");
                    } else {
                      setConfirmError("");
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
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />
                </InputRightElement>
              </InputGroup>

              {/* Barra de força da senha */}
              {password && (
                <Box mt={2} position="absolute" w="100%" bottom="-34px">
                  <Box
                    h="5px"
                    borderRadius="full"
                    bg={
                      password.length < 8
                        ? "red.400"
                        : passwordStrength === "fraca"
                        ? "red.400"
                        : passwordStrength === "média"
                        ? "yellow.400"
                        : "green.400"
                    }
                    transition="all 0.3s ease"
                  />
                  <Text
                    fontSize="sm"
                    mt={1}
                    color={
                      password.length < 8
                        ? "red.500"
                        : passwordStrength === "fraca"
                        ? "red.500"
                        : passwordStrength === "média"
                        ? "yellow.600"
                        : "green.500"
                    }
                  >
                    {password.length < 8
                      ? "A senha deve ter pelo menos 8 caracteres"
                      : passwordStrength === "fraca"
                      ? "Senha fraca"
                      : passwordStrength === "média"
                      ? "Senha média"
                      : "Senha forte 💪"}
                  </Text>
                </Box>
              )}
            </Box>

            {/* Confirmar senha */}
            <Box position="relative">
              <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" mb="10px" color="#222">
                Confirmar senha
              </Text>
              <InputGroup h="100%">
                <StyledInput
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => {
                    const val = e.target.value;
                    setConfirmPassword(val);
                    if (val && val !== password) setConfirmError("As senhas não coincidem");
                    else setConfirmError("");
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
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />
                </InputRightElement>
              </InputGroup>

              {/* Mensagem de erro fixa */}
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

        {/* Botão */}
        <Flex justify="center" mt={2}>
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
      <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" mb="10px" color="#222">
        {label}
      </Text>
      <StyledInput placeholder={placeholder} />
    </Box>
  );
}
