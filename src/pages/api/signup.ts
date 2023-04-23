import { checkHash } from "@/utils/hash";
import { parseReq } from "@/utils/helper";
import repo from "@/utils/repo";
import { withSessionRoute } from "@/utils/withSession";
import type { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(handler);
async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  let query = parseReq<loginData>(req.body);
  const user = await repo.user.findFirst({
    where: {
      email: query.email,
    },
  });

  let pwdValid = checkHash(query.password, user?.password);
  if (user && pwdValid) {
    req.session.user = user;
    await req.session.save();
  }

  res.status(200).json({ success: user !== null && pwdValid });
}
