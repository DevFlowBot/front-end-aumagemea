'use client';

import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export function SearchInput({ width = '422px', height = '54px', label = 'Busque um artigo' }) {
  return (
    <InputGroup
      w={width}
      h={height}
      mx="auto"
      position="relative"
      border="1px solid rgba(34, 34, 34, 0.5)"
      borderRadius="10px"
      alignItems="center"
      bg="white"
    >
      <Input
        placeholder={label}
        fontWeight="400"
        fontSize="16px"
        lineHeight="22px"
        color="rgba(34, 34, 34, 0.5)"
        _placeholder={{ color: 'rgba(34, 34, 34, 0.5)' }}
        border="none"
        _focusVisible={{ border: 'none', boxShadow: 'none' }}
        px="22px"
        pr="54px"
      />
      <InputRightElement h="full" pr="15px">
        <IconButton
          aria-label="Buscar"
          icon={<SearchIcon />}
          bg="transparent"
          color="rgba(34, 34, 34, 0.5)"
          _hover={{ bg: 'transparent', color: '#222222' }}
          _active={{ bg: 'transparent' }}
          size="sm"
        />
      </InputRightElement>
    </InputGroup>
  );
}
