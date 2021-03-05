import type { LoginUser, RegisterUser } from '../../models/auth';
import type { User } from '../../models/user';
import { HttpService } from '../http';
import { AuthState } from "./auth.state";

export class AuthService {
    private url = `/api/auth`;
    private http: HttpService;

    constructor (token?: string) {
        this.http = new HttpService(token);
    }

    public login(credentials: LoginUser) {
        return this.http.handleRequest<User>(this.http.post(`${this.url}/login`, credentials, {
            observe: 'response',
            withCredentials: true,
        }), res => {
            AuthState.set(res.data);
        });
    }

    public register(credentials: RegisterUser) {
        return this.http.handleRequest<User>(this.http.post(`${this.url}/register`, credentials, {
            observe: 'response', 
            withCredentials: true,
        }), res => {
            AuthState.set(res.data);
        });
    }

    public logout() {
        return this.http.handleRequest<void>(this.http.get(`${this.url}/logout`, {
            observe: 'response',
            withCredentials: true,
        }), () => {
            AuthState.set(null);
        });
    }
}
