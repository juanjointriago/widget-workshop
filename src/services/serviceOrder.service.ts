import { ServiceOrder, ServiceStatus } from '../types/serviceOrder';

class ServiceOrderService {
  // Simulación de la creación de una orden de servicio
  async createServiceOrder(order: Omit<ServiceOrder, 'id' | 'status'>): Promise<ServiceOrder> {
    const newOrder: ServiceOrder = {
      id: Date.now().toString(),
      status: 'iniciado',
      ...order,
    };
    console.log('Orden de servicio creada:', newOrder);
    return newOrder;
  }

  // Simulación de la actualización del estado
  async updateStatus(orderId: string, status: ServiceStatus): Promise<ServiceOrder> {
    console.log(`Orden ${orderId} actualizada a ${status}`);
    // Aquí iría la lógica para encontrar y actualizar la orden
    return {} as ServiceOrder; // Retorno simulado
  }
}

export const serviceOrderService = new ServiceOrderService();
