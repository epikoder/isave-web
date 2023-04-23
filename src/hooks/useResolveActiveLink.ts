import { trimUrl } from "@/utils/helper";
import { useRouter } from "next/router";

const useResolveActiveLink = ({
  url,
  replace = "",
  home = "",
}: {
  url: string;
  replace?: string;
  home?: string;
}): boolean => {
  const router = useRouter();
  return (
    (router.pathname.replace(replace, "") === home && url === "/") ||
    router.pathname.replace(replace, "") === trimUrl(url)
  );
};

export default useResolveActiveLink;
