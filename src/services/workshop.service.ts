import { collection, addDoc } from 'firebase/firestore';
import { isDevelopment } from '../config';
import { db } from '../firebase-config';
import type { Workshop } from '../types/workshop';

class WorkshopService {
  async createWorkshop(workshopData: Omit<Workshop, 'id'>): Promise<Workshop> {
    if (isDevelopment) {
      console.log('--- DEVELOPMENT MODE: Faking workshop creation ---');
      const newWorkshop = { id: `W${Date.now()}`, ...workshopData };
      console.log('Taller creado (simulado):', newWorkshop);
      return newWorkshop;
    }

    const docRef = await addDoc(collection(db, 'workshops'), workshopData);
    return { id: docRef.id, ...workshopData };
  }
}

export const workshopService = new WorkshopService();
