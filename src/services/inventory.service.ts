import type { Product, Service } from '../types/inventory';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { isDevelopment } from '../config';

class InventoryService {
  async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    if (isDevelopment) {
      console.log('--- DEV MODE: Faking product add ---');
      const newProduct = { id: `P${Date.now()}`, ...product };
      console.log('Producto añadido (simulado):', newProduct);
      return newProduct;
    }
    const docRef = await addDoc(collection(db, 'products'), product);
    return { id: docRef.id, ...product };
  }

  async addService(service: Omit<Service, 'id'>): Promise<Service> {
    if (isDevelopment) {
        console.log('--- DEV MODE: Faking service add ---');
        const newService = { id: `S${Date.now()}`, ...service };
        console.log('Servicio añadido (simulado):', newService);
        return newService;
      }
      const docRef = await addDoc(collection(db, 'services'), service);
      return { id: docRef.id, ...service };
  }
}

export const inventoryService = new InventoryService();
