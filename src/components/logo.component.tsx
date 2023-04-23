import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href={"/"}>
    <Image src={"/images/logo.png"} alt={"logo"} width={40} height={40} />
  </Link>
);

export default Logo;
