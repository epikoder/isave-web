import * as bcrypt from "bcryptjs";
const makeHash = (text: string) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(text, salt);
  return hash;
};

const checkHash: (text?: string | null, hash?: string | null) => boolean = (
  text,
  hash
) => {
  return bcrypt.compareSync(text || "", hash || "");
};

export { makeHash, checkHash };
