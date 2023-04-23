import { Button, ButtonProps, CircularProgress, Stack } from "@chakra-ui/react";
import { FC, useState } from "react";

const color = "rgb(6, 92, 203)";
const XButton: FC<ButtonProps & { title: string; useProgress?: boolean }> = ({
  useProgress = false,
  title,
  onClick,
  disabled,
  ...otherProps
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <Button
      maxWidth={300}
      width={"100%"}
      color={"white"}
      size={{ base: "md", md: "lg" }}
      bgColor={color}
      _hover={{
        bgColor: "rgba(14, 58, 112, 0.88)",
      }}
      _active={{
        bgColor: color,
      }}
      {...otherProps}
      disabled={isLoading || disabled}
      onClick={async (e) => {
        setLoading(true);
        if (onClick) {
          try {
            await onClick(e);
          } catch (error) {
            console.error(error);
          }
        }
        setLoading(false);
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        {useProgress && isLoading && (
          <CircularProgress isIndeterminate size={8} />
        )}
        <span>{title}</span>
      </Stack>
    </Button>
  );
};
export default XButton;
