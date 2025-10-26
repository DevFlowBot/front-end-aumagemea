import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Checkbox,
  HStack,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";
import { PasswordInput } from '@/components/commom/inputPassword'

export default function Login() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="78vh"
      px={6}
    >
      {/* Card principal */}
      <Card
        direction="row"
        overflow="hidden"
        w="1131px"
        h="600px"
        maxW="95vw"
        boxShadow="2xl"
        borderRadius="lg"
        mb={2}
      >
        {/* Imagem à esquerda */}
        <Box flex="1" h="100%">
          <Image
            src="cachorroLogin-image.png"
            alt="Cachorro fofo"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>

        {/* Lado direito - Formulário */}
        <Box
          flex="1"
          p={8}
          pl={12}            // ← aumenta espaço entre imagem e formulário
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <CardHeader textAlign="left" p={1} mb={8}>
            <Heading size="lg" color="#8D3767" >
              Acesse sua conta
            </Heading>
          </CardHeader>

          <CardBody p={0}>
            <VStack spacing={4} w="100%" align="stretch">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Digite seu email" h="45px" />
              </FormControl>

              <FormControl>
                <FormLabel>Senha</FormLabel>
                <PasswordInput type="password" placeholder="Sua senha" h="45px" />
              </FormControl>

              {/* Checkbox + Esqueceu senha */}
              <HStack justifyContent="space-between" w="100%" >
                <Checkbox
                  sx={{
                    "& .chakra-checkbox__control": {
                      _checked: {
                        bg: "#8D3767",
                        borderColor: "#8D3767",
                        
                      },
                    },
                  }}
                >
                  Lembrar conta
                </Checkbox>

                <Link
                  color="#8D3767"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                >
                  Esqueci a senha
                </Link>
              </HStack>

              {/* Botão de login */}
              <Button
                bg="#8D3767"
                color="white"
                _hover={{ bg: "#BF3990" }}
                w="100%"
                mt={2}
                h="45px"
              >
                Entrar
              </Button>

              {/* Criar conta */}
              <Text textAlign="center" mt={8}>
                Não tem cadastro ainda?
              </Text>
              <Button
                variant="outline"
                borderColor="#000"
                color="#000"
                mt={2}
                w="100%"
                h="45px"
                _hover={{ bg: "blackAlpha.100" }}
              >
                Criar uma conta
              </Button>
            </VStack>
          </CardBody>
        </Box>
      </Card>

      {/* Rodapé */}
      <Text fontSize="sm" color="#222222">
        © 2025 AumaGêmea. Todos os direitos reservados.
      </Text>
    </Box>
  );
}