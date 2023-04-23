const emailValidator: ValidatorFunction = (text) => {
  if (text?.trim().length === 0) return null;
  let valid = String(text)
    .trim()
    .toLowerCase()
    .match(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );
  return valid?.[0] === undefined ? "email is invalid" : null;
};

const bvnValidator: ValidatorFunction = (text) => {
  if (text?.trim().length === 0) return null;
  let valid = String(text)
    .trim()
    .match(/([/d])+$/);
  return valid?.[0] === undefined ? "bvn is invalid" : null;
};

const ninValidator: ValidatorFunction = (text) => {
  if (text?.trim().length === 0) return null;
  let valid = String(text)
    .trim()
    .match(/([/d])+$/);
  return valid?.[0] === undefined ? "bvn is invalid" : null;
};

const notEmptyValidator: ValidatorFunction = (text) =>
  text?.trim()?.length === 0 ? "invalid" : null;
export { emailValidator, bvnValidator, ninValidator, notEmptyValidator };
