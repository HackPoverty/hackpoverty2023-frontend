import jwt_decode from "jwt-decode"
import { baseApi } from "src/api"
import { create } from "zustand"

export const TOKEN_STORAGE_KEY = "ovoflow_token" as const
export const Roles = ["FARMER", "TECHNICIAN"] as const
export type Role = (typeof Roles)[number]

export type AuthUserUid = string;

export type AuthUser = {
  uid: AuthUserUid
  role: Role
}

type Store = {
  iat?: number
  user?: AuthUser
  login: (data: LoginData) => Promise<Role>
  logout: () => void
}

export type LoginData = {
  username: string
  password: string
}

const JWTUserRoles = ["authenticated", "ovo_farmer", "ovo_technician"] as const

type JWTPayLoad = {
  iat: number
  drupal: {
    uid: AuthUserUid
    role: (typeof JWTUserRoles)[number][]
  }
}

const decodeToken = (token: string) => {
  const { iat, drupal } = jwt_decode<JWTPayLoad>(token)
  return {
    iat,
    user: {
      uid: drupal.uid,
      role: drupal.role.includes("ovo_technician") ? "TECHNICIAN" : "FARMER",
    } as AuthUser,
  }
}

const getUserFromLocalStorage = () => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY)
  if (!token) return { iat: undefined, user: undefined }
  return decodeToken(token)
}

export const useAuth = create<Store>((set) => ({
  ...getUserFromLocalStorage(),
  login: async (data: LoginData) => {
    const response = await baseApi.get<{ token: string }>("jwt/token", {
      params: { _format: "json" },
      auth: data,
    })
    localStorage.setItem(TOKEN_STORAGE_KEY, response.data.token)
    const decoded = decodeToken(response.data.token)
    set((state) => ({
      ...state,
      ...decoded,
    }))
    return decoded.user.role
  },
  logout() {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    set((state) => ({
      ...state,
      iat: undefined,
      user: undefined,
    }))
  },
}))
