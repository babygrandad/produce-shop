import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const RegisterUser = async (data) => {
    try {
        // Make a POST request to the registration endpoint
        const response = await axios.post(`${baseUrl}/account/register`, data);
        return {
            success: true,
            data: response.data // Return the response data on success
        };
    } catch (error) {
        // Handle specific error responses
        if (error.response) {
            // The request was made and the server responded with a status code
            const status = error.response.status;
            const errorMessage = error.response.data?.message || "An error occurred";

            if (status === 400) {
                // Bad request - validation errors
                return {
                    success: false,
                    message: "Invalid registration details. Please check your input."
                };
            } else if (status === 409) {
                // Conflict - duplicate email or username
                return {
                    success: false,
                    message: "Email or username already in use."
                };
            } else {
                // Other errors
                return {
                    success: false,
                    message: errorMessage
                };
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            return {
                success: false,
                message: "No response from the server. Please try again later."
            };
        } else {
            // Something happened in setting up the request
            console.error('Error:', error.message);
            return {
                success: false,
                message: "An unexpected error occurred."
            };
        }
    }
};

export { RegisterUser };
