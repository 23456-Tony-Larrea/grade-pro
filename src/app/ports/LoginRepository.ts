import Login from "../domain/login";

export interface ILoginPort {
    login(login: Login): Promise<any>;
  }
