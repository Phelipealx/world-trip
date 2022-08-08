import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: NextPage = () => {
  return (
    <Center bg="#011b32">
      <Grid maxW="90rem" bg="#FFFFFF">
        <Center m="1.5rem">
          <Image
            src="/icons/logo.svg"
            alt="world trip"
            w="184.06px"
            h="45.92px"
          />
        </Center>

        <Box height="368.21px" width="90rem" mb="100px">
          <Flex
            height="335px"
            backgroundImage="/icons/background.png"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box ml="140px" textAlign="start">
              <Text
                maxW="sm"
                color="white"
                fontSize="4xl"
                noOfLines={[1, 2]}
                mb="2rem"
              >
                5 Continentes, infinitas possibilidades.
              </Text>
              <Text maxW="md" color="white" fontSize="lg" noOfLines={[1, 2]}>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>
            <Box boxSize="sm" mt="250px" mr="140px">
              <Image src="/icons/airplane.png" alt="air plane" />
            </Box>
          </Flex>
        </Box>

        <Center mb="100px">
          <HStack spacing="10rem" maxW="1160px">
            <Link href="#">
              <Image src="/icons/nightlife.svg" alt="Vida noturna" />
            </Link>
            <Link href="#">
              <Image src="/icons/beach.svg" alt="Praia" />
            </Link>
            <Link href="#">
              <Image src="/icons/modern.svg" alt="Moderno" />
            </Link>
            <Link href="#">
              <Image src="/icons/classic.svg" alt="Clássico" />
            </Link>
            <Link href="#">
              <Image src="/icons/more.svg" alt="E mais..." />
            </Link>
          </HStack>
        </Center>

        <Center>
          <Divider colorScheme="#47585B" border="2px" mb="100px" width="90px" />
        </Center>

        <Box textAlign="center" justifyItems="center">
          <Text fontSize="4xl">Vamos nessa?</Text>
          <Text fontSize="4xl">Então escolha seu continente</Text>
        </Box>

        {/* <Swiper
          slidesPerView={1}
          spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}
      </Grid>
    </Center>
  );
};

export default Home;
