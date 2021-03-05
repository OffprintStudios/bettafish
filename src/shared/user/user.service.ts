import type { User } from '../../models/user';
import { HttpService } from '../http';

export class UserService {
    private url = `/api/user`;
    private http: HttpService;

    constructor() {
        this.http = new HttpService();
    }
}
