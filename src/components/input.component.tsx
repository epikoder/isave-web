import {
  Box,
  Input,
  InputProps,
  Text,
} from "@chakra-ui/react";
import { ChangeEventHandler, FC, useState } from "react";

interface XInputProps extends InputProps {
  validator?: ValidatorFunction;
  errorTextColor?: string;
}

const XInput: FC<XInputProps> = ({
  onChange,
  validator,
  errorTextColor = "red.300",
  ...props
}) => {
  const [validState, setValidState] = useState<{
    valid: boolean;
    text?: string;
  }>({ valid: true });

  const _onChange: ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
    if (onChange) onChange(e);
    if (validator) {
      let _valid = validator(e.target.value);
      if (_valid === null) {
        setValidState({ valid: true });
      } else {
        setValidState({ valid: false, text: _valid });
      }
    }
  };

  return (
    <Box>
      <Input
        {...props}
        errorBorderColor="red.300"
        focusBorderColor={!validState.valid ? "red.300" : undefined}
        variant={"filled"}
        size={{ base: "md", md: "lg" }}
        isInvalid={!validState.valid}
        onChange={_onChange}
      />
      <Text
        textAlign={"right"}
        fontSize={"sm"}
        color={errorTextColor}
        fontFamily={"italic"}
        px={1}
      >
        {validState.text}
      </Text>
    </Box>
  );
};

export default XInput;
