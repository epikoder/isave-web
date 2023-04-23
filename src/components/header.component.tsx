import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HeaderLink } from "./header.link.component";
import HeaderMenu from "./header.menu";
import Logo from "./logo.component";
import Section from "./section.component";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const _toggleOpen = () => setIsOpen(!isOpen);
  return (
    <Section bg={"rgb(6, 92, 203)"}>
      <Flex
        alignItems={"center"}
        h={"80px"}
        justifyContent={"space-between"}
        px={4}
      >
        <Logo />
        <HeaderMenu display={{ base: "none", md: "flex" }} />
        <HeaderLink
          display={{ base: "none", md: "block" }}
          title="Login"
          url="/login"
        />
        <IconButton
          display={{ md: "none" }}
          aria-label="main-menu"
          onClick={_toggleOpen}
          icon={<HamburgerIcon />}
        />
        <Drawer
          isOpen={isOpen}
          onClose={_toggleOpen}
          placement="right"
          useInert
        >
          <DrawerOverlay />
          <DrawerContent bgColor={"rgb(14, 117, 250)"}>
            <DrawerHeader>
              <Flex justifyContent={"end"}>
                <IconButton
                  size={"sm"}
                  aria-label=""
                  onClick={_toggleOpen}
                  icon={<CloseIcon />}
                />
              </Flex>
            </DrawerHeader>
            <DrawerBody px={4}>
              <Stack spacing={4}>
                <HeaderLink title="About Us" url="/#" />
                <HeaderLink title="Contact Us" url="/#" />
                <HeaderLink title="Login" url="/login" />
                <HeaderLink title="Signup" url="/signup" />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Section>
  );
};

export default Header;
