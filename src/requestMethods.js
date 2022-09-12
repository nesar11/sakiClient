import axios from "axios";
const BASE_URL ="http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmY1ZWZhYTY3NWEyNTQyMjcxNjE4Y2QiLCJ1c2VybmFtZSI6Im5lc2FyMTEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjE3MTQwODMsImV4cCI6MTY2MTgwMDQ4M30.BsNpLErhuVMM82zOIz6SHBZ8l1ckor1d6UDzggqfehQ";

export const publicRequest = axios.create({
  baseURL:BASE_URL,
});
export const userRequest = axios.create({
  baseURL:BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
});