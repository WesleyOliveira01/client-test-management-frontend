import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export class AuthService {
    login(data: any){
        return api.post("/auth", data)
    }
}