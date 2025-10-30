'use client';

import { Box } from '@chakra-ui/react';

import { CarouselButton } from './Carousel/CarouselButton';
import { CarouselTrack } from './Carousel/CarouselTrack';

export function RenderCarousel(array, index, setIndex) {
  const gap = 24;
  const visibleCards = 3;
  const itemsPerPage = 3;
  const cardWidth = 420;

  const totalWidth = array.length * (cardWidth + gap);
  const containerWidth = visibleCards * cardWidth + (visibleCards - 1) * gap;
  const maxOffset = Math.max(0, totalWidth - containerWidth);

  const prev = (index, setIndex) => {
    if (index > 0) setIndex(index - itemsPerPage);
  };

  const next = (index, setIndex, arrayLength) => {
    if (index + itemsPerPage < arrayLength) setIndex(index + itemsPerPage);
  };

  return (
    <Box position="relative" w="full" overflow="hidden" py={2}>
      {index > 0 && (
        <CarouselButton direction="left" onClick={() => prev(index, setIndex)} zIndex={10} />
      )}

      {index < array.length - visibleCards && (
        <CarouselButton
          direction="right"
          onClick={() => next(index, setIndex, array.length)}
          zIndex={5}
        />
      )}

      <CarouselTrack
        items={array}
        cardWidth={cardWidth}
        gap={gap}
        offset={Math.min(index * (cardWidth + gap), maxOffset)}
      />
    </Box>
  );
}
