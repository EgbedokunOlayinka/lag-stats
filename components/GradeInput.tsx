import {
  Box,
  Flex,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  useNumberInput,
  HStack,
  Button,
  Grid,
} from "@chakra-ui/react";
import useMediaQuery from "../hooks/useMediaQuery";
import { CourseDataType } from "../types";

type GradeInputProps = CourseDataType & {
  updateCourseData: (
    id: string,
    key: "course" | "grade" | "units",
    value: string | number
  ) => void;
};

const GradeInput = ({
  grade,
  units,
  course,
  id,
  updateCourseData,
}: GradeInputProps) => {
  const isBreakpoint = useMediaQuery(600);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: units,
      min: 1,
      max: 20,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ readOnly: true });

  return (
    <Grid templateColumns="1fr 1fr 1fr" gap={6}>
      <Input
        variant="flushed"
        placeholder="ZLY111"
        value={course}
        onChange={(e) => updateCourseData(id, "course", e.target.value)}
        required
      />

      {!isBreakpoint ? (
        <NumberInput
          defaultValue={units}
          min={1}
          max={20}
          onChange={(val) => updateCourseData(id, "units", Number(val))}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : (
        <HStack>
          <Button
            background="main"
            borderRadius="50"
            color="white"
            _hover={{ opacity: "0.8" }}
            {...dec}
          >
            -
          </Button>
          <Input {...input} minW={45} textAlign="center" />
          <Button
            background="main"
            borderRadius="50"
            color="white"
            _hover={{ opacity: "0.8" }}
            {...inc}
          >
            +
          </Button>
        </HStack>
      )}

      <Select
        placeholder="Grade"
        variant="flushed"
        value={grade}
        onChange={(e) => updateCourseData(id, "grade", Number(e.target.value))}
      >
        <option value="5">A</option>
        <option value="4">B</option>
        <option value="3">C</option>
        <option value="2">D</option>
        <option value="1">E</option>
        <option value="0">F</option>
      </Select>
    </Grid>
  );
};

export default GradeInput;
