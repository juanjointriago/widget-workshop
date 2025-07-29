import { User, UserProfile } from '../../types/user';

class AuthService {
  // Simulación de una función de login
  async login(email: string, password_not_used: string): Promise<User> {
    // En una aplicación real, aquí se haría una llamada a la API
    console.log(password_not_used)
    let user: User;
    if (email.startsWith('superadmin')) {
      user = { id: '1', email, profile: 'super-admin' };
    } else if (email.startsWith('propietario')) {
      user = { id: '2', email, profile: 'propietario', workshopId: '1' };
    } else if (email.startsWith('profesional')) {
      user = { id: '3', email, profile: 'profesional', workshopId: '1' };
    } else if (email.startsWith('contabilidad')) {
        user = { id: '4', email, profile: 'contabilidad', workshopId: '1' };
    } else {
      user = { id: '5', email, profile: 'cliente', workshopId: '1' };
    }
    return Promise.resolve(user);
  }

  // Simulación de una función de logout
  async logout(): Promise<void> {
    // En una aplicación real, aquí se podría invalidar un token
    return Promise.resolve();
  }
}

export const authService = new AuthService();
