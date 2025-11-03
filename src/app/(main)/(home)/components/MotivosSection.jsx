'use client';

import { Flex, Box, Text, Image } from '@chakra-ui/react';

import { Wave } from '@/components/commom';

export function MotivoSection() {
  return (
    <Box w="100%" position="relative" zIndex={0}>
      <Wave color="#F3D8EA" />
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={{ base: 8, md: 10 }}
        p={{ base: 6, md: 10 }}
        bg="#F3D8EA"
        w="100%"
        zIndex={1}
        position="relative"
      >
        <Text
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="500"
          fontFamily="Poppins"
          mb={{ base: 4, md: 8 }}
          color="#730E45"
          textAlign="center"
        >
          Motivos para nos escolher!
        </Text>

        <Flex
          w="100%"
          maxW="1000px"
          h={{ base: 'auto', md: '800px' }}
          mx="auto"
          gap={{ base: 4, md: 6 }}
          overflow="visible"
          position="relative"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justify="center"
        >
          <Image
            src="/patinhas/patinhas-motivos-esquerda.png"
            alt="Patinhas Esquerda"
            position="absolute"
            top={{ base: '-30px', md: '-180px' }}
            left={{ base: '-60px', md: '-510px' }}
            zIndex="0"
            w={{ base: '130px', md: '450px', lg: '650px' }}
            opacity="0.8"
            display={{ base: 'none', md: 'block' }}
          />
          <Box w={{ base: '100%', md: '50%' }} position="relative" zIndex="1">
            <Image
              w="100%"
              h="auto"
              src="/diferenciais.png"
              alt="Diferenciais"
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Image
            src="/patinhas/patinhas-motivos-direita.png"
            alt="Patinhas Direita"
            position="absolute"
            bottom={{ base: '-20px', md: '-105px' }}
            right={{ base: '-40px', md: '-450px' }}
            zIndex="0"
            w={{ base: '110px', md: '400px', lg: '700px' }}
            opacity="0.8"
            display={{ base: 'none', md: 'block' }}
          />
          <Box w={{ base: '100%', md: '50%' }} position="relative" zIndex="1">
            <Image
              w="100%"
              h="auto"
              src="/dog-and-cat.png"
              alt="Dog and Cat"
              style={{ objectFit: 'contain' }}
              ml="150px"
              mt="150px"
            />
          </Box>
        </Flex>
      </Flex>
      <Wave color="#F3D8EA" invert mirror />
    </Box>
  );
}
