export interface RegisterUser {
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
    termsAgree: boolean;
    isMinAge: boolean;
}
