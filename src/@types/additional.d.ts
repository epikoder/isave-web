import * as IronSession from "iron-session";
import User from "../lib/models/user.model";
declare module "iron-session" {
  interface IronSessionData {
    user?: User;
  }
}
