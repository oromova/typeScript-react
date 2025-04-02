import api from "./api"

export const getProduct = async () => {
  try{
    const response = await api.get("/products")
    return response.data
  }
  catch(error){
    throw error
  }
}

export const addProduct = async (title:string) => {
  try {
    const response = await api.post("/products/add", {title})
    return response.data
  }
  catch(error) {
    throw error
  }
}

export const updateProducts = async (id: ( undefined), title:string) => {
  try{
    const response = await api.put(`/products/${id}`, {title})
    return response.data
  }
  catch(error) {
    throw error
  }
}