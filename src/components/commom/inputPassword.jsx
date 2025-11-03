'use client';

import { useState } from 'react';
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export function PasswordInput({ placeholder, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <InputGroup size="md" h={{ base: '40px', sm: '45px', md: '50px' }}>
      <Input
        pr={{ base: '2.5rem', sm: '2.8rem', md: '3rem' }}
        type={show ? 'text' : 'password'}
        placeholder={placeholder || 'Senha'}
        value={value}
        onChange={onChange}
        h="100%"
        fontSize={{ base: '14px', sm: '15px', md: '16px' }}
      />
      <InputRightElement h="100%">
        {show ? (
          <ViewOffIcon
            cursor="pointer"
            onClick={() => setShow(!show)}
            color="gray.500"
            w={{ base: 4, sm: 5, md: 6 }}
            h={{ base: 4, sm: 5, md: 6 }}
          />
        ) : (
          <ViewIcon
            cursor="pointer"
            onClick={() => setShow(!show)}
            color="gray.500"
            w={{ base: 4, sm: 5, md: 6 }}
            h={{ base: 4, sm: 5, md: 6 }}
          />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
