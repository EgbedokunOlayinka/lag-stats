import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ICustomBtnProps {
  children?: ReactNode;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomBtn = ({
  children,
  text,
  onClick,
  disabled,
  ...props
}: ICustomBtnProps) => {
  return (
    <Button
      background="main"
      borderRadius="5"
      color="white"
      _hover={{ opacity: "0.8" }}
      p={6}
      w="full"
      onClick={onClick}
      disabled={disabled ?? false}
      {...props}
    >
      {text ?? children}
    </Button>
  );
};

export default CustomBtn;
