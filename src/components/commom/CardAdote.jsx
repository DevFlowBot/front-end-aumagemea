'use client';

import { Box, Image, Text, Flex, Badge } from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';
import { useState } from 'react';

import { VejaMaisButton } from './VejaMais';

export function CardAdote({ nome, tipo, descricao, imagem, link, ong }) {
  const [favorito, setFavorito] = useState(false);

  const shortDesc = descricao.length > 90 ? descricao.slice(0, 90).trim() + '...' : descricao;

  return (
    <Box
      w="full"
      maxW="420px"
      h="450px"
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
      transition="all 0.2s"
      _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box position="relative" h="240px">
        <Image src={imagem} alt={nome} w="full" h="full" objectFit="cover" borderTopRadius="2xl" />
        <Box
          position="absolute"
          top={3}
          left={3}
          bg="white"
          borderRadius="full"
          p={2}
          display="inline-flex"
          cursor="pointer"
          onClick={() => setFavorito(!favorito)}
        >
          <FiStar color={favorito ? '#FFBD43' : 'black'} size={24} />
        </Box>
      </Box>

      <Box p={4} flex="1" overflow="hidden">
        <Flex justify="space-between" align="center" mb={7}>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">
            {nome}
          </Text>
          <Badge
            bg="#FFBD43"
            color="black"
            fontSize="0.85rem"
            textTransform="uppercase"
            fontWeight="semibold"
            px={2}
            py={1}
            borderRadius="full"
          >
            {tipo}
          </Badge>
        </Flex>

        <Text fontSize="sm" color="gray.600" mb={4} overflow="hidden">
          {shortDesc}
        </Text>

        <Flex justify="space-between" align="center" mt={12}>
          <VejaMaisButton link={link} />

          <Flex
            align="center"
            bg="#FFBD43"
            borderRadius="full"
            px={1}
            py={1}
            gap={2}
            as="a"
            href={ong?.link}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ bg: '#FFB233' }}
          >
            <Image
              src={ong?.image}
              alt={`Logo da ONG ${ong?.nome}`}
              boxSize="25px"
              borderRadius="full"
              objectFit="cover"
            />
            <Text fontWeight="semibold" fontSize="sm" color="black">
              {ong?.nome}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
