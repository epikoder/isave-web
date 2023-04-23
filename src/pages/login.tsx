import XButton from "@/components/button.component";
import XInput from "@/components/input.component";
import Layout from "@/components/layout.component";
import PasswordComponent from "@/components/password.component";
import Section from "@/components/section.component";
import { emailValidator } from "@/utils/validator";
import { Box, Center, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [form, setForm] = useState<loginData>({ email: "", password: "" });

  const onLogin = async () => {};

  return (
    <Layout>
      <Section
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 500,
        }}
      >
        <Stack>
          <Text fontSize={{ base: "md", md: "2xl" }}>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {"Welcome"}
            </span>{" "}
            {"Back"}
          </Text>
          <XInput
            type={"email"}
            placeholder="johndoe@gmail.com"
            name="email"
            validator={emailValidator}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <PasswordComponent
            placeholder="********"
            name="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Center py={4}>
            <XButton title="Login" useProgress={true} onClick={onLogin} />
          </Center>
          <Center>
            <Link href={"/signup"}>
              <Text fontSize={"sm"}>
                {"Don't have an account yet? "}
                <span style={{ color: "blue" }}>{"Sign up"}</span>
              </Text>
            </Link>
          </Center>
        </Stack>
      </Section>
    </Layout>
  );
};

export default Page;
