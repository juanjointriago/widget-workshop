import {create} from 'zustand';
import { authService } from '../services/auth/auth.service';
import type { User } from '../types/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, pass: string) => {
    const userData = await authService.login(email, pass);
    set({ user: userData, isAuthenticated: true });
  },
  logout: async () => {
    await authService.logout();
    set({ user: null, isAuthenticated: false });
  },
}));
