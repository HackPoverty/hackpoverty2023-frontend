import axios from "axios";
import jwt_decode from "jwt-decode";
import { create } from "zustand";

export const Roles = ["FARMER", "TECHNICIAN"] as const;
export type Role = typeof Roles[number];

type User = {
  uid: number;
  role: Role;
}

type Store = {
  iat?: number;
  user?: User;
  login: (data: LoginData) => Promise<Role>;
  logout: () => void;
}

export type LoginData = {
  username: string;
  password: string;
}

const baseApi = axios.create({
  baseURL: "http://chicken.albernihosting.ca",
})


type JWTPayLoad = {
  iat: number,
  drupal: {
    uid: number,
    role: string[]
  }
}

type Respose = { token: string }

const decodeToken = (token: string) => {
  const { iat, drupal } = jwt_decode<JWTPayLoad>(token);
  return {
    iat,
    user: {
      uid: drupal.uid,
      role: drupal.role.includes("ovo_technician") ? "TECHNICIAN" : "FARMER"
    } as User
  }
}

const TOKEN_STORAGE_KEY = "ovoflow_token" as const

const getUserFromLocalStorage = () => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY)
  if (!token) return { iat: undefined, user: undefined }
  return decodeToken(token)
}

export const useAuth = create<Store>(set => ({
  ...getUserFromLocalStorage(),
  login: async (data: LoginData) => {
    const response = await baseApi.get<Respose>('jwt/token', {
      params: {
        "_format": "json"
      },
      auth: data
    });
    localStorage.setItem(TOKEN_STORAGE_KEY, response.data.token)
    const decoded = decodeToken(response.data.token)
    set(state => ({
      ...state,
      ...decoded
    }))
    return decoded.user.role;
  },
  logout() {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    set(state => ({
      ...state,
      iat: undefined,
      user: undefined
    })
    )
  }
}));