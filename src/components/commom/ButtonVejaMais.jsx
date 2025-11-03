'use client';

import { Button, Text, Box } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

export function VejaMaisButton({ link }) {
  return (
    <Button
      as="a"
      href={link}
      bg="#FFBD43"
      size="sm"
      borderRadius="full"
      variant="solid"
      position="relative"
      px={{ base: 3, sm: 4, md: 5 }}
      py={{ base: 1.5, sm: 2, md: 2.5 }}
      fontSize={{ base: '12px', sm: '14px', md: '16px' }}
      _hover={{ bg: '#FFB233' }}
    >
      <Text color="black" pr={{ base: '20px', md: '30px' }}>
        Veja Mais
      </Text>

      <Box
        w={{ base: '20px', sm: '24px', md: '27px' }}
        h={{ base: '20px', sm: '24px', md: '27px' }}
        bg="white"
        color="black"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        right={{ base: 1, md: 1 }}
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
