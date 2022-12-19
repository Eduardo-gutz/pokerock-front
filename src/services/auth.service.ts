import { LoginDTO } from "../interfaces/auht.interface";
import { axionInstance } from "./axiosInstance";

export const login = async (loginDTO: LoginDTO): Promise<{ accessToken: string, refreshToken: string }>  => {
  const response = await axionInstance.post('/auth/login', loginDTO)

  return response.data
}