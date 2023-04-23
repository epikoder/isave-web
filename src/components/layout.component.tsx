import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import Header from "./header.component";

const Layout: FC<PropsWithChildren> = (props) => (
  <>
    <Header />
    {props.children}
  </>
);

export default Layout;
