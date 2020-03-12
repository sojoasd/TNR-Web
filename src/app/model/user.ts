interface ILoginUser {
  id: string;
  name: string;
  role: string;
  picture: string;
  accessToken: string;
  expireEpochDate: number;
}

interface ITest {
  id: number;
  name: string;
}

export { ILoginUser, ITest };
