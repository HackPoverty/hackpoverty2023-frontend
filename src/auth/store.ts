import { create } from "zustand";

export type Role = "FARMER" | "TECHNICIAN";

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