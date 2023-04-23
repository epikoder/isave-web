export default class User implements UserInterface {
  constructor(user: UserInterface) {
    this.name = user.name;
    this.email = user.email;
    this.address = user.address;
    this.bvn = user.bvn;
    this.next_of_kin = user.next_of_kin;
    this.nin = user.nin;
    this.password = user.password;
  }
  name: string;
  email: string;
  password?: string | null;
  next_of_kin: string;
  nin: string;
  bvn: string;
  address: string;
}
