import type { ServiceOrder, ServiceStatus } from '../types/serviceOrder';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { isDevelopment } from '../config';
import { db } from '../firebase-config';

class ServiceOrderService {
  async createServiceOrder(order: Omit<ServiceOrder, 'id' | 'status'>): Promise<ServiceOrder> {
    if (isDevelopment) {
      console.log('--- DEV MODE: Faking service order creation ---');
      const newOrder = { id: `SO${Date.now()}`, status: 'iniciado', ...order } as ServiceOrder;
      return newOrder;
    }
    const newOrderData = { ...order, status: 'iniciado' };
    const docRef = await addDoc(collection(db, 'serviceOrders'), newOrderData);
    return { id: docRef.id, ...newOrderData } as ServiceOrder;
  }

  async updateStatus(orderId: string, status: ServiceStatus): Promise<void> {
    if (isDevelopment) {
      console.log(`--- DEV MODE: Faking status update for order ${orderId} to ${status} ---`);
      return;
    }
    const orderRef = doc(db, 'serviceOrders', orderId);
    await updateDoc(orderRef, { status });
  }
}

export const serviceOrderService = new ServiceOrderService();
