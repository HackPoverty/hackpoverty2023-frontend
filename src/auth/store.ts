import { create } from "zustand";

export const Roles = ["FARMER", "TECHNICIAN"] as const;
export type Role = typeof Roles[number];

type Store = {
  role? : Role;
  login: (role: Role) => void;
  logout: () => void;
}

export const useAuth = create<Store>(set => ({
  role: undefined,
  login(role) {
    set(state => ({
      ...state,
      role
    }))
  },
  logout() {
    set(state => ({
      ...state,
      role: undefined
    }))
  }
}));