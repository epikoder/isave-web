import useResolveActiveLink from "@/hooks/useResolveActiveLink";
import { Box, Flex, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

export const HeaderLink: FC<FlexProps & { title: string; url: string }> = ({
  title,
  url,
  color = "white",
  ...props
}) => {
  const active = useResolveActiveLink({ url });

  return (
    <Link href={url} className={`p-3 custom`}>
      <Flex {...props} color={color} px={1}>
        <Box
          className={`${
            active ? "half-border" : "hover:half-border"
          } font-bold`}
        >
          {title}
        </Box>
      </Flex>
    </Link>
  );
};
