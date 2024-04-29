import { ILoginPort } from '../ports/LoginRepository';
import Login from '../domain/login';
import http from '../../plugins/axios'; // Importa la instancia de axios

export default class LoginRepositoryAxios implements ILoginPort {
    async login(login: Login): Promise<any> {
        const response = await http.post('/api/login', { // Usa la instancia de axios
            email: login.email,
            password: login.password,
        });
        return response.data;
    }
}