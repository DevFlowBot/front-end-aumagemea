import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export function StyledInput({ showToggle, showToggleState, onToggle, ...inputProps }) {
  return (
    <InputGroup>
      <Input
        {...inputProps}
        h="52px"
        borderRadius="10px"
        fontFamily="Open Sans"
        fontSize="16px"
        border="1px solid rgba(34, 34, 34, 0.5)"
        color="rgba(0, 0, 0, 0.8)"
        px="22px"
        _placeholder={{ color: 'rgba(0, 0, 0, 0.5)' }}
        _hover={{ borderColor: '#702c52' }}
        focusBorderColor="#8D3767"
      />
      {showToggle && (
        <InputRightElement height="100%">
          <IconButton
            size="sm"
            aria-label="Mostrar senha"
            icon={showToggleState ? <ViewOffIcon /> : <ViewIcon />}
            onClick={onToggle}
            variant="unstyled"
            color="gray.500"
            p={0}
            minW="auto"
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
}
