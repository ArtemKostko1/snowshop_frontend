import { toast } from "react-toastify";

interface ErrorResponse {
  response?: {
    data: {
      message: string;
      statusCode: number;
    };
  };
  message: string;
}

export const errorsHandling = (
  baseError: string,
  error: ErrorResponse
): string => {
  let errorMessage: string;

  if (error.response && error.response.data.message) {
    console.error(error.response.data.message);
    errorMessage = error.response.data.message;
  } else {
    console.error(error.message);
    errorMessage = baseError;
  }

  if (
    error.response?.data.statusCode !== 401 &&
    error.response?.data.statusCode !== 409
  ) {
    toast.error(errorMessage);
  }

  return errorMessage;
};
