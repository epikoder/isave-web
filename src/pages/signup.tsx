import XButton from "@/components/button.component";
import XInput from "@/components/input.component";
import Layout from "@/components/layout.component";
import PasswordComponent from "@/components/password.component";
import Section from "@/components/section.component";
import {
  bvnValidator,
  emailValidator,
  ninValidator,
  notEmptyValidator,
} from "@/utils/validator";
import { Box, Center, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [form, setForm] = useState<signupData>({
    name: "",
    email: "",
    password: "",
    address: "",
    bvn: "",
    next_of_kin: "",
    nin: "",
  });

  const onSignup = async () => {};
  return (
    <Layout>
      <Section
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 500,
          paddingY: { base: 4, md: 8 },
        }}
      >
        <Stack>
          <Text fontSize={{ base: "md", md: "2xl" }}>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {"Join"}
            </span>{" "}
            {"us"}
          </Text>
          <XInput
            placeholder="Full Name"
            name="name"
            validator={notEmptyValidator}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
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
          <XInput
            placeholder="Next of Kin"
            name="next_of_kin"
            validator={notEmptyValidator}
            onChange={(e) => setForm({ ...form, next_of_kin: e.target.value })}
          />
          <XInput
            placeholder="BVN"
            name="bvn"
            validator={bvnValidator}
            onChange={(e) => setForm({ ...form, bvn: e.target.value })}
          />
          <XInput
            placeholder="NIN"
            name="nin"
            validator={ninValidator}
            onChange={(e) => setForm({ ...form, nin: e.target.value })}
          />
          <XInput
            placeholder="Address"
            name="address"
            validator={notEmptyValidator}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <Center py={4}>
            <XButton
              title="Create Account"
              useProgress={true}
              onClick={onSignup}
            />
          </Center>
          <Center>
            <Link href={"/login"}>
              <Text fontSize={"sm"}>
                {"Already have an account? "}
                <span style={{ color: "blue" }}>{"Login"}</span>
              </Text>
            </Link>
          </Center>
        </Stack>
      </Section>
    </Layout>
  );
};

export default Page;
