'use client';

import { Box, Image, Text, Button } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

export function BlogCard({ imagem, descricao, link }) {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      flex={{
        base: '0 0 100%', // mobile empilha
        sm: '0 0 calc(50% - 12px)', // 2 por linha
        md: '0 0 calc(50% - 12px)', // 2 por linha
      }}
      mb={{ base: 4, sm: 6 }}
    >
      {/* Imagem */}
      <Box w="100%" h={{ base: '180px', sm: '220px', md: '280px', lg: '360px' }} overflow="hidden">
        <Image src={imagem} alt={descricao} objectFit="cover" w="100%" h="100%" />
      </Box>

      {/* Conteúdo */}
      <Box p={{ base: 3, sm: 4, md: 4, lg: 5 }} w="100%">
        <Text
          color="#222222"
          fontFamily="Poppins"
          fontWeight="500"
          fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '28px' }}
          lineHeight={{ base: '20px', sm: '22px', md: '24px', lg: '32px' }}
          whiteSpace="normal"
          wordBreak="break-word"
          mb={{ base: 2, sm: 3, md: 3, lg: 4 }}
        >
          {descricao}
        </Text>

        <LeiaMaisButton link={link} />
      </Box>
    </Box>
  );
}

export function LeiaMaisButton({ link }) {
  return (
    <Button
      as="a"
      href={link}
      bg="#AB678D"
      size="md"
      color="#FFFFFF"
      borderRadius="full"
      variant="ghost"
      position="relative"
      px={{ base: 3, sm: 4, md: 5 }}
      py={{ base: 2, sm: 3, md: 4 }}
      fontFamily="Poppins"
      fontSize={{ base: '12px', sm: '14px', md: '16px' }}
      _hover={{ bg: '#995c7b' }}
    >
      <Text pr={{ base: '20px', sm: '25px', md: '30px' }}>LEIA MAIS</Text>

      <Box
        w={{ base: '24px', sm: '28px', md: '32px' }}
        h={{ base: '24px', sm: '28px', md: '32px' }}
        bg="white"
        color="black"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        right={{ base: 1, sm: 2, md: 3 }}
        top="50%"
        transform="translateY(-50%)"
      >
        <ArrowUpIcon
          transform="rotate(45deg)"
          w={{ base: 5, sm: 6, md: 8 }}
          h={{ base: 3, sm: 4, md: 6 }}
        />
      </Box>
    </Button>
  );
}
