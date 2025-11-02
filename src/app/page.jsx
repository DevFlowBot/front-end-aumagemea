'use client';

import { useState } from 'react';
import { Flex, Box, Button, Text, Image } from '@chakra-ui/react';
import { Footer, Wave, BlogCard } from '@/components/commom';
import { RenderCarousel } from '@/components/home/adote';

import blogData from '../../fakedata/blog.json' assert { type: 'json' };
import pets from '../../fakedata/adote.json' assert { type: 'json' };

export default function HomePage() {
  return (
    <Flex direction="column" minH="100vh" overflowX="hidden">
      <HomeCard />
      <MotivosSection />
      <AdoteHome />
      <BlogWithWave />
      <ParceirosSection />
      <FooterWithWave />
    </Flex>
  );
}

const HomeCard = () => (
  <Box
    w="100%"
    minH={{ base: '70vh', md: '90vh' }}
    bgImage="url('/dog-home.png')"
    bgRepeat="no-repeat"
    bgSize={{ base: 'cover', md: '80% auto' }}
    bgPosition={{ base: 'center top', md: 'center bottom' }}
    position="relative"
    overflow="hidden"
    left="100px"
    top="100px"
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap={{ base: 6, md: 10 }}
      position="absolute"
      width={{ base: '80%', md: '454px' }}
      height="auto"
      left={{ base: '10%', md: '200px' }}
      top={{ base: '10%', md: '130px' }}
    >
      <Text
        fontSize={{ base: '3xl', md: '7xl' }}
        fontWeight="bold"
        fontFamily="Poppins"
        whiteSpace="nowrap"
        mt={{ base: '30px', md: '-50px' }}
      >
        <Box as="span" color="#F29F05">AU</Box>
        <Box as="span" color="#730E45">ma Gêmea</Box>
      </Text>
      <Text
        fontFamily="Poppins"
        fontWeight="500"
        fontSize={{ base: '16px', md: '24px' }}
        lineHeight={{ base: '24px', md: '36px' }}
        color="#730E45"
        w={{ base: '100%', md: '500px' }}
        mt={{ base: '30px', md: '-60px' }}
      >
        Um novo AUmigo, uma nova paixão!
      </Text>
      <Button
        w={{ base: '140px', md: '200px' }}
        h={{ base: '40px', md: '60px' }}
        bg="#730E45"
        color="white"
        borderRadius="100px"
        mt={{ base: '30px', md: '300px' }}
        _hover={{ bg: '#5a0b33' }}
      >
        ADOTAR
      </Button>
    </Box>
  </Box>
);

const MotivosSection = () => (
  <Box w="100%" position="relative" zIndex={0}>
    <Wave color="#F3D8EA" />
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={{ base: 8, md: 10 }}
      p={{ base: 6, md: 10 }}
      bg="#F3D8EA"
      w="100%"
      zIndex={1}
      position="relative"
    >
      <Text
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="500"
        fontFamily="Poppins"
        mb={{ base: 4, md: 8 }}
        color="#730E45"
        textAlign="center"
      >
        Motivos para nos escolher!
      </Text>

      <Flex
        w="100%"
        maxW="1000px"
        h={{ base: 'auto', md: '800px' }}
        mx="auto"
        gap={{ base: 4, md: 6 }}
        overflow="visible"
        position="relative"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        justify="center"
      >
        <Image
          src="/patinhas/patinhas-motivos-esquerda.png"
          alt="Patinhas Esquerda"
          position="absolute"
          top={{ base: '-30px', md: '-180px' }}
          left={{ base: '-60px', md: '-510px' }}
          zIndex="0"
          w={{ base: '130px', md: '450px', lg: '650px' }}
          opacity="0.8"
          display={{ base: 'none', md: 'block' }}
        />
        <Box w={{ base: '100%', md: '50%' }} position="relative" zIndex="1">
          <Image
            w="100%"
            h="auto"
            src="/diferenciais.png"
            alt="Diferenciais"
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Image
          src="/patinhas/patinhas-motivos-direita.png"
          alt="Patinhas Direita"
          position="absolute"
          bottom={{ base: '-20px', md: '-105px' }}
          right={{ base: '-40px', md: '-450px' }}
          zIndex="0"
          w={{ base: '110px', md: '400px', lg: '700px' }}
          opacity="0.8"
          display={{ base: 'none', md: 'block' }}
        />
        <Box w={{ base: '100%', md: '50%' }} position="relative" zIndex="1">
          <Image
            w="100%"
            h="auto"
            src="/dog-and-cat.png"
            alt="Dog and Cat"
            style={{ objectFit: 'contain' }}
            ml="150px"
            mt="150px"
          />

        </Box>
      </Flex>
    </Flex>
    <Wave color="#F3D8EA" invert mirror />
  </Box>
);

