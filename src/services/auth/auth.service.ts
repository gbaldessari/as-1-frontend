import axiosInstance from "../axiosIntance";

export const loginService = async (payload: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post('/auth/login', payload);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error en loginService:', error);
    return { success: false, error: String(error) };
  }
};
