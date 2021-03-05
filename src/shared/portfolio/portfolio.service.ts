import { HttpService } from "../http";
import type {User} from "../../models/user";

export class PortfolioService {
    private http: HttpService;

    constructor() {
        this.http = new HttpService();
    }

    public getUserInfo(userId: string) {
        return this.http.handleRequest<User>(this.http.get(`/api/user/get-user-info/${userId}`, {
            observe: 'response',
            withCredentials: true
        }));
    }
}