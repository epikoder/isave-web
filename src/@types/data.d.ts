interface loginData {
  email?: string;
  password?: string;
}

interface signupData {
  name: string;
  email: string;
  password: string;
  next_of_kin: string;
  bvn: string;
  nin: string;
  address: string;
}

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
}
