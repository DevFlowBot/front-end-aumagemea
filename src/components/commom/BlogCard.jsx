'use client';

import { Box, Image, Text, Button } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

export function BlogCard({ imagem, descricao, link }) {
  return (
    <Box borderRadius="md" overflow="hidden" flex="0 0 calc(50% - 12px)" mb={6}>
      <Box w="100%" h="360px" overflow="hidden">
        <Image src={imagem} alt={descricao} objectFit="cover" w="100%" h="100%" />
      </Box>

      <Box p={4} w="100%">
        <Text color="black" fontWeight="bold" whiteSpace="normal" wordBreak="break-word" mb={3}>
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
      borderRadius="full"
      variant="ghost"
      position="relative"
      px={5}
      _hover={{ bg: '#995c7b' }}
    >
      <Text pr="30px">Leia Mais</Text>

      <Box
        w="32px"
        h="32px"
        bg="white"
        color="black"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        right={1}
        top="50%"
        transform="translateY(-50%)"
      >
        <ArrowUpIcon transform="rotate(45deg)" w={8} h={6} />
      </Box>
    </Button>
  );
}
