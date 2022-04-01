import { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";
import {
  Text,
  Box,
  VStack,
  Grid,
  IconButton,
  Icon,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Center,
  useColorModeValue,
  Progress,
} from "@chakra-ui/react";
import GradeInput from "../components/GradeInput";
import { FaPlus } from "react-icons/fa";
import { CourseDataType, SGPAResultType } from "../types";
import { v4 as uuidv4 } from "uuid";
import CustomBtn from "../components/CustomBtn";

const SgpaPage: NextPage = () => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [courseData, setCourseData] = useState<CourseDataType[] | []>([]);
  const [resultData, setResultData] = useState<SGPAResultType | null>(null);

  const bg = useColorModeValue("lightTwo", "darkTwo");

  const addCourse = () => {
    return setCourseData((prev) => [
      ...prev,
      {
        id: uuidv4(),
        course: "",
        units: 1,
        grade: 0,
      },
    ]);
  };

  const updateCourseData = (
    id: string,
    key: "course" | "grade" | "units",
    value: string | number
  ) => {
    return setCourseData((prev) =>
      prev.map((courseItem) => {
        if (courseItem.id === id) {
          if (typeof value === "string" && key === "course") {
            courseItem.course = value;
          } else if (typeof value === "number" && key === "grade") {
            courseItem.grade = value;
          } else if (typeof value === "number" && key === "units") {
            courseItem.units = value;
          } else {
            return courseItem;
          }
        }

        return courseItem;
      })
    );
  };

  const calculateGP = () => {
    const totalUnits = courseData
      .map((courseItem) => courseItem.units)
      .reduce((a, b) => a + b, 0);

    const totalAttainable = totalUnits * 5;

    const numPassed = courseData.filter(
      (courseItem) => courseItem.grade > 0
    ).length;
    const numFailed = courseData.length - numPassed;

    let totalPoints = 0;

    courseData.forEach((courseItem) => {
      totalPoints += courseItem.units * courseItem.grade;
    });

    setResultData({
      totalAttainable,
      totalPoints,
      gp: (totalPoints / totalUnits).toFixed(2),
      percent: (totalPoints * 100) / totalAttainable,
      numCourses: courseData.length,
      numPassed,
      numFailed,
      numPercent: (numPassed * 100) / courseData.length,
    });

    setCompleted(true);
  };

  // const scrollToTop = (val) => {
  //   window.scrollTo({ behavior: "smooth", top: ref?.current?.offsetTop });
  // };

  return (
    <Layout scroll={true}>
      <Text textAlign="center" fontSize="xl">
        Calculate Semester GP
      </Text>
      <Box mt={4} p={6}>
        {completed ? (
          <Grid templateRows="7fr 2fr 2fr" gap={4}>
            <Center w="full" h="full">
              <CircularProgress
                value={resultData?.percent}
                size="full"
                thickness="8px"
                color="main"
                trackColor={bg}
              >
                <CircularProgressLabel>
                  <Text color="main" fontSize="4xl" fontWeight="600">
                    {resultData?.percent}%
                  </Text>
                  <Text fontSize="xl" mt={4}>
                    {resultData?.totalPoints}/{resultData?.totalAttainable}
                  </Text>
                  <Text fontSize="md">Points</Text>
                </CircularProgressLabel>
              </CircularProgress>
            </Center>
            <Text textAlign="center">
              <Text as="span" color="main" fontWeight="600" fontSize="4xl">
                {resultData?.gp}
              </Text>
              <Text as="span"> </Text>
              <Text as="span" fontSize="xl">
                GP
              </Text>
            </Text>
            <Box h="full" w="full">
              <Progress
                size="xs"
                colorScheme="theme"
                value={resultData?.numPercent}
              />
              <Flex justify="space-between" mt={4}>
                <Box>
                  <Text fontWeight="600">
                    {resultData?.numPassed}/{resultData?.numCourses}
                  </Text>
                  <Text fontSize="xs">Passed</Text>
                </Box>
                <Box>
                  <Text fontWeight="600">
                    {resultData?.numFailed}/{resultData?.numCourses}
                  </Text>
                  <Text fontSize="xs">Failed</Text>
                </Box>
              </Flex>
            </Box>
          </Grid>
        ) : (
          <>
            <Box h={100} w="full" borderWidth={1} borderRadius="5"></Box>

            <Box mt={8}>
              {courseData.length > 0 ? (
                <Grid templateColumns="1fr 1fr 1fr" gap={6}>
                  <Text>Course</Text>
                  <Text>Units</Text>
                  <Text>Grade</Text>
                </Grid>
              ) : null}

              <VStack spacing={8} align="left" mt={6}>
                {courseData.map((courseItem) => (
                  <GradeInput
                    key={courseItem.id}
                    course={courseItem.course}
                    grade={courseItem.grade}
                    units={courseItem.units}
                    id={courseItem.id}
                    updateCourseData={updateCourseData}
                  />
                ))}
              </VStack>

              <Flex justify="flex-end" mt={8}>
                <IconButton
                  aria-label="Add course"
                  icon={<Icon as={FaPlus} color="white" />}
                  borderRadius="50"
                  bg="main"
                  onClick={addCourse}
                />
              </Flex>

              <Box mt={6}>
                <CustomBtn
                  text="CALCULATE"
                  disabled={courseData.length < 1}
                  onClick={calculateGP}
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default SgpaPage;
