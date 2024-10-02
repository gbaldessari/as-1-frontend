import { Subject } from "../../commons/subjects.types";
import axiosInstance from "../axiosIntance";

interface ScheduleResponse {
  subjects: Subject[];
}
export const scheduleService = async (payload: { token: string }) => {
  try {
    const response = await axiosInstance.get<ScheduleResponse>('/student/schedule', {
      headers: { Authorization: `Bearer ${payload.token}` }
    });

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Error fetching schedule:', error);
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
    return { success: false, error: errorMessage };
  }
};
