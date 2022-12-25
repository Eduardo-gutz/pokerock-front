import { LoginDTO, Tokens } from "../interfaces/auht.interface";
import { axionInstance } from "./axiosInstance";

export const login = async (loginDTO: LoginDTO): Promise<Tokens>  => {
  const response = await axionInstance.post('/auth/login', loginDTO)

  return response.data
}