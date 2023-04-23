import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
} from "@chakra-ui/react";
import { useState } from "react";

const PasswordComponent = (props: InputProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <InputGroup size={{ base: "md", md: "lg" }}>
      <Input
        variant={"filled"}
        placeholder={"********"}
        {...props}
        type={isVisible ? "text" : "password"}
      />
      <InputRightAddon fontSize={{ base: "" }}>
        <IconButton
          size={{ base: "md", md: "lg" }}
          bgColor={"gray.100"}
          aria-label="visibility"
          onClick={toggleVisibility}
        >
          {!isVisible ? <LockIcon /> : <UnlockIcon />}
        </IconButton>
      </InputRightAddon>
    </InputGroup>
  );
};

export default PasswordComponent;
