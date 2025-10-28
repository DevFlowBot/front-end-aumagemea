import { Flex } from '@chakra-ui/react';

import { Footer, Wave } from '@/components/commom';

export default function HomePage() {
  return (
    <Flex direction="column" minH="100vh">
      <Flex flex="1" justify="center" align="center">
        <h1>Home</h1>
      </Flex>

      <FooterWithWave />
    </Flex>
  );
}

const FooterWithWave = () => {
  return (
    <Flex position="relative" w="100%" direction="column">
      <Wave height="200px" color="#222222" position="absolute" top="-200px" />
      <Footer />
    </Flex>
  );
};
