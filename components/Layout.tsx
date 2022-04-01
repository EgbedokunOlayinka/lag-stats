import Head from "next/head";
import {
  Box,
  Container,
  Center,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ReactNode } from "react";

interface ILayoutProps {
  title?: string;
  children: ReactNode;
  scroll?: boolean;
}

const Layout = ({ title, children, scroll }: ILayoutProps) => {
  const bg = useColorModeValue("lightBG", "darkBG");
  const boxBg = useColorModeValue("lightOne", "darkOne");

  return (
    <div>
      <Head>
        <title>{title ?? "LAG STATS"}</title>
        <meta
          name="description"
          content="Visualize performance for Unilag students"
        />
        <meta name="keywords" content="unilag, cgpa, gp, sgpa, akoka" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Box as="main" w="full" h="full" maxH="100vh" bg={bg} overflowY="hidden">
        <Container h="100vh" maxW="container.lg" py={4}>
          <Center h={50} w="full">
            <ColorModeSwitcher />
          </Center>
          <Flex py={12} justify="center">
            <Box
              background={boxBg}
              maxWidth="600px"
              w="full"
              h="full"
              borderRadius="5"
              p={[4, null, 8]}
              overflowY={scroll ? "scroll" : "hidden"}
              maxHeight="80vh"
            >
              {children}
            </Box>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default Layout;
