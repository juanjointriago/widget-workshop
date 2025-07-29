import { Workshop } from '../types/workshop';

class WorkshopService {
  // Simulación de creación de un taller
  async createWorkshop(workshopData: Omit<Workshop, 'id'>): Promise<Workshop> {
    const newWorkshop: Workshop = {
      id: Date.now().toString(),
      ...workshopData,
    };
    // En una app real, esto se guardaría en la base de datos
    console.log('Taller creado:', newWorkshop);
    return Promise.resolve(newWorkshop);
  }
}

export const workshopService = new WorkshopService();
