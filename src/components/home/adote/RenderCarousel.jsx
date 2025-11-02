'use client';

import { useRef, useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import { CarouselButton } from './Carousel/CarouselButton';
import { CarouselTrack } from './Carousel/CarouselTrack';

export function RenderCarousel({ items = [], index, setIndex }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = 24;

  const getVisibleCards = (width) => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const measure = () => {
      const w = containerRef.current?.clientWidth || 0;
      setContainerWidth(w);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const clientWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const visibleCards = getVisibleCards(containerWidth || clientWidth);

  const MAX_CARD_WIDTH = 420;
  const cardWidthRaw = containerWidth
    ? Math.max(0, (containerWidth - gap * (visibleCards - 1)) / visibleCards)
    : MAX_CARD_WIDTH;
  const cardWidth = Math.min(MAX_CARD_WIDTH, Math.round(cardWidthRaw));

  const totalWidth = items.length * cardWidth + Math.max(0, items.length - 1) * gap;
  const maxIndex = Math.max(0, items.length - visibleCards);
  const safeIndex = Math.min(Math.max(0, index), maxIndex);

  const maxOffset = Math.max(0, totalWidth - (containerWidth || 0));
  const desiredOffset = Math.round(safeIndex * (cardWidth + gap));
  const offset = Math.min(desiredOffset, maxOffset);

  const prev = () => setIndex(Math.max(0, safeIndex - visibleCards));
  const next = () => setIndex(Math.min(maxIndex, safeIndex + visibleCards));

  return (
    <Box position="relative" w="full" overflow="hidden" py={1} ref={containerRef}>
      {safeIndex > 0 && (
        <CarouselButton direction="left" onClick={prev} zIndex={10} />
      )}

      {safeIndex < maxIndex && (
        <CarouselButton direction="right" onClick={next} zIndex={5} />
      )}

      <CarouselTrack
        items={items}
        cardWidth={cardWidth}
        gap={gap}
        offset={offset}
      />
    </Box>
  );
}
