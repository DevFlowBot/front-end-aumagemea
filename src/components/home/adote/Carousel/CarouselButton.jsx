'use client';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export function CarouselButton({ direction = 'right', onClick, zIndex = 5 }) {
  const isLeft = direction === 'left';

  return (
    <Button
      onClick={onClick}
      position="absolute"
      left={isLeft ? '25px' : undefined}
      right={!isLeft ? '25px' : undefined}
      top="50%"
      transform={`translateY(-50%) ${isLeft ? 'scaleX(-1)' : ''}`}
      w="60px"
      h="60px"
      borderRadius="full"
      bg="#FFBD43"
      border="4px solid white"
      boxShadow="0px 2px 4px rgba(0,0,0,0.25)"
      zIndex={zIndex}
      _hover={{ bg: '#FFB233' }}
    >
      <ArrowForwardIcon color="black" w={8} h={8} />
    </Button>
  );
}
