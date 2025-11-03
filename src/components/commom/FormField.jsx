import { Box, Text } from '@chakra-ui/react';
import { StyledInput } from './StyledInput';

export function FormField({ label, placeholder }) {
  return (
    <Box w="100%">
      <Text
        fontFamily="Open Sans"
        fontWeight="700"
        fontSize={{ base: '14px', sm: '15px', md: '16px', lg: '16px' }}
        mb={{ base: '6px', sm: '8px', md: '10px' }}
        color="#222"
      >
        {label}
      </Text>
      <StyledInput placeholder={placeholder} w="100%" />
    </Box>
  );
}
