import type { NextPage } from "next";
import Layout from "../components/Layout";
import { Text, VStack } from "@chakra-ui/react";
import CustomBtn from "../components/CustomBtn";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Text fontSize="3xl" textAlign="center">
        Welcome to LagStats
        <VStack mt={8} spacing={4}>
          <Link href="/stats">
            <CustomBtn>View Student Stats</CustomBtn>
          </Link>
          <Link href="/sgpa">
            <CustomBtn>Calculate Semester GP</CustomBtn>
          </Link>
          <Link href="/cgpa">
            <CustomBtn>Calculate Cumulative GPA</CustomBtn>
          </Link>
        </VStack>
      </Text>
    </Layout>
  );
};

export default Home;
