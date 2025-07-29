import type { Client, Vehicle } from '../types/client';
import { collection, addDoc } from 'firebase/firestore';
import { isDevelopment } from '../config';
import { db } from '../firebase-config';

class ClientService {
  async registerClient(client: Omit<Client, 'id'>): Promise<Client> {
    if (isDevelopment) {
      console.log('--- DEV MODE: Faking client registration ---');
      const newClient = { id: `C${Date.now()}`, ...client };
      return newClient;
    }
    const docRef = await addDoc(collection(db, 'clients'), client);
    return { id: docRef.id, ...client };
  }

  async registerVehicle(vehicle: Omit<Vehicle, 'id'>): Promise<Vehicle> {
    if (isDevelopment) {
        console.log('--- DEV MODE: Faking vehicle registration ---');
        const newVehicle = { id: `V${Date.now()}`, ...vehicle };
        return newVehicle;
      }
      const docRef = await addDoc(collection(db, 'vehicles'), vehicle);
      return { id: docRef.id, ...vehicle };
  }
}

export const clientService = new ClientService();
