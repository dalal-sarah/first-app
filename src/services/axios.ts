import axios from "axios"

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export const getPosts = async () => {
  const response = await http.get("/posts");
  return response.data;
}
export const getPostById = async (id:number) => {
  const response = await http.get(`/posts/${id}`);
  return response.data;
}