export type ServiceStatus = 'iniciado' | 'avanzado' | 'finalizado';

export interface ServiceOrder {
  id: string;
  vehicleId: string;
  mechanicId: string;
  items: {
    serviceId: string;
    productId?: string;
  }[];
  status: ServiceStatus;
  startTime?: Date;
  endTime?: Date;
  photos: string[]; // URLs de las fotos
  workshopId: string;
}
