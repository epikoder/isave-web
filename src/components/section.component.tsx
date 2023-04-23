import { Box, BoxProps, others } from "@chakra-ui/react";
import { FC } from "react";

const Section: FC<BoxProps & { sx?: BoxProps }> = ({
  sx,
  children,
  ...others
}) => (
  <Box {...others}>
    <Box
      {...sx}
      marginX={"auto"}
      maxW={{
        base: "unset",
        md: 1024,
      }}
    >
      {children}
    </Box>
  </Box>
);

export default Section;
