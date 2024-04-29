import LoginRepositoryAxios from "../adapters/LoginRepositoryAxios";
import Login from "../domain/login";
import {ILoginPort} from "../ports/LoginRepository"
export default class LoginUseCase implements ILoginPort {
    loginRepository: LoginRepositoryAxios;
  
    constructor(loginRepository: LoginRepositoryAxios) {
      this.loginRepository = loginRepository;
    }
    login(login: Login): Promise<any> {
        return this.loginRepository.login(login);
    }
  }