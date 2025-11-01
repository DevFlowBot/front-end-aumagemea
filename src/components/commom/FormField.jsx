import { Box, Text } from '@chakra-ui/react';

import { StyledInput } from './StyledInput';

export function FormField({ label, placeholder }) {
  return (
    <Box>
      <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" mb="10px" color="#222">
        {label}
      </Text>
      <StyledInput placeholder={placeholder} />
    </Box>
  );
}

