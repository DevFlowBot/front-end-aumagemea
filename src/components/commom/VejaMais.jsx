'use client';

import { Button, Text, Box } from '@chakra-ui/icons';
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
      px={5}
      py={2}
      fontSize="sm"
      _hover={{ bg: '#FFB233' }}
    >
      <Text color="black" pr="30px">
        Veja Mais
      </Text>

      <Box
        w="27px"
        h="27px"
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
