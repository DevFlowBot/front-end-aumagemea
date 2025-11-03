import { Input } from '@chakra-ui/react';

export function StyledInput(props) {
  return (
    <Input
      h={{ base: '44px', sm: '48px', md: '52px' }}
      lineHeight={{ base: '44px', sm: '48px', md: '52px' }}
      border="1px solid rgba(34, 34, 34, 0.5)"
      borderRadius="10px"
      fontFamily="Open Sans"
      fontSize={{ base: '14px', sm: '15px', md: '16px' }}
      color="rgba(77, 74, 74, 0.8)"
      px={{ base: '16px', sm: '18px', md: '22px' }}
      _placeholder={{ color: 'rgba(0, 0, 0, 0.5)' }}
      focusBorderColor="#8D3767"
      {...props}
    />
  );
}
