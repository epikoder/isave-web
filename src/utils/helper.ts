const asset = (url: string): string => url;
const trimUrl = (url: string): string => {
  if (url.startsWith("/")) {
    url = url.slice(1);
  }
  if (url.endsWith("/")) {
    url = url.slice(0, url.length - 1);
  }
  return url;
};
const parseReq = <T = {}>(body: any) => JSON.parse(body || "{}") as T;
export { asset, trimUrl, parseReq };
