import Layout from "@/components/layout.component";
import Section from "@/components/section.component";
import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Page = () => (
  <Layout>
    <Section bg={"rgb(6, 92, 203)"} h={{ md: "calc(100vh - 80px)" }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "unset" }}
        spacing={8}
        py={20}
        px={12}
      >
        <Box
          position={"relative"}
          _after={{
            position: "absolute",
            content: `" "`,
            top: -10,
            left: -10,
            bgColor: "black",
            width: { base: 200, md: 300 },
            height: { base: 200, md: 300 },
            rounded: "3xl",
          }}
          width={{ base: 250, md: 450 }}
          height={{ base: 250, md: 450 }}
        >
          <Box
            position={"absolute"}
            zIndex={1}
            width={{ base: 200, md: 300 }}
            height={{ base: 200, md: 300 }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"white"}
            rounded={"3xl"}
            p={4}
          >
            <Image
              src={"/images/coins.png"}
              alt={""}
              width={300}
              height={300}
            />
          </Box>
        </Box>
        <Box color={"white"}>
          <Text fontWeight={"bold"} fontSize={{ base: "2xl", lg: "3xl" }}>
            Welcome to I-Save
          </Text>
          <Text>Save and earn with us</Text>
        </Box>
      </Stack>
    </Section>
    <Section>
      
    </Section>
  </Layout>
);

export default Page;
