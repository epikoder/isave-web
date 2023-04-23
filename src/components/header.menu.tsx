import { Stack, StackProps } from "@chakra-ui/react";
import { HeaderLink } from "./header.link.component";

export default function HeaderMenu(props: StackProps) {
  return (
    <Stack
      spacing={4}
      direction={"row"}
      display={{
        base: "block",
        md: "flex",
      }}
      alignItems={"center"}
      {...props}
    >
      <HeaderLink title="About Us" url="/#" />
      <HeaderLink title="Contact Us" url="/#" />
    </Stack>
  );
}
