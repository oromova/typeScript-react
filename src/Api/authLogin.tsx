import api from "./api"

export const login = async (username:string, password:string) => {
  try {
    const response = await api.post("/auth/login", {username, password})
    return response.data
  }
  catch (error) {
    throw error
  }
} 

export const logout = async () => {
  try {
    await api.post("/auth/logout")
    localStorage.removeItem("token")
  }
  catch (error) {
    throw error
  }
}