export interface LoginDTO {
  username: string
  password: string
}

export interface Tokens {
  accessToken: string
  refreshToken: string
  isAuthenticated: boolean
}