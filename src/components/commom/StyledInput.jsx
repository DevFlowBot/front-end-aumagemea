import { Input } from '@chakra-ui/react';

export function StyledInput(props) {
  return (
    <Input
      h="52px"
      lineHeight="52px"
      border="1px solid rgba(34, 34, 34, 0.5)"
      borderRadius="10px"
      fontFamily="Open Sans"
      fontSize="16px"
      color="rgba(77, 74, 74, 0.8)"
      px="22px"
      _placeholder={{ color: 'rgba(0, 0, 0, 0.5)' }}
      focusBorderColor="#8D3767"
      {...props}
    />
  );
}
