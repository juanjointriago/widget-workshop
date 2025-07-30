import type { User } from '../../types/user';
import { auth, db } from '../../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { isDevelopment } from '../../config';
import dummyData from '../../dummy.json';

class AuthService {
  async login(email: string, pass: string): Promise<User> {
    if (isDevelopment) {
      console.log('--- DEVELOPMENT MODE: Faking login ---');
      const user = dummyData.users.find(u => u.email === email);
      if (user) return user as User;
      throw new Error('User not found in dummy data');
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    const userDocRef = doc(db, "users", userCredential.user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      throw new Error("User data not found in Firestore.");
    }

    return { id: userDoc.id, ...userDoc.data() } as User;
  }

  async logout(): Promise<void> {
    if (isDevelopment) {
      console.log('--- DEVELOPMENT MODE: Faking logout ---');
      return Promise.resolve();
    }
    await signOut(auth);
  }
}

export const authService = new AuthService();
