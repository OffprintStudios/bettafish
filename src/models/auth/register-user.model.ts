export interface RegisterUser {
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
    agreedToPolicies: boolean;
    isMinAge: boolean;
    inviteCode: string;
}
