import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const LoginUser = async (data) => {
    try {
        // If your API expects the data object directly
        const response = await axios.post(`${baseUrl}/account/login`, data);
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

            if (status === 401) {
                // Unauthorized - incorrect credentials
                return {
                    success: false,
                    message: "Incorrect username or password."
                };
            } else if (status === 403) {
                // Forbidden - account locked or access denied
                return {
                    success: false,
                    message: "Your account is locked. Please contact support."
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

export { LoginUser };
