import axiosInstance from "../axiosIntance";

export const loginService = async (payload: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post('/login', payload);
    console.log(response.data);  // Aquí puedes manejar la respuesta según lo necesites
    return { success: true, data: response.data }; // Puedes devolver más datos según lo que recibas de la API
  } catch (error) {
    console.error('Error en loginService:', error);
    return { success: false, error: String(error) };
  }
};
