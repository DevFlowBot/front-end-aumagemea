"use client";

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
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

function StyledInput({ showToggle, showToggleState, onToggle, ...inputProps }) {
  return (
    <InputGroup>
      <Input
        {...inputProps}
        h="52px"
        borderRadius="10px"
        fontFamily="Open Sans"
        fontSize="16px"
        border="1px solid rgba(34, 34, 34, 0.5)"
        color="rgba(0, 0, 0, 0.8)"
        px="22px"
        _placeholder={{ color: "rgba(0, 0, 0, 0.5)" }}
        _hover={{ borderColor: "#702c52" }}
        focusBorderColor="#8D3767"
      />
      {showToggle && (
        <InputRightElement height="100%">
          <IconButton
            size="sm"
            aria-label="Mostrar senha"
            icon={showToggleState ? <ViewOffIcon /> : <ViewIcon />}
            onClick={onToggle}
            variant="unstyled"
            color="gray.500"
            p={0}
            minW="auto"
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      minH="94vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={6}
    >
      <Card
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
        w="1131px"
        maxW="95vw"
        h="768px"
        borderRadius="lg"
        boxShadow="2xl"
      >
        <Box w={{ base: "100%", md: "562px" }} h={{ base: "300px", md: "100%" }}>
          <Image
            src="cachorroLogin-image.png"
            alt="Cachorro fofo"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>

        <Box
          w={{ base: "100%", md: "569px" }}
          h="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="40px"
          p={{ base: 6, md: 12 }}
        >
          <CardHeader w="426px" p={2}>
            <Heading
              fontFamily="Poppins"
              fontWeight="700"
              fontSize="34px"
              lineHeight="51px"
              color="#8D3767"
              textAlign="left"
              mb={2}
            >
              Acesse sua conta
            </Heading>
          </CardHeader>

          <CardBody p={0}>
            <VStack spacing="31px" w="422px" align="stretch">
              <Box display="flex" flexDirection="column" gap="10px">
                <Text
                  fontFamily="Open Sans"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#222"
                >
                  E-mail
                </Text>
                <StyledInput type="email" placeholder="Digite seu e-mail" />
              </Box>

              <Box display="flex" flexDirection="column" gap="9px">
                <Text
                  fontFamily="Open Sans"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#222"
                >
                  Senha
                </Text>
                <StyledInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  showToggle
                  showToggleState={showPassword}
                  onToggle={() => setShowPassword(!showPassword)}
                />
              </Box>

              <HStack justifyContent="space-between">
                <Checkbox
                  sx={{
                    "& .chakra-checkbox__control": {
                      _checked: { bg: "#8D3767", borderColor: "#8D3767" },
                      _hover: { borderColor: "#702c52" },
                      _focus: { boxShadow: "0 0 0 2px rgba(141,55,103,0.4)" },
                    },
                  }}
                >
                  <Text fontSize="16px" color="#000" fontFamily="Open Sans">
                    Lembrar conta
                  </Text>
                </Checkbox>

                <Link color="#8D3767" fontWeight="400" _hover={{ textDecoration: "underline" }}>
                  Esqueci a senha
                </Link>
              </HStack>

              <Button
                bg="#8D3767"
                color="white"
                _hover={{ bg: "#BF3990" }}
                w="422px"
                h="54px"
                borderRadius="10px"
                fontFamily="Poppins"
                fontWeight="600"
                textTransform="uppercase"
              >
                Entrar
              </Button>

              <VStack spacing="20px" w="422px">
                <Text
                  fontFamily="Open Sans"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="22px"
                  textAlign="center"
                  color="#000"
                >
                  Não tem cadastro ainda?
                </Text>
                <Button
                  variant="outline"
                  borderColor="#222"
                  color="#222"
                  w="422px"
                  h="52px"
                  borderRadius="10px"
                  _hover={{ bg: "blackAlpha.100" }}
                  fontFamily="Open Sans"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="22px"
                >
                  Criar uma conta
                </Button>
              </VStack>
            </VStack>
          </CardBody>
        </Box>
      </Card>

      <Box mt={6}>
        <Text fontSize="sm" color="#222222" textAlign="center">
          © 2025 AumaGêmea. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  );
}
