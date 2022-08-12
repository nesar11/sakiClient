import axios from "axios";
const BASE_URL ="http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3OTBhOGI5ZGY5YWUwZGJmNTNkODkiLCJ1c2VybmFtZSI6Im5lc2FyMTEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjAyNjg0MTAsImV4cCI6MTY2MDM1NDgxMH0.8lgafEKaQ9d3p25t5yPuRKbtFo8VsBnGBrXstlyHb50";

export const publicRequest = axios.create({
  baseURL:BASE_URL,
});
export const userRequest = axios.create({
  baseURL:BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
});