export function AdoteHome() {
  const cachorros = pets.filter((pet) => pet.tipo.toLowerCase() === 'cachorro');
  const gatos = pets.filter((pet) => pet.tipo.toLowerCase() === 'gato');
  const [indexC, setIndexC] = useState(0);
  const [indexG, setIndexG] = useState(0);

  return (
    <Flex direction="column" position="relative" overflowX="hidden">
      <Box position="relative" w="100%" overflow="hidden" px={{ base: 2, md: 4, lg: 6 }}>
        <Image
          src="patinhas/patinhas-audote-branca.png"
          alt="Patinhas topo"
          position="absolute"
          top={{ base: '-40px', md: '-115px' }}
          left={{ base: '4%', md: '8%' }}
          w={{ base: '180px', md: '400px', lg: '900px' }}
          opacity={0.7}
          zIndex={0}
          pointerEvents="none"
          display={{ base: 'none', md: 'block' }}
        />
        <Flex mb={12} align="center" justify="center" position="relative" zIndex={1}>
          <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="500" fontFamily="Poppins" whiteSpace="nowrap">
            <Box as="span" color="#F29F05">AU</Box>
            <Box as="span" color="#222222">dote</Box>
          </Text>
        </Flex>
        <Box mb={4} position="relative" zIndex={1}>
          <RenderCarousel items={cachorros} index={indexC} setIndex={setIndexC} />
        </Box>
        <Box mb={4} position="relative" zIndex={1}>
          <RenderCarousel items={gatos} index={indexG} setIndex={setIndexG} />
        </Box>
        <Flex py={4} justify="center" position="relative" zIndex={1}>
          <Button
            variant="outline"
            href="/adote"
            as="a"
            borderColor="#F29F05"
            bg="white"
            color="#F29F05"
            borderWidth="3px"
            borderRadius="full"
            boxShadow="md"
            size="lg"
            px={{ base: 6, md: 10 }}
            py={{ base: 3, md: 6 }}
            _hover={{
              bg: 'white',
              color: '#F29F05',
              transform: 'scale(1.05)',
            }}
          >
            VER MAIS
          </Button>
        </Flex>
        <Image
          src="patinhas/patinhas-audote-branca.png"
          alt="Patinhas inferior"
          position="absolute"
          bottom={{ base: '-60px', md: '-180px' }}
          right={{ base: '2%', md: '7%' }}
          w={{ base: '180px', md: '400px', lg: '800px' }}
          opacity={0.7}
          zIndex={0}
          pointerEvents="none"
          display={{ base: 'none', md: 'block' }}
        />
      </Box>
    </Flex>
  );
}

export const BlogWithWave = () => (
  <Box w="100%" position="relative" zIndex={0}>
    <Wave color="#FFECC8" />
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={{ base: 4, md: 6 }}
      p={{ base: 4, md: 10 }}
      bg="#FFECC8"
      w="100%"
      zIndex={1}
    >
      <Text
        fontSize={{ base: 'xl', md: '2xl', lg: '32px' }}
        fontWeight="500"
        color="#222222"
        mb={6}
        textAlign="center"
        fontFamily="Poppins"
      >
        Se informe com AUma Blog
      </Text>
      <BlogDataCard />
    </Flex>
    <Wave color="#FFECC8" invert mirror />
  </Box>
);

const BlogDataCard = () => (
  <Flex direction="column" align="center" gap={{ base: 4, md: 6 }} maxW="1200px" w="100%" position="relative" zIndex={1}>
    <Image
      src="/patinhas/blog-patinhas-esquerda.png"
      alt="Patinhas Esquerda"
      position="absolute"
      top={{ base: '-30px', md: '-140px' }}
      left={{ base: '-40px', md: '-320px' }}
      w={{ base: '70px', md: '350px', lg: '800px' }}
      opacity="0.8"
      zIndex={0}
      pointerEvents="none"
      display={{ base: 'none', md: 'block' }}
    />
    <Image
      src="/patinhas/blog-patinhas-direita.png"
      alt="Patinhas Direita"
      position="absolute"
      bottom={{ base: '-20px', md: '-65px' }}
      right={{ base: '-30px', md: '-350px' }}
      w={{ base: '80px', md: '380px', lg: '760px' }}
      opacity="0.8"
      zIndex={0}
      pointerEvents="none"
      display={{ base: 'none', md: 'block' }}
    />
    <Flex direction="row" wrap="wrap" justify="center" gap={{ base: 4, md: 6 }} position="relative" zIndex={1}>
      {blogData.slice(0, 4).map((item, index) => <BlogCard {...item} key={index} />)}
    </Flex>
    <Box textAlign="center" my={8}>
      <Button
        variant="outline"
        href="/blog"
        as="a"
        borderColor="#AB678D"
        borderWidth="3px"
        boxShadow="md"
        color="#AB678D"
        borderRadius="full"
        size="lg"
        px={{ base: 6, md: 10 }}
        py={{ base: 3, md: 6 }}
        _hover={{ bg: "#FFECC8", color: "#AB678D", transform: "scale(1.05)" }}
      >
        VER MAIS
      </Button>
    </Box>
  </Flex>
);

const ParceirosSection = () => (
  <Flex direction="column" align="center" justify="center" py={{ base: 24, md: 45 }} mt={{ base: -8, md: -10 }} mb={{ base: 12, md: 40 }}>
    <Text fontSize={{ base: '2xl', md: '40px' }} fontWeight="500" mb={12} fontFamily="Poppins" color="#8D3767">
      Parceiros
    </Text>
    <Flex wrap="wrap" justify="center" gap={{ base: 6, md: 48 }} align="center">
      <Box w={{ base: '200px', md: '387px' }} h={{ base: '175px', md: '339px' }} position="relative">
        <Image w="100%" h="100%" src="/logos/sampa.png" alt="Sampa" style={{ objectFit: 'contain' }} />
      </Box>
      <Box w={{ base: '200px', md: '387px' }} h={{ base: '175px', md: '339px' }} position="relative">
        <Image w="100%" h="100%" src="/logos/artemys.png" alt="Artemys" style={{ objectFit: 'contain' }} />
      </Box>
    </Flex>
  </Flex>
);

const FooterWithWave = () => (
  <Flex position="relative" w="100%" direction="column">
    <Wave height="200px" position="absolute" top="-200px" />
    <Footer />
  </Flex>
);
