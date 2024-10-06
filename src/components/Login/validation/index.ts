// import interfaces
import { LoginFormErrorInterface, LoginFormInputInterface } from "../interfaces";

// Global validation
import { isEmailValid, isPasswordValid } from "@/utils/Validation/FormValidation";

export const isLoginFormValid = (formData: LoginFormInputInterface, setErrors: React.Dispatch<React.SetStateAction<LoginFormErrorInterface>>): boolean => {
    let isValid: boolean = false;

    if (!isEmailValid(formData.email)) {
        setErrors(prev => ({ ...prev, email: true }))
        isValid = true;
    }

    if (!isPasswordValid(formData.password)) {
        setErrors(prev => ({ ...prev, password: true }))
        isValid = true;
    }

    return isValid;
}