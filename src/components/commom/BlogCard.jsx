'use client';

import { Box, Image, Text, Button, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

function formatarData(data) {
  if (!data) return '';
  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const d = new Date(data);
  const mes = meses[d.getMonth()];
  const dia = d.getDate();
  const ano = d.getFullYear();
  return `${mes} ${dia}, ${ano}`;
}

export function BlogCard({
  imagem,
  data,
  descricao,
  link,
  tempo_gasto_leitura: tempoLeitura,

  hover = false,

  cardStyle = {},
  imageStyle = {},
  dateStyle = {},
  descriptionStyle = {},
  buttonStyle = {},
  iconStyle = {},
  buttonText = 'LEIA MAIS',
}) {
  const dataFormatada = data ? formatarData(data) : '';
  const leituraTexto = tempoLeitura ? ` • ${tempoLeitura} min leitura` : '';

  const hoverEffect = hover
    ? {
        transform: 'translateY(-4px)',
        '& *': { color: '#F29F05 !important' },
      }
    : undefined;

  return (
    <ChakraLink
      href={link}
      _hover={{ textDecoration: 'none' }}
      flex={{
        base: '0 0 100%',
        sm: '0 0 calc(50% - 12px)',
        md: '0 0 calc(50% - 12px)',
      }}
    >
      <Box
        borderRadius="md"
        overflow="hidden"
        transition="all 0.3s ease"
        cursor={hover ? 'pointer' : 'default'}
        _hover={hoverEffect}
        {...cardStyle}
      >
        {/* Imagem */}
        {imagem && (
          <Box
            w="100%"
            h={{ base: '180px', sm: '220px', md: '280px', lg: '360px' }}
            overflow="hidden"
            {...imageStyle.wrapper}
          >
            <Image
              src={imagem}
              alt={descricao || 'Imagem do post'}
              objectFit="cover"
              w="100%"
              h="100%"
              {...imageStyle}
            />
          </Box>
        )}

        {/* Conteúdo */}
        <Box p={{ base: 3, sm: 4, md: 4, lg: 5 }} w="100%">
          {/* Data e leitura */}
          {(dataFormatada || tempoLeitura) && (
            <Text
              mb={2}
              color="gray.500"
              fontFamily="Poppins"
              fontWeight="500"
              fontSize={{ base: '14px', sm: '16px', md: '18px' }}
              transition="color 0.3s ease"
              {...dateStyle}
            >
              {dataFormatada + leituraTexto}
            </Text>
          )}

          {/* Descrição */}
          {descricao && (
            <Text
              color="#222222"
              fontFamily="Poppins"
              fontWeight="500"
              fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '28px' }}
              lineHeight={{ base: '20px', sm: '22px', md: '24px', lg: '32px' }}
              whiteSpace="normal"
              wordBreak="break-word"
              mb={{ base: 2, sm: 3, md: 3, lg: 4 }}
              transition="color 0.3s ease"
              {...descriptionStyle}
            >
              {descricao}
            </Text>
          )}

          {/* Botão */}
          <Button
            bg="transparent"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="transparent"
            color="#222222"
            borderRadius="full"
            position="relative"
            px={{ base: 3, sm: 4, md: 5 }}
            py={{ base: 2, sm: 3, md: 4 }}
            fontFamily="Poppins"
            fontSize={{ base: '12px', sm: '14px', md: '16px' }}
            _hover={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
            transition="color 0.3s ease"
            {...buttonStyle}
          >
            <Text pr={{ base: '20px', sm: '25px', md: '30px' }}>{buttonText}</Text>

            <Box
              w={{ base: '24px', sm: '28px', md: '32px' }}
              h={{ base: '24px', sm: '28px', md: '32px' }}
              bg="white"
              color="#F29F05"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="absolute"
              right={{ base: 1, sm: 2, md: 3 }}
              top="50%"
              transform="translateY(-50%)"
              {...iconStyle.wrapper}
            >
              <Icon
                as={ArrowUpIcon}
                transform="rotate(45deg)"
                w={{ base: 5, sm: 6, md: 8 }}
                h={{ base: 3, sm: 4, md: 6 }}
                {...iconStyle}
              />
            </Box>
          </Button>
        </Box>
      </Box>
    </ChakraLink>
  );
}
