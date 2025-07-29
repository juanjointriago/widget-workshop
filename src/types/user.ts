export type UserProfile = 'super-admin' | 'propietario' | 'profesional' | 'contabilidad' | 'cliente';

export interface User {
  id: string;
  email: string;
  profile: UserProfile;
  workshopId?: string; // ID del taller al que pertenece
}
