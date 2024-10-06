export interface LoginFormInputInterface extends Record<string, string> {
    email: string;
    password: string;
}

export interface LoginFormErrorInterface {
    email: boolean;
    password: boolean;
}