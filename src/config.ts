import { IronSessionOptions } from "iron-session";

const sessionOptions: IronSessionOptions = {
  cookieName: "x-session",
  password: process.env.SESSION_PASSWORD || "",
  cookieOptions: {
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  },
};

export { sessionOptions };
