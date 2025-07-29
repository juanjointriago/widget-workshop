import { Client, Vehicle } from '../types/client';

class ClientService {
  async registerClient(client: Omit<Client, 'id'>): Promise<Client> {
    const newClient: Client = { id: Date.now().toString(), ...client };
    console.log('Cliente registrado:', newClient);
    return newClient;
  }

  async registerVehicle(vehicle: Omit<Vehicle, 'id'>): Promise<Vehicle> {
    const newVehicle: Vehicle = { id: Date.now().toString(), ...vehicle };
    console.log('Vehículo registrado:', newVehicle);
    return newVehicle;
  }
}

export const clientService = new ClientService();
