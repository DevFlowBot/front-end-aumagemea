'use client';

import { Box, Button, Text } from '@chakra-ui/react';

export function CardSection() {
  return (
    <Box
      w="100%"
      minH={{ base: '70vh', md: '90vh' }}
      bgImage="url('/dog-home.png')"
      bgRepeat="no-repeat"
      bgSize={{ base: 'cover', md: '80% auto' }}
      bgPosition={{ base: 'center top', md: 'center bottom' }}
      position="relative"
      overflow="hidden"
      left="100px"
      top="100px"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={{ base: 6, md: 10 }}
        position="absolute"
        width={{ base: '80%', md: '454px' }}
        height="auto"
        left={{ base: '10%', md: '200px' }}
        top={{ base: '10%', md: '130px' }}
      >
        <Text
          fontSize={{ base: '3xl', md: '7xl' }}
          fontWeight="bold"
          fontFamily="Poppins"
          whiteSpace="nowrap"
          mt={{ base: '30px', md: '-50px' }}
        >
          <Box as="span" color="#F29F05">
            AU
          </Box>
          <Box as="span" color="#730E45">
            ma Gêmea
          </Box>
        </Text>
        <Text
          fontFamily="Poppins"
          fontWeight="500"
          fontSize={{ base: '16px', md: '24px' }}
          lineHeight={{ base: '24px', md: '36px' }}
          color="#730E45"
          w={{ base: '100%', md: '500px' }}
          mt={{ base: '30px', md: '-60px' }}
        >
          Um novo AUmigo, uma nova paixão!
        </Text>
        <Button
          w={{ base: '140px', md: '200px' }}
          h={{ base: '40px', md: '60px' }}
          bg="#730E45"
          color="white"
          borderRadius="100px"
          mt={{ base: '30px', md: '300px' }}
          _hover={{ bg: '#5a0b33' }}
        >
          ADOTAR
        </Button>
      </Box>
    </Box>
  );
}
