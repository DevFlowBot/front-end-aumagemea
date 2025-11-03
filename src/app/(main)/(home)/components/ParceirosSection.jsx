'use client';

import { Flex, Box, Text, Image } from '@chakra-ui/react';

export function ParceirosSection() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      py={{ base: 24, md: 45 }}
      mt={{ base: -8, md: -10 }}
      mb={{ base: 12, md: 40 }}
    >
      <Text
        fontSize={{ base: '2xl', md: '40px' }}
        fontWeight="500"
        mb={12}
        fontFamily="Poppins"
        color="#8D3767"
      >
        Parceiros
      </Text>
      <Flex wrap="wrap" justify="center" gap={{ base: 6, md: 48 }} align="center">
        <Box
          w={{ base: '200px', md: '387px' }}
          h={{ base: '175px', md: '339px' }}
          position="relative"
        >
          <Image
            w="100%"
            h="100%"
            src="/logos/sampa.png"
            alt="Sampa"
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Box
          w={{ base: '200px', md: '387px' }}
          h={{ base: '175px', md: '339px' }}
          position="relative"
        >
          <Image
            w="100%"
            h="100%"
            src="/logos/artemys.png"
            alt="Artemys"
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
