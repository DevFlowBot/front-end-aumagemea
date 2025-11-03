'use client';

import { useState } from 'react';
import { Flex, Box, Button, Text, Image } from '@chakra-ui/react';

import { RenderCarousel, CardAdote } from '@/components/commom';
import pets from '../../../../../fakedata/adote.json' assert { type: 'json' };

export function AdoteSection() {
  const categorias = ['cachorro', 'gato'];
  const [indices, setIndices] = useState(
    categorias.reduce((acc, cat) => ({ ...acc, [cat]: 0 }), {}),
  );

  const setIndex = (cat, value) => {
    setIndices((prev) => ({ ...prev, [cat]: value }));
  };

  return (
    <Flex direction="column" position="relative" overflowX="hidden">
      <Box position="relative" w="100%" overflow="hidden" px={{ base: 2, md: 4, lg: 6 }}>
        <Image
          src="patinhas/patinhas-audote-branca.png"
          alt="Patinhas topo"
          position="absolute"
          top={{ base: '-40px', md: '-115px' }}
          left={{ base: '4%', md: '8%' }}
          w={{ base: '180px', md: '400px', lg: '900px' }}
          opacity={0.7}
          zIndex={0}
          pointerEvents="none"
          display={{ base: 'none', md: 'block' }}
        />

        <Flex mb={12} align="center" justify="center" position="relative" zIndex={1}>
          <Text
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="500"
            fontFamily="Poppins"
            whiteSpace="nowrap"
          >
            <Box as="span" color="#F29F05">
              AU
            </Box>
            <Box as="span" color="#222222">
              dote
            </Box>
          </Text>
        </Flex>

        {categorias.map((cat) => {
          const petsFiltrados = pets.filter((pet) => pet.tipo.toLowerCase() === cat);
          return (
            <Box key={cat} mb={4} position="relative" zIndex={1}>
              <RenderCarousel
                items={petsFiltrados}
                index={indices[cat]}
                setIndex={(value) => setIndex(cat, value)}
                Component={CardAdote}
              />
            </Box>
          );
        })}

        <Flex py={4} justify="center" position="relative" zIndex={1}>
          <Button
            variant="outline"
            href="/adote"
            as="a"
            borderColor="#F29F05"
            bg="white"
            color="#F29F05"
            borderWidth="3px"
            borderRadius="full"
            boxShadow="md"
            size="lg"
            px={{ base: 6, md: 10 }}
            py={{ base: 3, md: 6 }}
            _hover={{
              bg: 'white',
              color: '#F29F05',
              transform: 'scale(1.05)',
            }}
          >
            VER MAIS
          </Button>
        </Flex>

        <Image
          src="patinhas/patinhas-audote-branca.png"
          alt="Patinhas inferior"
          position="absolute"
          bottom={{ base: '-60px', md: '-180px' }}
          right={{ base: '2%', md: '7%' }}
          w={{ base: '180px', md: '400px', lg: '800px' }}
          opacity={0.7}
          zIndex={0}
          pointerEvents="none"
          display={{ base: 'none', md: 'block' }}
        />
      </Box>
    </Flex>
  );
}
