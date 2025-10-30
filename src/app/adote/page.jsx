'use client';

import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useState } from 'react';

import pets from '../../../fakedata/adote.json' assert { type: 'json' };

import { RenderCarousel } from '@/components/home/adote';

export default function AdoteHome() {
  const cachorros = pets.filter((pet) => pet.tipo.toLowerCase() === 'cachorro');
  const gatos = pets.filter((pet) => pet.tipo.toLowerCase() === 'gato');

  const [indexC, setIndexC] = useState(0);
  const [indexG, setIndexG] = useState(0);

  return (
    <Flex>
      <Box
        position="absolute"
        top="40px"
        left="20%"
        transform="translateX(-50%)"
        zIndex={-1}
        w="1000px"
        h="1000px"
      >
        <Image
          src="patinhas/patinhas-audote-branca.png"
          alt="Decorativa topo"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      <Box
        position="absolute"
        top="650px"
        left="65%"
        transform="translateX(-50%) rotate(10deg)"
        zIndex={-1}
        w="1000px"
        h="1000px"
      >
        <Image
          src="patinhas/patinhas-audote-branca.png"
          alt="Decorativa fundo"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>
      <Box position="relative" maxW="1400px" mx="auto" overflow="hidden">
        <Flex mb={12} align="center" gap={1} justify="center">
          <Text fontSize="4xl" fontWeight="bold" color="#F29F05">
            AU
          </Text>
          <Text color="black" fontSize="4xl" fontWeight="bold">
            dote
          </Text>
        </Flex>

        <Box p={4} mb={4}>
          {RenderCarousel(cachorros, indexC, setIndexC)}
        </Box>

        <Box p={4}>{RenderCarousel(gatos, indexG, setIndexG)}</Box>
        <Flex justify="center" py={12}>
          <Button
            variant="outline"
            href="/adote"
            as="a"
            borderColor="#F29F05"
            bg="white"
            color="#F29F05"
            borderWidth="3px"
            boxShadow="md"
            borderRadius="full"
            size="lg"
            px={10}
            py={6}
            _hover={{
              bg: 'white',
              color: 'F29F05',
              transform: 'scale(1.05)',
              boxShadow: 'lg',
            }}
          >
            VER MAIS
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
