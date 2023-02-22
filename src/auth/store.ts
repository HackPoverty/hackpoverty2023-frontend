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


type JWTDecoded = {
  iat: number,
  drupal: {
    uid: number,
    role: string[]
  }
}

type Respose = { token: string }

export const useAuth = create<Store>(set => ({
  role: undefined,
  login: async (data: LoginData) => {
    const response = await baseApi.get<Respose>('jwt/token', {
      params: {
        "_format": "json"
      },
      auth: data
    });
    const { iat, drupal } = jwt_decode<JWTDecoded>(response.data.token);
    const role: Role = drupal.role.includes("ovo_technician") ? "TECHNICIAN" : "FARMER";
    set(state => ({
      ...state,
      iat,
      user: {
        role,
        uid: drupal.uid
      }
    }))
    return role;
  },
  logout() {
    set(state => ({
      ...state,
      user: undefined,
      iat: undefined
    }))
  }
}));