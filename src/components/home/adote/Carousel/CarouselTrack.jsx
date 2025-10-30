'use client';
import { Flex, Box } from '@chakra-ui/react';
import { CardAdote } from '../CardAdote';

export function CarouselTrack({ items, cardWidth = 420, gap = 24, offset = 0 }) {
  const totalWidth = items.length * (cardWidth + gap);

  return (
    <Flex
      gap={`${gap}px`}
      flexWrap="nowrap"
      transition="transform 0.6s ease"
      style={{
        width: `${totalWidth}px`,
        transform: `translateX(-${offset}px)`,
      }}
    >
      {items.map((item, idx) => (
        <Box key={idx} flex={`0 0 ${cardWidth}px`}>
          <CardAdote {...item} />
        </Box>
      ))}
    </Flex>
  );
}
