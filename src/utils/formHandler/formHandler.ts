export const globalFormHandler = <
    FormData extends Record<string, string | number | boolean>>(
        id: string, // Ensure `id` is a valid key of the form data
        value: string | number | boolean,
        setFormData: React.Dispatch<React.SetStateAction<FormData>>, // Set state for form data
    ) => {
    // Update form data
    setFormData((prev) => ({
        ...prev,
        [id]: value, // Ensure the `id` is one of the keys of the form data
    }));
};